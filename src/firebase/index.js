import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDX1UqRXshqcpI29QjA6Tusg8AXv1eqP2s",
  authDomain: "inmoweb-project.firebaseapp.com",
  projectId: "inmoweb-project",
  storageBucket: "inmoweb-project.appspot.com",
  messagingSenderId: "497204518842",
  appId: "1:497204518842:web:b47ddd94903c4edecb4783"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const authentication = firebase;
export const db = firebase.firestore();