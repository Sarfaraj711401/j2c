import React, { useState } from "react";
import "./EmployerFAQ.css";

const EmployerFAQ = () => {

  const [activeItems, setActiveItems] = useState([]);

  const faqs = [
    {
      q: "How quickly will I get applicants?",
      a: "Typically you will start receiving applications within a few hours; quality depends on your job description and filters."
    },
    {
      q: "Is there a free plan?",
      a: "Yes, you can post basic listings for free and upgrade to paid features for additional tools."
    },
    {
      q: "Can I schedule interviews through the platform?",
      a: "Absolutely — our platform includes chat, assignments and interview scheduling tools to streamline hiring."
    }
  ];

  const toggleFAQ = (index) => {
    if (activeItems.includes(index)) {
      setActiveItems(activeItems.filter(i => i !== index)); // close
    } else {
      setActiveItems([...activeItems, index]); // open
    }
  };

  return (
    <section className="EmployerFAQ-section">
      <div className="EmployerFAQ-container">

        <h2 className="EmployerFAQ-title">
          Frequently asked questions
        </h2>

        {faqs.map((item, index) => (
          <div
            key={index}
            className={`EmployerFAQ-item ${activeItems.includes(index) ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >

            <div className="EmployerFAQ-question">
              {item.q}
              <span className="EmployerFAQ-icon">
                {activeItems.includes(index) ? "−" : "+"}
              </span>
            </div>

            <div className="EmployerFAQ-answer">
              {item.a}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default EmployerFAQ;