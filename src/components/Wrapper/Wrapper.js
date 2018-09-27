import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Callback from '../../Callback';
import Home from './../Pages/Home';
import auth0Client from '../../utils/Auth';
const jwt = require('jsonwebtoken');

class Wrapper extends React.Component {
  state = {
    auth: '',
    test: 'test'
  };

  getId = () => {
    let token = auth0Client.getIdToken();
    let decodedObj = jwt.decode(token)
    console.log(decodedObj);
    console.log(decodedObj.sub); //this is the user_id
    this.setState({
      auth: decodedObj.sub
    });
  };


  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' render={() =>  <Home getId={this.getId} test={this.state.test} />}/>
          <Route exact path='/callback' component={Callback}/>
        </div>
      </Router>
    )
  }
}

export default Wrapper;