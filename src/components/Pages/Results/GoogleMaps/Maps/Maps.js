import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
// import Markers from '../Markers';
  
class Map extends Component {
  static defaultProps = {
    center: { //set this to user's current location
      lat: 35.779591,
      lng: -78.638176
    },
    zoom: 16
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '60vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAZZ8iYpPD1FaIqfqC3j6zevm7Bp2cSa1M' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {/* <Markers/> */}
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;