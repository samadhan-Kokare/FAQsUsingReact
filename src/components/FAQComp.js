import React from "react";
import FAQItems from "./FAQItems";

let faqs = [
  {
    question: "who is your favourite cricketer?",
    Answer: "Rohit Sharma",
  },
  {
    question: "who is your favourite actrees?",
    Answer: "Sai Pallavi",
  },
  {
    question:
      "Arrays in JavaScript are defined by which of the following statements?",
    Answer: "It is an ordered list of values",
  },
  {
    question:
      "Where is Client-side JavaScript code is embedded within HTML documents?",
    Answer: "A URL that uses the special javascript:protocol",
  },
];

const FAQComp = () => {
  return (
    <>
      {faqs.map((faqs, index) => {
        return <FAQItems faq={faqs} index={index} />;
      })}
    </>
  );
};
export default FAQComp;
