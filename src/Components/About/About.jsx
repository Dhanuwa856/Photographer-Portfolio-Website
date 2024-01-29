import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import About_img from "../Assets/about.png";
import Star_icon from "../Assets/icon02.png";

const About = () => {
  return (
    <div className="container-fuild about">
      <div className="container-auto">
        <div className="about-sub">
          <div className="about-name">
            <p>About</p>
            <h2>I am Damien</h2>
          </div>
          <div className="about-btn01">
            <button>
              Know More
              <span>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </button>
          </div>
        </div>
        <div className="about-content">
          <div className="about-content-left">
            <img src={About_img} alt="about img" />
          </div>
          <div className="about-content-right">
            <div className="about-content-right01">
              <h3>
                <img src={Star_icon} alt="" />
                Introduction
              </h3>
              <p>
                My journey as a photographer has been a lifelong quest to
                capture the extraordinary in the ordinary, to freeze fleeting
                moments in time, and to share the world's beauty as I see it.
                Based in the enchanting landscapes of the USA, I find
                inspiration in every corner of this diverse and vibrant country.
                Join me as we embark on a visual odyssey, where each photograph
                tells a story, and every frame is a piece of my heart.
              </p>
            </div>
            <div className="about-content-right02">
              <h3>
                <img src={Star_icon} alt="" />
                Contact Information
              </h3>
              <div className="about-contact">
                <div className="about-email">
                  <h4>Email</h4>
                  <h5>damienbraun@gmail.com</h5>
                </div>
                <div className="about-phone">
                  <h4>Phone Number</h4>
                  <h5>+00 000000000</h5>
                </div>
              </div>
              <div className="about-footer">
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
                <div className="about-btns">
                  <div className="about-btn02">
                    <button>Let’s Work</button>
                  </div>
                  <div className="about-btn03">
                    <button>Download CV</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
