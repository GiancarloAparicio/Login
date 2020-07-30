import React from "react";
import "./styles.css";

//Context
import ProviderContext from "./Context/ProviderContext";


//Firebase
import * as Firebase from "./Firebase/Firebase";


//Bootstrap
import "jquery";
import "popper.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import RouterPages from "./Router";




 const App=()=> {

  Firebase.startFirebase();

  return (
    <ProviderContext>
      <RouterPages />
    </ProviderContext>
  );
}

export default App;
