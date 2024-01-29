import React, { useState } from "react";
import "./NavBar.css";
import NavMenuLinks from "../NavMenuLinks/NavMenuLinks";
import { Link } from "react-router-dom";
import Menu_icon from "../Assets/menu.png";
import { faL } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [fix, setFix] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  function setFixed() {
    if (window.scrollY >= 50) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);

  return (
    <div
      className={
        fix ? "nav-bar container-fuild fixed" : "nav-bar container-fuild"
      }
    >
      <div className="nav-logo-main">
        <Link to="/" className="nav-logo">
          DAMIEN
        </Link>
      </div>
      <div className={openMenu ? "nav-menu-links open" : "nav-menu-links"}>
        <NavMenuLinks linkurl="/" linkname="Home" />
        <NavMenuLinks linkurl="/about" linkname="About Me" />
        <NavMenuLinks linkurl="/portfolio" linkname="Portfolio" />
        <NavMenuLinks linkurl="/services" linkname="Services" />
      </div>
      <button>
        <Link to="/contact" className={openMenu ? "nav-btn open" : "nav-btn"}>
          Contact Me
        </Link>
      </button>
      <div className="menu-icon">
        <img
          src={Menu_icon}
          alt=""
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        />
      </div>
    </div>
  );
};

export default NavBar;
