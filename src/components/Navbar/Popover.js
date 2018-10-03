import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '260px',
    backgroundColor: theme.palette.background.paper
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
        >
          <UserIcon />
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
                <ListItemText primary="Logged in as [User]"/>
              </ListItem>
              <ListItem>
                <ListItemText primary={`User ID: ${this.props.userId.split('|')[1]}`} />
              </ListItem>
              <Divider />
              <ListItem button onClick={() => this.props.setPage('favorites')}>
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
                <ListItemText primary="API" />
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

export default withStyles(styles)(UserMenu);
