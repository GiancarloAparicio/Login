//Firebase
import firebase from "firebase/app";
import "firebase/auth";

//Actions
import { currentUser, statusInputs, existsCurrentUser } from "../Context/AppActions";

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

export const registerUser = (email, password, dispatch) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      //Usuario creado
      dispatch(existsCurrentUser(true))
      dispatch(statusInputs("reset-status", "register"))

      //Confirma cuenta de usuario
      confirmEmail(dispatch);
    })
    .catch(function (error) {
      dispatch(statusInputs(error.code, "register"))
    });
};

export const loginUser = (email, password, dispatch) => {

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
        localStorage["SESSION"] = "true";
        dispatch(existsCurrentUser("true"))
        dispatch(statusInputs("reset-status", "login"))
    })
    .catch((error) => {
      dispatch(statusInputs(error.code, "login"))
      console.log(error)
    });
};

export const listener = (dispatch) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch(currentUser(user))
    }
  });
}

export const confirmEmail = (dispatch) => {
  firebase
    .auth()
    .currentUser.sendEmailVerification()
    .catch(error => {
      dispatch(statusInputs(error.code, "login"))
    });
};

export const closeUser = (dispatch) => {
  firebase.auth().signOut()
    .then(() => {
      dispatch(existsCurrentUser(false))
      
    }).catch(function (error) {
      console.warn(error)
    });

}
