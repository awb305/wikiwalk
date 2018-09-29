import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Wrapper from './components/Wrapper';
import Home from './components/Pages/Home';
import Landing from './components/Pages/Landing';
import Results from './components/Pages/Results';
import Theme from './Theme';
//import Sample from './components/Sample';
import Callback from './Callback';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Theme>
        <React.Fragment>
          <CssBaseline />
          <Router>
            <div>
              <Route exact path="/" component={Wrapper} />
              <Route exact path="/callback" component={Callback} />
            </div>
          </Router>
        </React.Fragment>
      </Theme>
    );
  }
}

export default App;
