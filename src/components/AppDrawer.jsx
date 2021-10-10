import React from "react";
import { NavLink } from "react-router-dom";
const AppDrawer = (props) => {
  return (
    <>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-warning dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
         Selcet {props.category}
         {/* {console.log(props.category)} */}
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          <li>
            <NavLink className="dropdown-item text-capitalize" to="/Newspage/business">
            Business
            </NavLink>
          </li>
          <li>
            <NavLink className="dropdown-item text-capitalize" to="/Newspage/entertainment">
            entertainment
            </NavLink>
          </li>
          <li>
            <NavLink className="dropdown-item text-capitalize" to="/Newspage/general">
            general
            </NavLink>
            <NavLink className="dropdown-item text-capitalize" to="/Newspage/health">
            health
            </NavLink>
            <NavLink className="dropdown-item text-capitalize" to="/Newspage/science">
            science
            </NavLink>
            <NavLink className="dropdown-item text-capitalize" to="/Newspage/sports">
            sports
            </NavLink>
            <NavLink className="dropdown-item text-capitalize" to="/Newspage/technology">
            technology
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AppDrawer;
