import React from "react";
import "./EmployerPanIndia.css";

const EmployerPanIndia = () => {

  const cities = [
    { name: "Delhi-NCR", count: "38,83,000+ Candidates" },
    { name: "Bangalore", count: "34,87,000+ Candidates" },
    { name: "Mumbai", count: "30,20,000+ Candidates" },
    { name: "Pune", count: "22,69,000+ Candidates" }
  ];

  return (
    <section className="EmployerPanIndia-section">
      <div className="EmployerPanIndia-container">

        <h2 className="EmployerPanIndia-title">
          Hire PAN India on J2C
        </h2>

        <div className="EmployerPanIndia-cards">
          {cities.map((item, index) => (
            <div className="EmployerPanIndia-card" key={index}>
              <div className="EmployerPanIndia-info">
                <h4>{item.name}</h4>
                <p>{item.count}</p>
              </div>
              <div className="EmployerPanIndia-arrow">›</div>
            </div>
          ))}
        </div>

        {/* slider dots */}
        <div className="EmployerPanIndia-dots">
          <span></span>
          <span className="active"></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </section>
  );
};

export default EmployerPanIndia;