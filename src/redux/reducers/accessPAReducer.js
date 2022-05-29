import accessPAActionTypes from "../actions/accessPAActionTypes";

function accessPAReducer(accessPA = 'access', action) {
  switch (action.type) {
    case accessPAActionTypes.ACCESS_GRANTED:
      return accessPA + 'granted';
    case accessPAActionTypes.ACCESS_NOT_AUTHORISED:
      return accessPA + 'not authorised';
    default:
      return accessPA;
  ;
  }
}

export default accessPAReducer;