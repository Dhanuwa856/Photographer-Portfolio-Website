import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Accordion02 = () => {
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
    question: "What is your editing process like?",
    answer:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa odio dicta eos ex consequuntur maiores facere doloremque voluptatem similique voluptate est, recusandae accusamus expedita explicabo. Totam eligendi beatae cupiditate voluptatum.",
  },
  {
    question: "Are digital files included in your photography packages?",
    answer:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa odio dicta eos ex consequuntur maiores facere doloremque voluptatem similique voluptate est, recusandae accusamus expedita explicabo. Totam eligendi beatae cupiditate voluptatum.",
  },
  {
    question: "Do you offer prints of your photographs?",
    answer:
      "Yes, prints are available for purchase. Explore the 'Prints' section for more details on sizes and pricing.",
  },
  {
    question:
      "How long does it take to receive the edited photos after a session?",
    answer:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa odio dicta eos ex consequuntur maiores facere doloremque voluptatem similique voluptate est, recusandae accusamus expedita explicabo. Totam eligendi beatae cupiditate voluptatum.",
  },
];
export default Accordion02;
