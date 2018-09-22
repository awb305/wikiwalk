import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Wrapper from './components/Wrapper';
import Theme from './Theme';


class App extends Component {

  render() {
    return (
      <Theme>
        <React.Fragment>
          <CssBaseline />
          <Wrapper />
        </React.Fragment>
      </Theme>
    );
  }
}

export default App;
