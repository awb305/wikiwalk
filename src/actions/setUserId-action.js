
export const SET_USER_ID = 'userId:setUserId';


export function setUserId(newId) {
  return {
    type: SET_USER_ID,
    payload: {
      userId: newId
    }
  }
}



