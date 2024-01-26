import React from "react";
import "./PortfolioLink.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
const PortfolioLink = (props) => {
  return (
    <div className="portfolio-card">
      <img src={props.image} alt={props.title} />
      <div className="portfolio-text">
        <h5>{props.title}</h5>
        <p>
          {props.link}
          <span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </span>
        </p>
      </div>
      <h4>{props.date}</h4>
    </div>
  );
};

export default PortfolioLink;
