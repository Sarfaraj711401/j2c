import React from "react";
import "./EmployerProfile.css";

const EmployerProfile = () => {
  const profiles = [
    { title: "Developers", count: "41,79,000+ Candidates" },
    { title: "Flutter App Developers", count: "35,11,000+ Candidates" },
    { title: "Content Writers", count: "30,33,000+ Candidates" },
    { title: "Web Developers", count: "27,88,000+ Candidates" }
  ];

  return (
    <section className="EmployerProfile-section">
      <div className="EmployerProfile-container">

        <h2 className="EmployerProfile-title">
          Hire for 100+ Profiles on J2C
        </h2>

        <div className="EmployerProfile-cards">
          {profiles.map((item, index) => (
            <div className="EmployerProfile-card" key={index}>
              <div className="EmployerProfile-info">
                <h4>{item.title}</h4>
                <p>{item.count}</p>
              </div>
              <div className="EmployerProfile-arrow">›</div>
            </div>
          ))}
        </div>

        {/* slider dots */}
        <div className="EmployerProfile-dots">
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

export default EmployerProfile;