import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success ">
      <NavLink className="navbar-brand" to="/">
        YousMOvie
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home 
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/favoris">
              Favoris
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
