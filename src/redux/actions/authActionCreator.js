import { accessGranted, accessNotAuthorised } from "./administratorActionCreator";
import authActionTypes from "./authActionTypes";


export function login() {
   
  /*const [loginType, setLoginType] = ('');
  if (emailUser === 'davidsantmar'){
    setLoginType('LOGIN');
    console.log(loginType);
  }*/
  return { 
        type: authActionTypes.LOGIN};
}


export function logout() {
  return { type: authActionTypes.LOGOUT };
}
