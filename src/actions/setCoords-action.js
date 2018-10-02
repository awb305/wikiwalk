
export const SET_COORDS= 'coords:setCoords';

export function setCoords(newLat, newLon) {
  let coords = {};
  return {
    type: SET_COORDS,
    payload: {
      coords: {
        lat: newLat,
        lon: newLon
      }
    }
  }
}

