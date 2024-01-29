import React from "react";
import "./Faq.css";
import Accordion from "../Accordion/Accordion";
import Accordion02 from "../Accordion02/Accordion02";

const Faq = () => {
  return (
    <div className="container-fuild faq">
      <div className="container-auto">
        <div className="sub-faq">
          <p>FAQ’s</p>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-section">
          <div className="faq-left">
            <Accordion />
          </div>
          <div className="faq-right">
            <Accordion02 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
