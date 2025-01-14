import React, { useState } from "react";

const FAQItems = ({ faq, index }) => {
  const [ansDisplay, setAnsDisplay] = useState(false);

  return (
    <>
      <div className="faq-container">
        <div className="faq-question">
          <div>{faq.question}</div>

          <button
            onClick={() => {
              setAnsDisplay((ansDisplay) => !ansDisplay); //Toggle the button
            }}
            key={index}
          >
            >
          </button>
        </div>

        <div
          style={{ display: ansDisplay ? "block" : "none" }}
          className="faq-answer"
        >
          {faq.Answer}
        </div>
      </div>
    </>
  );
};
export default FAQItems;
