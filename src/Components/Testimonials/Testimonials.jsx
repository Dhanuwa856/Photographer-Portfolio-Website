import React from "react";
import "./Testimonials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Testimonila_list from "../Assets/TestimonialList";
import TestimonialLink from "../TestimonialLink/TestimonialLink";

const Testimonials = () => {
  return (
    <div className="container-fluid testimonial">
      <div className="container-auto">
        <div className="sub-testimonial">
          <p>Testimonials</p>
          <h2>What My Clients Say</h2>
        </div>
        <div className="sub-testimonial02">
          <div className="sub-testimonial02-left">
            <p>Total Reviews</p>
            <h5>323</h5>
          </div>
          <div className="sub-testimonial02-right">
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
                View All Testimonials <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="testimonial-cards">
          {Testimonila_list.map((item, i) => {
            return (
              <TestimonialLink
                key={i}
                name={item.name}
                comment={item.comment}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
