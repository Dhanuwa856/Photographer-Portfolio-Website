import React, { useState } from "react";
import "./Accordion.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((item, i) => (
          <div className="accordion-item">
            <div className="accordion-title" onClick={() => toggle(i)}>
              <h2>{item.question}</h2>
              <span>
                {selected == i ? (
                  <FontAwesomeIcon icon={faChevronUp} />
                ) : (
                  <FontAwesomeIcon icon={faChevronDown} />
                )}
              </span>
            </div>
            <div
              className={
                selected == i ? "accordion-content show" : "accordion-content"
              }
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const data = [
  {
    question: "What type of photography do you specialize in?",
    answer:
      "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
  },
  {
    question: "How can I book a photography session with you?",
    answer:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa odio dicta eos ex consequuntur maiores facere doloremque voluptatem similique voluptate est, recusandae accusamus expedita explicabo. Totam eligendi beatae cupiditate voluptatum.",
  },
  {
    question: "What equipment do you use for your photography?",
    answer:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa odio dicta eos ex consequuntur maiores facere doloremque voluptatem similique voluptate est, recusandae accusamus expedita explicabo. Totam eligendi beatae cupiditate voluptatum.",
  },
  {
    question: "Can I request a specific location for a ",
    answer:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa odio dicta eos ex consequuntur maiores facere doloremque voluptatem similique voluptate est, recusandae accusamus expedita explicabo. Totam eligendi beatae cupiditate voluptatum.",
  },
];

export default Accordion;
