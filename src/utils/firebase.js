// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-47MctgED_stm5zmaipeNVP8q2g2QoTo",
  authDomain: "fire-contact-app.firebaseapp.com",
  projectId: "fire-contact-app",
  storageBucket: "fire-contact-app.appspot.com",
  messagingSenderId: "902811260406",
  appId: "1:902811260406:web:1adec57a492a709978a3d7",
  measurementId: "G-KELSSNH6HR"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);
export default firebase