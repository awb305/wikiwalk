import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import auth0Client from '../../utils/Auth';

class Auth0 extends Component {
<<<<<<< HEAD
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
=======
  
  // signOut = () => {
  //   auth0Client.signOut();
  //   props.history.replace('/');
  // };
>>>>>>> a195a5ef6735ab57959e961153eba74d050efc05

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
<<<<<<< HEAD
            <ListItem
              button
              onClick={this.LoginHandler}
            >
              Sign Out
            </ListItem>
=======
            <ListItem button onClick={auth0Client.signOut}>Sign Out</ListItem>
>>>>>>> a195a5ef6735ab57959e961153eba74d050efc05
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Auth0);
