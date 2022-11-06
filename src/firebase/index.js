import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "inmoweb-app.firebaseapp.com",
  projectId: "inmoweb-app",
  storageBucket: "inmoweb-app.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
};

firebase.initializeApp(firebaseConfig);
export const authentication = firebase;
export const db = firebase.firestore();
export const storage = firebase.storage();
export const imagesData = firebase.firestore();
export const usersData = firebase.firestore();