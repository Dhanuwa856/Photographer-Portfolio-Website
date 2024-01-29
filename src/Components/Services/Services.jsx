import React from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Btn from "../Assets/button.png";
import Icon from "../Assets/icon.png";
import Services_img from "../Assets/services.png";

const Services = () => {
  return (
    <div className="container-fuild services">
      <div className="container-auto">
        <div className="sub-services">
          <div className="sub-services-left">
            <p>Services</p>
            <h2>My Photography Services</h2>
          </div>
          <div className="sub-services-right">
            <div className="services-arrow-btns">
              <span>
                <FontAwesomeIcon icon={faChevronLeft} />
              </span>
              <span>
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
            </div>
            <div className="all-btn">
              <button>
                View All Services <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>
        <div className="services-content">
          <div className="services-content-left">
            <h2>
              Events <img src={Btn} alt="" />
            </h2>
            <p>
              Our event photography service is dedicated to capturing the magic
              of your special occasions. Whether it's a wedding, corporate
              event, or milestone celebration, we're there to document every
              heartfelt moment. We blend into the background, ensuring natural
              and candid shots that reflect the emotions of the day.
            </p>
            <h4>Service Highlights</h4>
            <h5>
              <img src={Icon} alt="" />
              Coverage for weddings, parties, corporate functions, and more.
            </h5>
            <h5>
              <img src={Icon} alt="" />
              Skilled photographers who know how to seize the moment.
            </h5>
            <h5>
              <img src={Icon} alt="" />A mix of candid and posed shots for a
              comprehensive story.
            </h5>
            <h5>
              <img src={Icon} alt="" />
              Quick turnaround for you to relive the day's highlights.
            </h5>
          </div>
          <div className="services-content-right">
            <img src={Services_img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
