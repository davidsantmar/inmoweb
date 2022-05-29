import authActionTypes from "./authActionTypes";

export function accessGranted() {
  return {
    type: authActionTypes.ACCESS_GRANTED,
  };
}

export function accessNotAuthorised() {
  return { type: authActionTypes.ACCESS_NOT_AUTHORISED };
}
