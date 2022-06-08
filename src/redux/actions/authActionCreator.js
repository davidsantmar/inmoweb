import authActionTypes from "./authActionTypes";
import { firebaseLogin, firebaseLogout } from '/Users/macbook/Desktop/Front End/inmoweb/src/firebase/actions';


export function login() {
  firebaseLogin();
  return { type: authActionTypes.LOGIN };
}

export function logout() {
  firebaseLogout();
  return { type: authActionTypes.LOGOUT };
}
