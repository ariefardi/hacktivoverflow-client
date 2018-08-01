 // Initialize Firebase
 import firebase from 'firebase'
 var config = {
    apiKey: "AIzaSyDuNiP9rQdmC3Ob8FAaXMX7gJBfeoKfph4",
    authDomain: "hacktivoverflow-212013.firebaseapp.com",
    databaseURL: "https://hacktivoverflow-212013.firebaseio.com",
    projectId: "hacktivoverflow-212013",
    storageBucket: "",
    messagingSenderId: "466770618866"
  };
  firebase.initializeApp(config);
  const provider = new firebase.auth.FacebookAuthProvider();
  const fbLogin = firebase.auth()


  export {fbLogin, provider}
