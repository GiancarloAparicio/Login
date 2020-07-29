import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="./">
        Anglofono
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbar">
        <ul className="navbar-nav ml-auto">
          <li>
            <button
              data-toggle="modal"
              data-target="#modal"
              className="btn btn-secondary my-2 my-sm-0"
            >
              Register
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
