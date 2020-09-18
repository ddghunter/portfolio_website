// Firebase imports
import * as app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


export const firebaseConfig = {
  apiKey: "AIzaSyAMYO8DqgBRNAli43FMesQbwSQ3l5sZ8AI",
  authDomain: "ddghunter-portfolio.firebaseapp.com",
  databaseURL: "https://art-site-56ddf.firebaseio.com",
  projectId: "ddghunter-portfolio",
  storageBucket: "ddghunter-portfolio.appspot.com",
  messagingSenderId: "45540978534",
  appId: "1:847415477457:web:2c48b51bae47bb63a631f0",
  measurementId: "G-3HQQXDTB88"
};

const firebase = app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new app.auth.GoogleAuthProvider()

export const fireStore = firebase.firestore();
export const firebaseStorage = firebase.storage().ref();

export default firebase;