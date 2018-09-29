import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import auth0Client from '../../utils/Auth';

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
        {!auth0Client.isAuthenticated() && (
          <ListItem button 
            onClick={this.LoginHandler}>
            Sign In
          </ListItem>
        )}
        {auth0Client.isAuthenticated() && (
          <div>
            <ListItem
              button
              onClick={this.LoginHandler}
            >
              Sign Out
            </ListItem>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Auth0);
