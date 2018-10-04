import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import Landing from './../Pages/Landing';

class Wrapper extends React.Component {
  
  render() {
    return <Landing></Landing>
  }
}

export default Wrapper;