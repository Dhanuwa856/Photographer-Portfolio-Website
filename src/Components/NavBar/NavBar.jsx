import React from "react";
import "./NavBar.css";
import NavMenuLinks from "../NavMenuLinks/NavMenuLinks";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar container-fuild">
      <div className="nav-logo-main">
        <Link to="/" className="nav-logo">
          DAMIEN
        </Link>
      </div>
      <div className="nav-menu-links">
        <NavMenuLinks linkurl="/" linkname="Home" />
        <NavMenuLinks linkurl="/about" linkname="About Me" />
        <NavMenuLinks linkurl="/portfolio" linkname="Portfolio" />
        <NavMenuLinks linkurl="/services" linkname="Services" />
      </div>
      <button>
        <Link to="/contact" className="nav-btn">
          Contact Me
        </Link>
      </button>
    </div>
  );
};

export default NavBar;
