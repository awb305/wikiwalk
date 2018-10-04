import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Navbar from '../../Navbar';
import CoolBtn from './CoolBtn';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SearchBar from '../../SearchBar';
import API from '../../../utils/API';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Skyline from './../../../styles/images/skyline.svg';
import './background.css';

const styles = theme => ({
  root: {
    backgroundImage: `url(${Skyline})`,
    backgroundRepeat: 'repeat-x',
    backgroundAttachment: 'fixed',
    position: '100%, 100%'
  },
  container: {
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.up('lg')]: {
      margin: 'auto',
      width: '50%'
    }
  },
  pBottom: {
    paddingBottom: '5rem'
  }
  
});

class Home extends React.Component {
  state = {
    viewport: { width: window.innerWidth, height: window.innerHeight },
    query: 'Location'
  };

  componentWillMount() {
    this.setState({
      width: window.innerWidth + 'px',
      height: window.innerHeight + 'px'
    });
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({ query: value });
  };

  

  render() {
    const { classes } = this.props;
    return (
      <div className="background" >
        <Navbar logout={this.props.logout} userId={this.props.userId} username={this.props.username} setPage={this.props.setPage}/>
        <div className={classes.container}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            alignContent="center"
            style={{ height: this.state.viewport.height + 'px' }}
          >
            <Grid item className={classes.pBottom}>
            <div onClick={this.props.setCoords}>
              <CoolBtn />
            </div> 
            </Grid>
            <Grid item className={classes.pBottom}>
              <Typography variant="display1" align="center">
                Or <br /> Find cool things somewhere else
              </Typography>
            </Grid>
            <Grid item>
              <SearchBar
                value={this.state.query}
                onChange={this.handleInputChange}
              />
              <p>{this.state.query}</p>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
