import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  coolBtn: {
    width: '300px',
    height: '300px',
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.75rem',
  }
});

const CoolBtn = props => {
  const { classes } = props;
  return (
    <Button 
      variant="fab"
      className={classes.coolBtn}
    >
      <Typography variant="display3" color="inherit" align="center">
        Show Me
        <br />Something
        <br />Cool
        <br />Near Me
      </Typography>
    </Button>
  );
};

export default withStyles(styles)(CoolBtn);