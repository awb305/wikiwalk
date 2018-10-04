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
  signOut = props => {
    auth0Client.signOut();
    props.history.replace('/');
  };

  LoginHandler = () => {
    if(this.props.userId === 'loggedOut'){
      auth0Client.signIn();
    }else{
      this.props.logout();
      this.forceUpdate;
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        {
          !auth0Client.isAuthenticated() &&
          <Button color="secondary" className={classes.loginBtn} variant="contained" onClick={this.LoginHandler}>Sign In</Button>
        }
        {
          auth0Client.isAuthenticated() &&
          <div>
            <Popover userId={this.props.userId} username={this.props.username} setPage={this.props.setPage}>
              <ListItem button onClick={this.LoginHandler}>
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

export default withStyles(styles) (withRouter(Auth0));
