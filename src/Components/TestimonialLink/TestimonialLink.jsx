import React from "react";
import "./TestimonialLink.css";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const TestimonialLink = (props) => {
  return (
    <div className="testimonial-card">
      <div className="card-name-social">
        <div className="card-name">
          <h4>{props.name}</h4>
          <p>USA, California</p>
        </div>
        <div className="card-social">
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
      </div>
      <div className="card-star">
        <span>
          <FontAwesomeIcon icon={faStar} />
        </span>
        <span>
          <FontAwesomeIcon icon={faStar} />
        </span>
        <span>
          <FontAwesomeIcon icon={faStar} />
        </span>
        <span>
          <FontAwesomeIcon icon={faStar} />
        </span>
        <span>
          <FontAwesomeIcon icon={faStar} />
        </span>
      </div>
      <h3>{props.comment}</h3>
    </div>
  );
};

export default TestimonialLink;
