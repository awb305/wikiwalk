import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: theme.spacing.unit * 4
  },
  bodytext: {
    fontSize: '1.5rem',
    padding: '1rem'  
  },
  BreadCrumb: {
    fontSize: '1.25rem',
    padding: '1rem 0'
  },
  link: {
    textDecoration: 'none'
  },
  heartIcon: {
    "&:hover": {
      color: 'secondary'
    }
  }

});



class Header extends React.Component {
  state = {
    favorited: this.props.favorited
  }

  handleClick = event => {
    if(this.state.favorited){
      this.setState({favorited: false});
    }else{
      this.setState({favorited: true});
    }
  }

  render(){
    const { classes } = this.props.class;
    return(
      <React.Fragment>
        <Grid item>
          <Typography variant="display1">
            {/* {data.title} */}
             {this.props.title}
          </Typography>
        </Grid>
        <Grid item onClick={this.handleClick}>
          {this.state.favorited ? <FavoriteIcon color="secondary" />: <FavoriteBorderIcon className={classes} color="primary" />}
        </Grid>
      </React.Fragment>
    );
  }
}

const Body = props => {

  return(
    <React.Fragment>
      <Grid item>
        <Typography className={props.class}>
          {props.body}
        </Typography>
      </Grid>
    </React.Fragment>
  );
}

const Foot = props => {

  return (
    <React.Fragment>
      <Grid item>
        <Typography className={props.class.breadcrumb}>
          {props.breadcrumb}
        </Typography>
      </Grid>
      <Grid item>
        <a href={props.url} target="_blank" className={props.class.link}>
          <Button variant="contained" color="secondary">
            Click Here to Read the Full Article
          </Button>
        </a>
      </Grid>
    </React.Fragment>
  );
}

class Result extends React.Component {

  render(){
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root}>
          <Grid container direction="row" alignItems="center" justify="center">
              {/* <Grid item xs={3}>
                Image Goes Here
              </Grid> */}
              <Grid item xs={10} container justify="space-between">
                <Header title={this.props.title} click={this.handleClick} favorited={this.props.favorited} class={classes.heartIcon}/>
              </Grid>
              <Grid item xs={10} container>
                <Body class={classes.bodytext} body={this.props.body} />
              </Grid>
              <Grid item xs={10} container justify="space-between">
                <Foot class={classes} breadcrumb={this.props.breadcrumb} url={this.props.url}/>
              </Grid>
          </Grid>
        </Paper>
        
      </div>
    );
  } 
  
}

export default withStyles(styles)(Result);