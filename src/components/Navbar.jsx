import React from "react";
import { NavLink ,Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          MyPROJECTS
        </Link >
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
              <NavLink exact activeClassName='active'  className="nav-link " to="/">
                counter
              </NavLink >
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName='active'  className="nav-link" to="/Gettime">
                Gettime
              </NavLink >
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName='active'  className="nav-link" to="/Digitalclock">
                Digitalclock
              </NavLink >
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName='active'  className="nav-link" to="/Todolist">
                Todolist
              </NavLink >
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName='active'  className="nav-link" to="/Accordians">
                Accordians
              </NavLink >
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName='active'  className="nav-link" to="/Netflix">
                Netflix
              </NavLink >
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName='active ' className="nav-link" to="/Cart">
              Cart
              </NavLink >
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName='active'  className="nav-link" to="/covidapi">
              CovidApi
              </NavLink >
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName='active'  className="nav-link" to="/Filterimage">
              Filterimage
              </NavLink >
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName='active'  className="nav-link" to="/Newspage/general">
              Newspage(API)
              </NavLink >
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
