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
  /* constructor(props) {
    super(props);
    this.onSetUserId = this.onSetUserId.bind(this);
  }

  onSetUserId(newId) {
    this.props.onSetUserId(newId);
  } */

  /* constructor(props) {
    super(props);
    this.onSetUserId = this.onSetUserId.bind(this); 
    this.LoginHandler = this.LoginHandler.bind(this);
  }

  onSetUserId(newId) {
    this.props.OnSetUserId(newId);
  }
 */

  signOut = props => {
    auth0Client.signOut();
    props.history.replace('/');
  };

  LoginHandler = () => {
    console.log(this.props.userId);
    if(this.props.userId === 'loggedOut'){
      auth0Client.signIn();
    }else{
      this.props.onSetUserId('loggedOut')
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
               {/* <ListItem button onClick={this.onSetUserId('stupidHead')}> */}
               <ListItem button onClick={this.LoginHandler()}>
                <ListItemText primary="Sign Out" />
              </ListItem>
            </Popover>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userId: state.userId
});

// makes the 'onSetUserId' to the prop that corresponds to the setUserId which was imported from actions

const mapActionsToProps = {
  onSetUserId: setUserId
};

export default connect(mapStateToProps, mapActionsToProps)(Auth0);

//withRouter(Auth0)