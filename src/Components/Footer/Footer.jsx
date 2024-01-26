import React from "react";
import "./Footer.css";
import Btn from "../Assets/button.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="container-auto">
        <div className="footer-btn">
          <p>A more meaningful home for photography</p>
          <div className="footer-btn-text">
            <div>
              <h2>Let’s</h2>
              <img src={Btn} alt="Button" />
            </div>
            <h2>Work Together</h2>
          </div>
        </div>
        <div className="footer-nav">
          <div className="footer-home">
            <p>HOME</p>
            <ul>
              <li>About Me</li>
              <li>My Works</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <div className="footer-clients">
            <p>Clients</p>
            <ul>
              <li>Klovesto</li>
              <li>Nukeway</li>
              <li>Cloven’s</li>
              <li>MenVol</li>
            </ul>
          </div>
          <div className="footer-portfolio">
            <p>Portfolio</p>
            <ul>
              <li>Events</li>
              <li>Portrait</li>
              <li>Branding</li>
              <li>Commerciale</li>
              <li>Wedding</li>
            </ul>
          </div>
          <div className="footer-services">
            <p>Services</p>
            <ul>
              <li>Portraits</li>
              <li>Events</li>
              <li>Commercial </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="copy-left">Terms & Conditions | Privacy Policy</div>
        <div className="copy-center">
          <div className="about-social-icons">
            <a href="/">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div className="copy-right ">
          © 2024 Damien Braun Photography. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
