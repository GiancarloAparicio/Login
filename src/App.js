import React from "react";
import "./styles.css";
import ProviderContext from "./Context/ProviderContext";
//import Consumer from "./Consumer";

import * as Firebase from "./Firebase/Firebase";

//Includes
import NavBar from "./includes/NavBar";
import Modal from "./includes/Modal";

//Bootstrap
import "jquery";
import "popper.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Consumer from "./Consumer";


export default function App() {
  Firebase.startFirebase();

  return (
    <ProviderContext>
      <NavBar />
      <Modal />
      <Consumer />
    </ProviderContext>
  );
}
