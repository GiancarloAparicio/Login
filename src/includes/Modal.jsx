import React, { useState } from "react";
import * as Firebase from "../Firebase/Firebase";

//Context
import { useContext } from "react";
import AppContext from "../Context/AppContext";

//Components
import Input from "../Components/Input";

import {statusInputs} from "../Context/AppActions"

const Modal = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  let [state, dispatch] = useContext(AppContext);


  const inputChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const RegisterUser = (event) => {
    event.preventDefault();
    Firebase.registerUser(data.email, data.password, dispatch);
  };

  const resetInputs = () => {
    dispatch(statusInputs("reset-status", "register"))
  }


  return (
    <form
      method="POST"
      onSubmit={RegisterUser}
      className="modal fade"
      id="modal"
      data-backdrop="static"
      data-keyboard="false"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="modalLabel">
            Register user
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            id="closeRegister"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">

          <Input name="email"
            type="email"
            id="Email1"
            validate={state?.validateInputs?.registerInputEmail}
            placeholder="Enter email"
            messageError="Sorry, that username's taken. Try another?"
            onChange={inputChange} />

          <Input name="password"
            type="password"
            id="Password1"
            validate={state?.validateInputs?.registerInputPassword}
            placeholder="Password"
            onChange={inputChange} />
        </div>

        <div className="modal-footer">
          <button type="submit" className="btn btn-success" >
            Register
          </button>
          <button type="reset" id="resetRegister" className="btn btn-danger" onClick={resetInputs}>
            Close
          </button>
        </div>
      </div>
    </form>
  );
};

export default Modal;
