import React from 'react';
import {withRouter} from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import auth0Client from '../../Auth';
const jwt = require('jsonwebtoken');

function Auth0(props) {
  const signOut = () => {
    auth0Client.signOut();
    props.history.replace('/');
  };

  const getId = () => {
    let token = auth0Client.getIdToken();
    let decodedObj = jwt.decode(token)
    console.log(decodedObj);
    console.log(decodedObj.sub);
  };

  return (
    <div>
      {
        !auth0Client.isAuthenticated() &&
        <ListItem button onClick={auth0Client.signIn}>Sign In</ListItem>
      }
      {
        auth0Client.isAuthenticated() &&
        <div>
          {getId()}
          <ListItem button onClick={() => {signOut()}}>Sign Out</ListItem>
        </div>
      }
    </div>
  );
}

export default withRouter(Auth0);