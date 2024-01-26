import React from "react";
import "./Portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Portfolio_items from "../Assets/portfolioitem";
import PortfolioLink from "../PortfolioLink/PortfolioLink";
const Portfolio = () => {
  return (
    <div className="container-fluid portfolio">
      <div className="container-auto">
        <div className="sub-portfolio">
          <div className="sub-portfolio-left">
            <p>Portfolio</p>
            <h2>Explore My photography work.</h2>
          </div>
          <div className="sub-portfolio-right">
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
                View All Works <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>
        <div className="portfolio-cards">
          {Portfolio_items.map((item, i) => {
            return (
              <PortfolioLink
                key={i}
                image={item.image}
                title={item.title}
                date={item.date}
                link={item.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
