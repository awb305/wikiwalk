import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Logo from './../Logo';
import UserMenu from './Popover';
import './../../styles/css/styles.css';

const styles = theme =>({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  toolbar: theme.mixins.toolbar
});


class Navbar extends React.Component  {

  render() {
    const { classes } = this.props;
    return (
      <div className={ classes.root }>
        <AppBar
          color="primary"
        >
          <Toolbar>
            <Logo color="secondary" />
  
            <div className={ classes.grow }>
              <Typography variant="display1" color="inherit" className="m-sm-left">
                Wiki Walking Tours
              </Typography>
            </div>
  
          <UserMenu />
  
          </Toolbar>
        </AppBar>
        <div className={classes.toolbar} />
      </div>
    );
  }
  
}



export default withStyles(styles, { withTheme: true })(Navbar);