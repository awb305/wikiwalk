import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Navbar from './../../Navbar';
import Result from './Result';
import { Typography } from '@material-ui/core';
import API from '../../../utils/API';

const styles = theme => ({
  toolbar: theme.mixins.toolbar, 
  header: {
    ...theme.mixins.gutters(),
    marginTop: theme.spacing.unit * 2,
    
  }, 
});


class Results extends Component {
  state = {
    geoArray: [],
    idArray: [],
    content: {},
    /* lon: this.props.lon,
    lat: this.props.lat, */
    radius: 10000,
    limit: 10
  };

  componentDidMount() {
    this.search();
  }

  pageIdArray = () => {
    const idArray = [];
    this.geoArray.forEach(element => {
      idArray.push(element.pageid);
    });
    this.setState({
      idArray: idArray
    });
  };

  search = () => {
    console.log(this.props.lat);
    console.log(this.props.lon);
    let lat = this.props.lat;
    let lon = this.props.lon;
    console.log("lattitue", lat);
    console.log("longitude", lon);


    API.geoSearch(
      lat,
      lon,
      this.state.radius,
      this.state.limit
    )
      .then(res => {
        const geoArray = res.data.query.geosearch;
        const idArray = [];
        geoArray.forEach(element => {
          idArray.push(element.pageid);
        });
        this.setState({
          geoArray: geoArray,
          idArray: idArray
        });
        return idArray;
      })
      .then(idArray => {
        if(idArray.length > 0){
        API.idSearch(idArray).then(res => {
          console.log('hi', res.data.query.pages);
          const content = res.data.query.pages;
          delete content[0];
          this.setState({
            content: content
          });
        });
      }else{
        alert("no articles found!");
        // probably need to have a component to show that
      }
      })
      .catch(err => console.log(err));
  };

  renderContent = () => {
    const contentArray = [];
    for (const key in this.state.content) {
      if (this.state.content.hasOwnProperty(key)) {
        const element = this.state.content[key];
        contentArray.push(element);
      }
    }
    return contentArray;
  };



  
  
  

render() {
const {classes, favs } = this.props;
let contentArray = this.renderContent();
let content = contentArray.map(article => {
  return(
    <Result title={article.title} body={article.extract} /* breadcrumb={article.breadcrumb} */ url={article.fullurl} key={article.pageid} /* favorited={article.favorited} *//>
  )
});
return(
      <div>
        <Navbar logout={this.props.logout} userId={this.props.userId} />
        <div className={ classes.toolbar }>
        <Typography variant="display2" className={classes.header}>
          {favs ? "Favorites" : "Results"}
        </Typography>
        {content}
        </div>
      </div>
    );

};

};

export default withStyles(styles)(Results);



