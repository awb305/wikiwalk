import React from 'react';
import Marker from '../Marker';

const Markers = this.props.geoArray.map((element, index) => {
    if (element.latitude === null || element.longitude === null) {
      return null;
    } else {
      return <Marker key={index} element={element} lat={element.latitude} lon={element.longitude} />
    }
});

export default Markers;