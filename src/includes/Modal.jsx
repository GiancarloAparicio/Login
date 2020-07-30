import React, { useState } from "react";
import * as Firebase from "../Firebase/Firebase";

import { useContext } from "react";
import AppContext from "../Context/AppContext";
import { existsCurrentUser } from "../Context/AppActions"
import Input from "../Components/Input";

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

  const RegisterUser = async (event) => {
    event.preventDefault();
    let band = await Firebase.registerUser(data.email, data.password);

    //User existente change
    dispatch(existsCurrentUser(band))

    console.log(state)
  };

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
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
      
          <Input name="email"
                 type="email"
                 id="Email1"
                 validate={state?.validateInputs?.inputRegisterEmail}
                 placeholder="Enter email"
                 onChange={inputChange} />
          <Input name="password"
                 type="password"
                 id="Password2"
                 validate={state?.validateInputs?.inputRegisterPassword}
                 placeholder="Password"
                 onChange={inputChange} />
        </div>

        <div className="modal-footer">
          <button type="submit" className="btn btn-success" >
            Register
          </button>
          <button type="reset" className="btn btn-danger" data-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </form>
  );
};

export default Modal;
