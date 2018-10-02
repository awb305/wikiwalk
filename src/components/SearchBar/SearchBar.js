import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';


const styles = theme => ({
  search: {
    backgroundColor: theme.palette.secondary.main,
    marginLeft: '1rem',
    color: '#fff'
  }, 
  resize:{
    fontSize: 18,
    
  },
  iconBtn: {
    backgroundColor: theme.palette.secondary.main,
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50px',
    borderRadius: '0px 5px 5px 0px',
    border: 'solid 1px #BDBDBD',
    borderLeft: 'none', 
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      
    }
  },
  searchBar: {
    display: 'flex'
  },
  outline: {
    borderRadius: '5px 0px 0px 5px'
  }
});

const SearchBar = props => {
  const { classes } = props;

  return (

      <div className={classes.searchBar}>
        <TextField  
          id="location"
          label="Search a location"
          variant="outlined"
          value={props.query}
          onChange={props.onChange}
          InputProps={{
            classes: {
              input: classes.resize,
              notchedOutline: classes.outline
            }
          }}
          InputLabelProps={{
            classes: {
              root: classes.resize
            }
          }}
        />
        <div className={classes.iconBtn}>
          <SearchIcon />
        </div>
      </div>
  );
};

export default withStyles(styles)(SearchBar);