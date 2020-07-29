import React, { useContext } from "react";
import AppContext from "./Context/AppContext";
import { sumar, restar } from "./Context/AppActions";

const Consumer = () => {
  let [state, dispatch] = useContext(AppContext);

  return (
    <div>
      <h2>{state}</h2>
      <button onClick={() => dispatch(sumar)}>Sumar</button>
      <button onClick={() => dispatch(restar)}>Restar</button>
    </div>
  );
};

export default Consumer;
