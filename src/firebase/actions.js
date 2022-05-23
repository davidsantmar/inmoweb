import { authentication } from ".";

export async function login() {
  const provider = new authentication.auth.GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  const data = await authentication.auth().signInWithPopup(provider);
  if (data?.additionalUserInfo?.profile.email === 'davidsanmar@gmail.com'){
    console.log('access');
  }else{
    console.log('not authorised');
  }
  //return data?.additionalUserInfo?.profile;
}

export function logout() {
  authentication.auth().signOut();
}
