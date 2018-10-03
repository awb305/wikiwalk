import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Logo from '../Logo';
import './../../styles/css/styles.css';
import Auth0 from './auth0';

const styles = theme =>({
  root: {
    flexGrow: 1, 
  },
  grow: {
    flexGrow: 1
  },
  toolbar: theme.mixins.toolbar,
  logo: {
    fontSize: '40px',
    transition: theme.transitions.create(
      ['color'],
      {duration: theme.transitions.duration.standard}
    ),
    '&:hover': {
      color: theme.palette.primary.light,
      cursor: 'pointer'
    }
  }
});

class Navbar extends React.Component {
  render() {
    const { classes } = this.props;
    //console.log(this.props.setId);
    return (
      <div className={ classes.root }>
        <AppBar
          color="primary"
        >
          <Toolbar>
            <div onClick={() => this.props.setPage('landing')}>

              <Logo color="secondary" class={classes.logo}/>
            </div>
            <div className={ classes.grow }>
              <Typography variant="display1" color="inherit" className="m-sm-left">
                Wiki Walking Tours
              </Typography>
            </div>
            <Auth0 logout={this.props.logout} username={this.props.username} userId={this.props.userId} setPage={this.props.setPage}/>
            {console.log(this.props)}
          </Toolbar>
        </AppBar>
        <div className={classes.toolbar} />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Navbar);
