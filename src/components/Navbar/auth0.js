import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button'
import auth0Client from '../../utils/Auth';
import Popover from './Popover';

import { connect } from 'react-redux';
import { setUserId } from '../../actions/setUserId-action';


class Auth0 extends Component {

  signOut = () => {
    auth0Client.signOut();
    this.props.onSetUserId("loggedOut");
  };

  signIn = () => {
    let token = auth0Client.getIdToken();
    (token === undefined || token === null ) && auth0Client.signIn();
  };

  render() {
    console.log(this.props.userId);
    return (
      <div>
        {
          !auth0Client.isAuthenticated() &&
          <Button color="secondary" variant="contained" onClick={this.signIn}>Sign In</Button>
        }
        {
          auth0Client.isAuthenticated() &&
          <div>
            <Popover>
               {/* <ListItem button onClick={this.onSetUserId('stupidHead')}> */}
               <ListItem button onClick={this.signOut}>
                <ListItemText primary="Sign Out" />
              </ListItem>
            </Popover>
          </div>
        }
      </div>
    );
  }
}

//Redux

const mapStateToProps = state => ({
  userId: state.userId
});

const mapActionsToProps = {
  onSetUserId: setUserId
};

export default connect(mapStateToProps, mapActionsToProps)(Auth0);


//Do we need to add routing here? 
//withRouter(Auth0)