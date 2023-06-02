import React, { useState } from "react";
import "./FAQSection.css"; // import the CSS file for the FAQ styles

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Can you integrate your 3D infrastructure solutions with our existing software and platforms?",
      answer:
        "Yes, we can work with your team to integrate our solutions with your existing software and platforms, such as Unity or Unreal game engines, eCommerce websites, or other systems.",
    },
    {
      question: "How do you integrate NeRF, blockchain, and GAN technologies into your solutions for XR, gaming, and eCommerce industries?",
      answer:
        "Yes, we can work with your team to integrate our solutions with your existing software and platforms, such as Unity or Unreal game engines, eCommerce websites, or other systems.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis sapien ipsum. Quisque ac diam blandit, fringilla nulla a, fringilla lorem. Nam auctor massa eget neque bibendum feugiat.",
    },
  ];

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div
          key={index}
          className="faq-accordion"
          onClick={() => toggleAccordion(index)}
        >
          <div className="faq-header">
            <h3>{faq.question}</h3>
          </div>
          <div
            className={`faq-content ${
              activeIndex === index ? "active" : "inactive"
            }`}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FAQSection;
