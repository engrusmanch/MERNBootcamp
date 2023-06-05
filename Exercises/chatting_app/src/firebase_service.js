import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC50CRKhdavNUpN4OkH2dLrtzzqExOkK8Q",
    authDomain: "e-messaging.firebaseapp.com",
    databaseURL: "https://e-messaging-default-rtdb.firebaseio.com",
    projectId: "e-messaging",
    storageBucket: "e-messaging.appspot.com",
    messagingSenderId: "794682591395",
    appId: "1:794682591395:web:c28e5c14db8471003c9716"
  };
firebase.initializeApp(firebaseConfig);
var authCustom = firebase.auth();
export {authCustom};
