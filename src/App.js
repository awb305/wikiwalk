import React, {
  Component
} from 'react';
import Sample from './components/sample';
import CssBaseline from '@material-ui/core/CssBaseline';
import Wrapper from './components/Wrapper';
import Theme from './Theme';


class App extends Component {

  render() {
    return (
      <Theme>
      <React.Fragment >
      <CssBaseline/>
      <Wrapper/>
      </React.Fragment>
      <Sample></Sample>
      </Theme>
    );
  }
}

export default App;