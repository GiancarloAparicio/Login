import firebase from "firebase/app";
import "firebase/auth";

export const startFirebase = () => {
  let Config = {
    apiKey: "AIzaSyBK6hMpMekmHdYxf2r91KzEypwSXDErFEY",
    authDomain: "anglofono-unac.firebaseapp.com",
    databaseURL: "https://anglofono-unac.firebaseio.com",
    projectId: "anglofono-unac",
    storageBucket: "anglofono-unac.appspot.com",
    messagingSenderId: "819485692900",
    appId: "1:819485692900:web:5adbc5367cf05f3072edf1",
    measurementId: "G-FPT979WKF0"
  };
  // Initialize Firebase
  firebase.initializeApp(Config);
};

export const registerUser = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log("Usuario registrado");
      //Enviar email para verificar la cuenta del usuario
      confirmEmail();
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      console.log(errorCode);
    });
};

export const loginUser = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function() {
      console.log("Login exito");
    })
    .catch(function(error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorMessage);
      console.log(errorCode);
    });
};

const confirmEmail = () => {
  firebase
    .auth()
    .currentUser.sendEmailVerification()
    .then(() => {
      console.log("Usuario email confirmed");
    })
    .catch(error => {
      console.warn(error);
    });
};
