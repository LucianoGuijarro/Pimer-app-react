import React from "react";
import "./Navbar.css";
function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg text-ligth">
      <div className="container-fluid">
        <a className="navbar-brand fs-4" href="/">
          {props.nombrePagina}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active mx-4 fs-4" aria-current="page" href="/">
                {props.home}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-4" href="/">
                {props.category}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
