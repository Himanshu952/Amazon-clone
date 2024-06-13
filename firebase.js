import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDkHDLh55mbcGdiE2EO0bBr3kvaecdt2vk",
    authDomain: "clone-1ab46.firebaseapp.com",
    projectId: "clone-1ab46",
    storageBucket: "clone-1ab46.appspot.com",
    messagingSenderId: "18956788227",
    appId: "1:18956788227:web:a27013872e1a97688b6436",
    measurementId: "G-XN3TL86TYZ"
  };
  

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };