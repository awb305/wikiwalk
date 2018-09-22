import React, { Component } from 'react';
import API from '../utils/API';

class Sample extends Component {
  search = () => {
    API.search()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    this.search();

    return <div>Check the console</div>;
  }
}

export default Sample;
