import authActionTypes from "../actions/authActionTypes";

function authReducer(auth = {}, action) {
  switch (action.type) {
    case authActionTypes.LOGIN:
      console.log('true');

      return {
        isAuthenticated: true,
        ...action.data,
      };

    case authActionTypes.LOGOUT:
      return {
        isAuthenticated: false,
      };

    default:
      return auth;
  }
}

export default authReducer;
