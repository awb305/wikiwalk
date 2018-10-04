import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Navbar from './../../Navbar';
import Result from './Result';
import { Typography } from '@material-ui/core';
import DB from './../../../utils/DB';
import API from '../../../utils/API';
import GoogleMapsContainer from './GoogleMaps/GoogleMaps';

const styles = theme => ({
  toolbar: theme.mixins.toolbar, 
  container: {
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up('lg')]: {
      margin: 'auto',
      width: '75%'
    }
  },
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
    lon: null,
    lat: null,
    data: [],
    radius: 10000,
    limit: 10
  };

  getResults = favorites => {
    if(favorites){
      DB.getFavorites(this.props.userId.split('|')[1])
        .then(res => {
          this.setState({data: res.data});
        });
    }else{
      this.search();
    }
  }

  pageIdArray = () => {
    const idArray = [];
    this.geoArray.forEach(element => {
      idArray.push(element.pageid);
    });
    this.setState({
      idArray: idArray,
    });
  };
  componentDidMount() { 
    this.getResults(this.props.favs);
  }

  componentWillReceiveProps(nextProps) {
    this.getResults(nextProps.favs);
    this.forceUpdate();
  }

  search = () => {
    let lat = this.props.lat;
    let lon = this.props.lon;
    this.setState({
      lat: lat,
      lon: lon
    });


    API.geoSearch(lat, lon, this.state.radius, this.state.limit)
      .then(res => {
        const geoArray = res.data.query.geosearch;
        const idArray = [];
        geoArray.forEach(element => idArray.push(element.pageid));
        this.setState({
          geoArray: geoArray,
          idArray: idArray,
        });
        return idArray;
      })
      .then(idArray => {
        if(idArray.length > 0){
        API.idSearch(idArray).then(res => {
          const data= res.data.query.pages;

          let content = [];
          for(let prop in data){
            const article = {
              title: data[prop].title,
              body: data[prop].extract,
              url: data[prop].fullurl,
              page_id: prop
            };

            content.push(article);
          }

          delete content[0];
          this.setState({data: content});
          
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


 //transform "article" into database consumable  
 generateContent = (data, favorite) => {
  return data.map(article => (
      <Result 
        articleId={article.id ? article.id : null}
        userId={this.props.userId}
        title={article.title} 
        body={article.body} 
        pageId={article.page_id}
        /* breadcrumb={article.breadcrumb} */ 
        url={article.url}
        favorite={favorite}
        key={article.page_id}
        data={article}
        />
  ));
 }
  
render() {
const {classes, favs } = this.props;
let content = this.generateContent(this.state.data);

return(
      <div>
        <Navbar logout={this.props.logout} userId={this.props.userId} username={this.props.username} setPage={this.props.setPage}/>
        <div className={classes.toolbar}>
          <div className={ classes.container }>
          <GoogleMapsContainer
          geoArray={this.state.geoArray} lat={this.state.lat} lon={this.state.lon}
          />
          <Typography variant="display2" className={classes.header}>
            {favs ? "Favorites" : "Results"}
          </Typography>
          {content}
          </div>
        </div>
      </div>
    );

};

};

export default withStyles(styles)(Results);



