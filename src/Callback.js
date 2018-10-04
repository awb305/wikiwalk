import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import auth0Client from './utils/Auth';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Logo from './components/Logo';

const styles = theme =>({
  loadingCard: {
    padding: '4rem',
    margin: 'auto',
    marginTop: '4rem',
    width: '75%',

  },
  logo: {
    fontSize: '150px',
    color: theme.palette.primary.main
  }
});

class Callback extends Component {
  async componentDidMount() {
    await auth0Client.handleAuthentication();
    this.props.history.replace('/home');
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.loadingCard}>
        <Grid container direction="column" alignItems="center" justify="center">
          <Grid item >
            <Logo class={classes.logo}/>
          </Grid>
          <Grid item>
            <Typography variant="display2">Loading profile...</Typography>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(withRouter(Callback));