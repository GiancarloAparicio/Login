//Firebase
import firebase from "firebase/app";
import "firebase/auth";

//Actions
import { currentUser, statusInputs } from "../Context/AppActions";

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
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      console.log(errorCode);
    });
};

export const loginUser = (email, password, dispatch) => {

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      dispatch(statusInputs("reset-status-login"))
    })
    .catch((error) => {
      dispatch(statusInputs(error.code))
    });
};

export const listener = (dispatch) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch(currentUser(user))
    }
  });
}

export const confirmEmail = () => {
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

export const closeUser = () => {
  firebase.auth().signOut().then(() => {
    console.log("session cerrada")
  }).catch(function (error) {
    // An error happened.
  });

}
