import React from "react";
import "./NavMenuLinks.css";
import { NavLink } from "react-router-dom";

const NavMenuLinks = (props) => {
  return (
    <NavLink to={props.linkurl} className="menu-link">
      {props.linkname}
    </NavLink>
  );
};

export default NavMenuLinks;
