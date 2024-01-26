import React from "react";
import "./Logo.css";
import Img from "../Assets/logo.png";
import Icon_img from "../Assets/icon.png";

const Logo = () => {
  return (
    <div className="container-fluid logo">
      <div className="container-auto logo-main">
        <img src={Img} alt="logo" />
      </div>
      <div className="hero-text-line">
        <p>
          <img src={Icon_img} alt="" />
          Event Photography
        </p>
        <p>
          <img src={Icon_img} alt="" />
          Comercial Photography
        </p>
        <p>
          <img src={Icon_img} alt="" />
          Product Photography
        </p>
        <p>
          <img src={Icon_img} alt="" />
          Wedding Photography
        </p>
        <p>
          <img src={Icon_img} alt="" />
          Landscape Photography
        </p>
        <p>
          <img src={Icon_img} alt="" />
          Branding Photography
        </p>
        <p>
          <img src={Icon_img} alt="" />
          Portrait Photography
        </p>
      </div>
    </div>
  );
};

export default Logo;
