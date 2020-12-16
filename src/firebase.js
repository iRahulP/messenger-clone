import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyDxdq6V24OJw9QGz5ssD0ltQUjYHemXgB0",
    authDomain: "facebook-messenger-clone-4fc4d.firebaseapp.com",
    projectId: "facebook-messenger-clone-4fc4d",
    storageBucket: "facebook-messenger-clone-4fc4d.appspot.com",
    messagingSenderId: "341611078801",
    appId: "1:341611078801:web:f0d0f786a437b2d73d8b30",
    measurementId: "G-SDPXTHENQM"
  });

  const db = firebaseApp.firestore();

  export default db;