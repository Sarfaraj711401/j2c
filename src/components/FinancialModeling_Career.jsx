import React from "react";
import "./FinancialModeling_Career.css";

const careerData = [
  {
    img: "/images/Corporate_Finance.webp",
    title: "Corporate Finance Associate",
    desc: "Support forecasting and planning to help companies make informed decisions",
  },
  {
    img: "/images/Valuation.webp",
    title: "Valuation Analyst",
    desc: "Perform valuations for mergers, acquisitions, and key financial reporting needs.",
  },
  {
    img: "/images/finance-intern.png.webp",
    title: "Finance Intern",
    desc: "Gain real-world experience in modelling, reporting, and financial data analysis.",
  },
  {
    img: "/images/junior-financial-data-analyst.png.webp",
    title: "Junior Financial Data Analyst",
    desc: "Assist in collecting and analyzing financial data to support key business insights.",
  },
];

const FinancialModeling_Career = () => {
  return (
    <section className="career-section">
      <h2 className="career-title">
        Top career options in Financial Modeling Placement Course
      </h2>

      <div className="career-container">
        {careerData.map((career, index) => (
          <div className="career-card" key={index}>
            <img src={career.img} alt={career.title} className="career-icon" />
            <h3>{career.title}</h3>
            <p>{career.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FinancialModeling_Career;