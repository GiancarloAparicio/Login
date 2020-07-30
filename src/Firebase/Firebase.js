//Firebase
import firebase from "firebase/app";
import "firebase/auth";

//Actions
import { currentUser } from "../Context/AppActions";

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

export const registerUser = async (email, password) => {
  return await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log("Usuario registrado");
      //Enviar email para verificar la cuenta del usuario
      return confirmEmail();
    })
    .catch(function (error) {
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
    .then(function () {
      console.log("Login exito");

    })
    .catch(function (error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorMessage);
      console.log(errorCode);
    });
};

export const listener = (dispatch) => {
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      dispatch(currentUser(user))
    }
  });
}

export const confirmEmail = async () => {
  return await firebase
    .auth()
    .currentUser.sendEmailVerification()
    .then(() => {
      console.log("Usuario email confirmed");
      return true;
    })
    .catch(error => {
      console.warn(error);
      return false;
    });
};

export const closeUser = ()=>{
  firebase.auth().signOut().then(() =>{
    console.log("session cerrada")
  }).catch(function(error) {
    // An error happened.
  });
  
}
