import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button'
import auth0Client from '../../utils/Auth';
import Popover from './Popover';

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
          <Button color="secondary" variant="contained" onClick={auth0Client.signIn}>Sign In</Button>
        }
        {
          auth0Client.isAuthenticated() &&
          <div>
            <Popover>
              <ListItem button onClick={auth0Client.signOut}>
                <ListItemText primary="Sign Out" />
              </ListItem>
            </Popover>
          </div>
        }
      </div>
    );
  };
}


export default withRouter(Auth0);