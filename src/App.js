import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Wrapper from './components/Wrapper';
import Theme from './Theme';
import Sample from './components/Sample';
import Callback from './Callback';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Theme>
        <React.Fragment>
          <CssBaseline />
          <Router>
<<<<<<< HEAD
          <div>
            <Route exact path='/' component={Wrapper}/>
            <Route exact path='/callback' component={Callback}/>
          </div>
=======
            <div>
              <Route exact path="/" component={Wrapper} />
              <Route exact path="/callback" component={Callback} />
            </div>
>>>>>>> 81405e5148eceb4e7ea357b73adf21c4ff687785
          </Router>
        </React.Fragment>
      </Theme>
    );
  }
}

export default App;
