//the below import just makes sure the same case is used as defined inthe logout-action

import { SET_USER_ID }  from '../actions/setUserId-action';

//maybe its is assumend what is importing goes to the action? 

export default function setUserIdReducer(state = 'loggedOut', {type, payload} ) {
  switch (type) {
    case SET_USER_ID:
      return payload.userId;
    default: 
      return state;
  }
}
