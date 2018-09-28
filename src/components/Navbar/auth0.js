import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import auth0Client from '../../utils/Auth';

class Auth0 extends Component {
  
  // signOut = () => {
  //   auth0Client.signOut();
  //   props.history.replace('/');
  // };

  render() {
   
    return (
      <div>
        {
          !auth0Client.isAuthenticated() &&
          <ListItem button onClick={auth0Client.signIn}>Sign In</ListItem>
        }
        {
          auth0Client.isAuthenticated() &&
          <div>
            <ListItem button onClick={auth0Client.signOut}>Sign Out</ListItem>
          </div>
        }
      </div>
    );
  };
}


export default withRouter(Auth0);