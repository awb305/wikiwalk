//the below import just makes sure the same case is used as defined inthe logout-action

import { SET_COORDS }  from '../actions/setCoords-action'

//maybe its is assumend what is importing goes to the action? 

export default function setCoordsReducer(state = {}, {type, payload} ) {
  switch (type) {
    case SET_COORDS:
      return payload.coords;
    default: 
      return state;
  }
}
