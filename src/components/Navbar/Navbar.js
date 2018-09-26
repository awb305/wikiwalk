import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Logo from './../Logo';
import UserMenu from './Popover';
import './../../styles/css/styles.css';
import Auth0 from './auth0';

const styles = () =>({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
});




class Navbar extends React.Component  {

  render() {
    const { classes } = this.props;
    return (
      <div className={ classes.root }>
        <AppBar
          color="primary">
  
          <Toolbar>
            <Logo color="secondary" />
  
            <div className={ classes.grow }>
              <Typography variant="title" color="inherit" className="m-sm-left">
                Wiki Walking Tours
              </Typography>
            </div>
  
          <Auth0 />
  
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  
}



export default withStyles(styles, { withTheme: true })(Navbar);