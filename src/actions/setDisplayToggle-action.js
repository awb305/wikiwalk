export const  SET_DISPLAY_TOGGLE= 'displayToggle:setDisplayToggle';

export function setDisplayToggle(newPage) {
  let coords = {};
  return {
    type: SET_DISPLAY_TOGGLE,
    payload: {
      displayToggle: newPage
    }
  }
}