import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Navbar from './../Navbar';
import Callback from '../../Callback';
import Home from './../Pages/Home';

class Wrapper extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home}/>
          <Route exact path='/callback' component={Callback}/>
        </div>
      </Router>
    )
  }
}

export default Wrapper;