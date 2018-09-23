import React, { Component } from 'react';
import API from '../utils/API';

class Sample extends Component {
  state = {
    geoArray: [],
    idArray: [],
    content: {}
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
    API.geoSearch()
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
      })
      .catch(err => console.log(err));
    API.idSearch(this.state.idArray)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return <div>Check the console</div>;
  }
}

export default Sample;
