import React from "react";
import "./EmployerStats.css";

const EmployerStats = () => {
  const stats = [
    {
      number: "2x",
      text: "Faster hiring with AI-powered shortlisting"
    },
    {
      number: "32M+",
      text: "Verified candidate profiles across India"
    },
    {
      number: "90%",
      text: "Employers get relevant applications in 48 hours"
    },
    {
      number: "₹0",
      text: "Cost to post jobs & internships on J2C"
    }
  ];

  return (
    <section className="EmployerStats-section">
      <div className="EmployerStats-container">

        <h2 className="EmployerStats-title">
          Why employers choose J2C
        </h2>

        <div className="EmployerStats-cards">
          {stats.map((item, index) => (
            <div className="EmployerStats-card" key={index}>
              <div className="EmployerStats-number">{item.number}</div>
              <div className="EmployerStats-text">{item.text}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EmployerStats;