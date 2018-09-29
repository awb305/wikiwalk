import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Navbar from './../../Navbar';
import Result from './Result';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  toolbar: theme.mixins.toolbar, 
  header: {
    ...theme.mixins.gutters(),
    marginTop: theme.spacing.unit * 2,
    
  }, 
});

let cards = []
const results = [
  {
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

class Results extends React.Component {

  render() {
    const { classes, favs } = this.props;
    
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