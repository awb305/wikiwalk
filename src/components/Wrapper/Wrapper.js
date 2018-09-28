import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Callback from '../../Callback';
import Home from '../Pages/Home';
import auth0Client from '../../utils/Auth';
const jwt = require('jsonwebtoken');

class Wrapper extends React.Component {
  state = {
    userId: 'loggedOut'
  };

  getId = () => {
    return new Promise((resolve, reject) => {
      let token = auth0Client.getIdToken();
      console.log(token);
      let decodedObj = jwt.decode(token);
      console.log(decodedObj);
      if (decodedObj !== null) {
        resolve(decodedObj);
      } else {
        reject(console.error());
      }
    });
  };

  setId = async () => {
    const loginId = await this.getId();
    console.log(loginId);
    this.setState({
      userId: loginId.sub
    });
  };

  logout = () => {
    auth0Client.signOut();
    this.setState({
      userId: 'loggedOut'
    })
  }

  componentDidMount() {
    if (this.state.userId === 'loggedOut') {
      this.setId();
    }
  }

  render() {
    return <Home logout = {
      this.logout
    } 
    userId={this.state.userId}
    /> ;
  }
}

export default Wrapper;