import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button'
import auth0Client from '../../utils/Auth';
import Popover from './Popover';

class Auth0 extends Component {
  signOut = props => {
    auth0Client.signOut();
    props.history.replace('/');
  };

  LoginHandler = () => {
    console.log(this.props.userId);
    if(this.props.userId === 'loggedOut'){
      auth0Client.signIn();
    }else{
      this.props.logout();
      this.forceUpdate;
    }
  };

  render() {
    console.log(this.props.userId);
    return (
      <div>
        {
          !auth0Client.isAuthenticated() &&
          <Button color="secondary" variant="contained" onClick={this.LoginHandler}>Sign In</Button>
        }
        {
          auth0Client.isAuthenticated() &&
          <div>
            <Popover>
              <ListItem button onClick={this.LoginHandler}>
                <ListItemText primary="Sign Out" />
              </ListItem>
            </Popover>
          </div>
        }
      </div>
    );
  }
}

export default withRouter(Auth0);
