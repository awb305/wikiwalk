import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Navbar from './../../Navbar';
import Result from './Result';
import { Typography } from '@material-ui/core';
import DB from './../../../utils/DB';

const styles = theme => ({
  toolbar: theme.mixins.toolbar, 
  header: {
    ...theme.mixins.gutters(),
    marginTop: theme.spacing.unit * 2,
    
  }, 
});

<<<<<<< HEAD
=======
let cards = []
const results = [
  {
  pageId: 'a number',
  userId: 'userid',
  title: 'Insert Title Here',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  breadcrum: 'Saved on 09/27/2018 location: Raleigh, NC',
  url: '#',
  favorited: true
  },{
    title: 'Insert Title Here',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    breadcrum: 'Breadcrumb goes here',
    url: '#',
    favorited: true
  },{
    title: 'Insert Title Here',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    breadcrum: 'Breadcrumb goes here',
    url: '#',
    favorited: true
  }
]

results.forEach((val, index) => cards.push(
  <Result title={val.title} body={val.body} breadcrumb={val.breadcrumb} url={val.url} key={index} favorited={val.favorited}/>
));
>>>>>>> searchpage

class Results extends React.Component {
  state = {
    geoArray: [],
    idArray: [],
    content: {},
    lon: -78.7004,
    lat: 	35.8480,
    radius: 1000,
    limit: 10,
    data: []
  };

  componentWillMount() {
    if(this.props.favs){
      DB.getFavorites('114167404198811874512')
        .then(res => {
          console.log(res);
          this.setState({data: res.data});
        });
    }else{
      //API call
    }
  }

  render() {
    const { classes, favs } = this.props;
    
    let cards = [];

    this.state.data.forEach((val, index) => cards.push(
      <Result 
        title={val.title} 
        body={val.body} 
        breadcrumb={val.breadcrum} 
        url={val.link} 
        pageId = {val.page_id}
        userId = {val.user_id}
        image = {val.image}
        key={val.page_id} 
        favorited={val.favorited}/>
    ));

    return (
      <div>
        <Navbar />
        <div className={ classes.toolbar }>
        <Typography variant="display2" className={classes.header}>
          {favs ? "Favorites" : "Results"}
        </Typography>
        {cards}
        </div>
        
      </div>
    );
  }
}

export default withStyles(styles)(Results);