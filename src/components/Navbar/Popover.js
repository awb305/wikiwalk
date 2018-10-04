import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Popover from '@material-ui/core/Popover';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import FavoriteIcon from '@material-ui/icons/FavoriteOutlined';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import SearchIcon from '@material-ui/icons/Search';
import UserIcon from './UserIcon';
import { compose } from 'recompose';

import { connect } from 'react-redux';
import { setDisplayToggle } from '../../actions/setDisplayToggle-action';



const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '260px',
    backgroundColor: theme.palette.background.paper
  },
  userbtn: {
    '&:hover':{
      color: theme.palette.primary.light
    }
  }
});

class UserMenu extends React.Component {
  state = {
    anchorEl: null,
  }

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget
    })
  }
  
  handleClose = () => {
    this.setState({
      anchorEl: null
    })
  }

  resultsHandler = () => {
    this.props.onSetDisplayToggle('results');
    this.props.history.push('/results')
  }

  savedHandler = () => {
    this.props.onSetDisplayToggle('saved');
    this.props.history.push('/results')
  }

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;
    const open = Boolean(anchorEl);

    return (
      <div>
        <IconButton
          aria-owns={open ? 'user-menu' : null}
          aria-haspopup="true"
          variation="contained"
          onClick={this.handleClick}
          className={classes.userbtn}
        >
          <UserIcon className={classes.userbtn} />
        </IconButton>

        <Popover
          id="user-menu"
          open={open}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
        >

          <div className={classes.root}>
            <List component="nav">
              <ListItem>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary={`Logged in as ${this.props.username}`}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={`User ID: ${this.props.userId}`} />
              </ListItem>
              <Divider />
              {/* <ListItem button onClick={() => this.props.setPage('favorites')}> */}
              <ListItem button onClick={this.resultsHandler}>
                <ListItemIcon>
                  <FavoriteIcon />
                </ListItemIcon>
                <ListItemText primary="Saved" />
              </ListItem>
              <ListItem button onClick={() => this.props.setPage('home')}>
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText primary="Search" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <DeveloperBoardIcon />
                </ListItemIcon>
                <ListItemText primary="API" onClick={() => {window.location.href='http://wikiwalking.azurewebsites.net/'}} />
              </ListItem>
              <Divider />
                {this.props.children}
            </List>
          </div>
        </Popover>
      </div>
    );
  }
}

UserMenu.propTypes = {
  classes: PropTypes.object.isRequired
}

/* export default withStyles(styles)(UserMenu); */

const mapStateToProps = state => ({
  userId: state.userId
});

const mapActionsToProps = {
  onSetDisplayToggle: setDisplayToggle
};



export default compose(
  withStyles(styles, {name: 'UserMenu'}),
  withRouter(UserMenu),
  connect(mapStateToProps, mapActionsToProps))(UserMenu);
