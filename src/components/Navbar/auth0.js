import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button'
import auth0Client from '../../utils/Auth';
import Popover from './Popover';

import jwt from 'jsonwebtoken';
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

  signOut = () => {
    auth0Client.signOut();
    this.props.onSetUserId("loggedOut");
    
  };



  getId = () => {
    return new Promise((resolve, reject) => {
      let token = auth0Client.getIdToken();
      console.log(token);
      let decodedObj = jwt.decode(token);
      console.log(decodedObj);
      if (decodedObj !== null) {
        resolve(decodedObj);
      } else {
        reject(console.error());
      }
    });
  };

  setId = async () => {
    const loginId = await this.getId();
    console.log(loginId);
    this.props.onSetUserId(loginId.sub);
  };


  LoginHandler = () => {
    let token = auth0Client.getIdToken();
    console.log(token);
    (token === undefined || token === null ) && auth0Client.signIn();
    (token) && this.setId();
   // (token === undefined) ? auth0Client.signIn() : this.props.onSetUserId('loggedOut')

    /* if(token === undefined){
      auth0Client.signIn();
    }else{
      this.props.onSetUserId('loggedOut')
      //this.forceUpdate;
    } */
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

const mapStateToProps = state => ({
  userId: state.userId
});

// makes the 'onSetUserId' to the prop that corresponds to the setUserId which was imported from actions

const mapActionsToProps = {
  onSetUserId: setUserId
};

export default connect(mapStateToProps, mapActionsToProps)(Auth0);

//withRouter(Auth0)