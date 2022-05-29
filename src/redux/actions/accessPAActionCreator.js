import accessPAActionTypes from "./accessPAActionTypes";

export function accessGranted() {
  return {
    type: accessPAActionTypes.ACCESS_GRANTED
  };
}
export function accessNotAuthorised() {
  return {
    type: accessPAActionTypes.ACCESS_NOT_AUTHORISED
  };
}