import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDORjt_mUcPZPyi0FHaeoERr1VzA8zQVnA",
    authDomain: "osrsmate-15e30.firebaseapp.com",
    databaseURL: "https://osrsmate-15e30.firebaseio.com",
    projectId: "osrsmate-15e30",
    storageBucket: "osrsmate-15e30.appspot.com",
    messagingSenderId: "501351136975",
    appId: "1:501351136975:web:edabd369de7962fca001ba",
    measurementId: "G-F7J1QPMLK7"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore()

  export default firebase;