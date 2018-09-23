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
        return idArray;
      })
      .then(idArray => {
        API.idSearch(idArray).then(res => {
          console.log('hi', res.data.query.pages);
          const content = res.data.query.pages;
          this.setState({
            content: content
          });
        });
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
    let contentArray = this.renderContent();
    let content = contentArray.map(location => {
      console.log(location);
      return (
        <div key={location.pageid}>
          <h1>{location.title}</h1>
          <div>{location.extract}</div>
          <hr />
        </div>
      );
    });
    console.log(content);

    return <div>{content}</div>;
  }
}
export default Sample;
