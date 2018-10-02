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
import jwt from 'jsonwebtoken';
import auth0Client from '../../../utils/Auth';

import { connect } from 'react-redux';
import { setCoords } from '../../../actions/setCoords-action';

import { setUserId } from '../../../actions/setUserId-action';

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

  componentDidMount() {
    if (this.props.userId === 'loggedOut') {
      console.log(this.props.userId);
      this.setId();
    }
  };

  getId = () => {
    if(this.props.userId === 'loggedOut'){
      return new Promise((resolve, reject) => {
        let token = auth0Client.getIdToken();
        console.log(token);
        let decodedObj = jwt.decode(token);
        console.log(decodedObj);
        if (decodedObj !== null) {
          resolve(decodedObj);
        } else {
          reject(console.error());
        }
      });
    }
  };

  setId = async () => {
    const loginId = await this.getId();
    console.log(loginId);
    this.props.onSetUserId(loginId.sub);

  };


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
  userId: state.userId
});

// makes the 'onSetUserId' to the prop that corresponds to the setUserId which was imported from actions

const mapActionsToProps = {
  onSetCoords: setCoords,
  onSetUserId: setUserId
};


//export default withStyles(styles)(Home);




export default compose(
  withStyles(styles, {name: 'Home'}),
  connect(mapStateToProps, mapActionsToProps))(Home);
