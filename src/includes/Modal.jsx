import React, { useState } from "react";
import * as Firebase from "../Firebase/Firebase";

const Modal = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const inputChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const RegisterUser = event => {
    event.preventDefault();
    Firebase.registerUser(data.email, data.password);
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
          <div className="form-group">
            <label htmlFor="Email1">Email address</label>
            <input
              name="email"
              type="email"
              autoComplete="off"
              className="form-control"
              id="Email1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={inputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Password1">Password</label>
            <input
              name="password"
              type="password"
              autoComplete="off"
              className="form-control"
              id="Password1"
              placeholder="Password"
              onChange={inputChange}
            />
          </div>
        </div>
        <div className="modal-footer">
          <button type="submit" className="btn btn-success">
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
