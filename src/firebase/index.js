import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
  apiKey: 'AIzaSyCoJ83BBe6IeYpllpjHT6idZzvHv9sBO5I',
  authDomain: "inmoweb-app.firebaseapp.com",
  projectId: "inmoweb-app",
  storageBucket: "inmoweb-app.appspot.com",
  messagingSenderId: "176986892526",
  appId: "1:176986892526:web:cffc58e21cea17bfdf6bff",
  measurementId: "G-6BE2R77CZD"
};



firebase.initializeApp(firebaseConfig);
export const authentication = firebase;
export const db = firebase.firestore();
export const storage = firebase.storage();
export const imagesData = firebase.firestore();

//export const db = getFirestore(app);
//export const storage = getStorage(app);

/*
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
*/


