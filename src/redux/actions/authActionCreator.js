import { accessGranted, accessNotAuthorised } from "./administratorActionCreator";
import authActionTypes from "./authActionTypes";
import { firebaseLogin } from '/Users/macbook/Desktop/Front End/inmoweb/src/firebase/actions';


export function login() {
  //async function getEmail(){
  //firebaseLogin();
  //return emailUser;
  /*switch (emailUser) {
    case (emailUser === 'davidsantmar@gmail.com'):
      console.log(emailUser);

      return { type: authActionTypes.LOGIN };
    default:
      console.log(emailUser);

      return { type: authActionTypes.LOGIN };
  }*/
  return { type: authActionTypes.LOGIN };
}


export function logout() {
  return { type: authActionTypes.LOGOUT };
}
