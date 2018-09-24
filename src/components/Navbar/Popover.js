import React from 'react';
//import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import IconButton from '@material-ui/core/IconButton';

import UserIcon from './UserIcon';


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

          Hello World
        </Popover>
      </div>
    );
  }
}

export default UserMenu;