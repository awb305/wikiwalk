import React from 'react';
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
    fontSize: 18
  }
});

const SearchBar = props => {
  const { classes } = props;
  return (
    <Grid container alignItems="center">
      <Grid item>
        <TextField  
          id="location"
          label="Search a location"
          variant="outlined"
          fullWidth={true}
          value={props.query}
          onChange={props.onChange}
          InputProps={{
            classes: {
              input: classes.resize
            }
          }}
          InputLabelProps={{
            classes: {
              root: classes.resize
            }
          }}
        />
        </Grid>
        <Grid item>
          <IconButton className={classes.search}>
            <SearchIcon />
          </IconButton>
          
        </Grid>
      
    </Grid>
  );
};

export default withStyles(styles)(SearchBar);