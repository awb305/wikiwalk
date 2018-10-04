//the below import just makes sure the same case is used as defined inthe logout-action

import { SET_DISPLAY_TOGGLE }  from '../actions/setDisplayToggle-action'

//maybe its is assumend what is importing goes to the action? 

export default function setDisplayToggleReducer(state = 'results', {type, payload} ) {
  switch (type) {
    case SET_DISPLAY_TOGGLE:
      return payload.displayTogle;
    default: 
      return state;
  }
}
