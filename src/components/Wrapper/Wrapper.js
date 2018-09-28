import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Callback from '../../Callback';
import Home from '../Pages/Home';
import auth0Client from '../../utils/Auth';
import jwt from 'jsonwebtoken';
import Sample from '../Sample';
import Results from '../Pages/Results';

class Wrapper extends React.Component {
  state = {
    userId: 'loggedOut',
    page: "home",
    lon: 35.2271,
    lat: -80.8431,

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
  };

  setCoords = (lon, lat) => {
    this.setState({
      lon: lon,
      lat: lat
    })
  }

  componentDidMount() {
    if (this.state.userId === 'loggedOut') {
      this.setId();
    }
  }

  setPage = (page) => {
    this.setState({
      page: page
    })
  }; 

  render() {
    if(this.state.page === 'home'){
      return <Home logout = {
        this.logout
      } 
      userId={this.state.userId}
      setCoords={this.setCoords}
      setPage={this.setPage}
      /> ;
    }else if(this.state.page === 'results'){
      
      return<Results></Results>
    }
  }
}

export default Wrapper;