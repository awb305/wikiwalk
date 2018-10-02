import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
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
    const { classes } = this.props
    return (
      <div>
        {
          !auth0Client.isAuthenticated() &&
          <Button color="secondary" className={classes.loginBtn} variant="contained" onClick={this.LoginHandler}>Sign In</Button>
        }
        {
          auth0Client.isAuthenticated() &&
          <div>
            <Popover userId={this.props.userId} setPage={this.props.setPage}>
              <ListItem button onClick={this.LoginHandler}>
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
