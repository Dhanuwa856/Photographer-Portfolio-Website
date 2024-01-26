import React from "react";
import "./Hero.css";
import Btn from "../Assets/Button.png";
import Icon_img from "../Assets/icon.png";
import Hero_img from "../Assets/hero img.png";

const Hero = () => {
  return (
    <div className="container-fuild hero">
      <div className="hero-text-container">
        <div className="hero-text-container-left">
          <p>Stunning Photography by</p>
          <h2>Damien Braun</h2>
        </div>
        <div className="hero-text-container-center">
          <svg
            viewBox="0 0 262 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M131 128.5C202.906 128.5 261.23 186.657 261.499 258.5H246.779C246.51 194.787 194.777 143.22 131 143.22C67.2232 143.22 15.4904 194.787 15.2211 258.5H0.500938C0.770414 186.657 59.0935 128.5 131 128.5ZM0.500938 -2.5H15.2211C15.4904 61.2136 67.2232 112.78 131 112.78C194.777 112.78 246.51 61.2136 246.779 -2.5H261.499C261.23 69.3432 202.906 127.5 131 127.5C59.0935 127.5 0.770412 69.3432 0.500938 -2.5ZM131 96.06C76.4575 96.06 32.2105 51.9792 31.9412 -2.5H46.6614C46.9305 43.8496 84.5871 81.34 131 81.34C177.413 81.34 215.069 43.8496 215.339 -2.5H230.059C229.79 51.9792 185.543 96.06 131 96.06ZM131 64.62C93.8213 64.62 63.6506 34.6153 63.3818 -2.5H78.1023C78.3707 26.4856 101.951 49.9 131 49.9C160.049 49.9 183.629 26.4856 183.898 -2.5H198.618C198.349 34.6153 168.179 64.62 131 64.62ZM131 159.94C185.543 159.94 229.79 204.02 230.059 258.5H215.339C215.069 212.151 177.413 174.66 131 174.66C84.5871 174.66 46.9305 212.151 46.6614 258.5H31.9412C32.2105 204.02 76.4575 159.94 131 159.94ZM131 191.38C168.179 191.38 198.349 221.384 198.618 258.5H183.898C183.629 229.515 160.048 206.1 131 206.1C101.951 206.1 78.3707 229.515 78.1023 258.5H63.3818C63.6506 221.384 93.8213 191.38 131 191.38Z" />
          </svg>
        </div>
        <div className="hero-text-container-right">
          <div>
            <h2>Let’s</h2>
            <img src={Btn} alt="Button" />
          </div>
          <h2>Work Together</h2>
        </div>
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
      <div className="hero-img container-auto">
        <img src={Hero_img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
