import authActionTypes from "../actions/authActionTypes";
import { firebaseLogin } from '/Users/macbook/Desktop/Front End/inmoweb/src/firebase/actions';

function authReducer(auth = {}, action) {
  async function getEmail(){
    const emailUser = await firebaseLogin();
    console.log(emailUser);
    return emailUser;
  }
  switch (action.type) {
    case authActionTypes.LOGIN:
      firebaseLogin();
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
