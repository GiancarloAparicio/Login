import AppContext from "./AppContext";
import React from "react";

import { useReducer } from "react";

import { AppReducer } from "./AppReducer";
import { initalState } from "./AppStore";

let ProviderContext = props => {
  const [state, dispatch] = useReducer(AppReducer, initalState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ProviderContext;
