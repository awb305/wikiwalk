import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import Button from '@material-ui/core/Button'
import auth0Client from '../../utils/Auth';
import Popover from './Popover';
import { compose } from 'recompose';

import { connect } from 'react-redux';
import { setUserId } from '../../actions/setUserId-action';

const styles = theme => ({
  loginBtn: {
    transition: theme.transitions.create(
      ['background-color', 'color'],
      {duration: theme.transitions.duration.standard}
    ),
    '&:hover': {
      backgroundColor: theme.palette.primary.light, 
      color: theme.palette.primary.main
    }
  }
});



class Auth0 extends Component {

  signOut = () => {
    auth0Client.signOut();
    this.props.onSetUserId("loggedOut");
  };

  signIn = () => {
    let token = auth0Client.getIdToken();
    (token === undefined || token === null ) && auth0Client.signIn();
  };

  render(){
    const { classes } = this.props;
    return (
      <div>
        {
          !auth0Client.isAuthenticated() &&
          <Button color="secondary" className={classes.loginBtn}  variant="contained" onClick={this.signIn}>Sign In</Button>
        }
        {
          auth0Client.isAuthenticated() &&
          <div>
            <Popover userId={this.props.userId} username={this.props.username} setPage={this.props.setPage}>
              <ListItem button onClick={this.signOut}>
                <ListItemIcon>
                  <MeetingRoomIcon />
                </ListItemIcon>
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



export default compose(
  withStyles(styles, {name: 'Auth0'}),
  connect(mapStateToProps, mapActionsToProps))(Auth0);