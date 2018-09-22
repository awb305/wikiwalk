import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Wrapper from './components/Wrapper';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Wrapper />
      </React.Fragment>
    );
  }
}

export default App;
