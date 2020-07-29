import React, { useContext } from "react";
import AppContext from "./Context/AppContext";

const Consumer = () => {
  let [state, dispatch] = useContext(AppContext);

  console.log(state)
  return (
    <div>
      <h2>Estado de la app</h2>
    </div>
  );
  //dispatch para cambiar store
};

export default Consumer;
