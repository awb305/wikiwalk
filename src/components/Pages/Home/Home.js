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
import { compose } from 'recompose';

import { connect } from 'react-redux';
import { setCoords } from '../../../actions/setCoords-action';

const styles = theme => ({
  pBottom: {
    paddingBottom: '5rem'
  }
});

class Home extends React.Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight
    },
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

    this.setState({
      query: value
    });
  };



  render() {
    const { classes } = this.props;
    console.log(this.props.userId);
    return (
      <div>
        <Navbar logout={this.props.logout} />{' '}
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          alignContent="center"
          style={{
            height: this.state.viewport.height + 'px'
          }}
        >
          <Grid item className={classes.pBottom}>
            <div onClick={this.props.onSetCoords(5,4)}>
              <CoolBtn />
            </div>{' '}
          </Grid>{' '}
          <Grid item className={classes.pBottom}>
            <Typography variant="display1" align="center">
              Or <br /> Find cool things somewhere else
            </Typography>{' '}
          </Grid>{' '}
          <Grid item>
            <SearchBar
              value={this.state.query}
              onChange={this.handleInputChange}
            />{' '}
            <p> {this.state.query} </p>{' '}
          </Grid>{' '}
        </Grid>{' '}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lat: state.lat,
  lon: state.lon
});

// makes the 'onSetUserId' to the prop that corresponds to the setUserId which was imported from actions

const mapActionsToProps = {
  onSetCoords: setCoords
};


//export default withStyles(styles)(Home);




export default compose(
  withStyles(styles, {name: 'Home'}),
  connect(mapStateToProps, mapActionsToProps))(Home);
