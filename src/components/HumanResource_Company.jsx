import React from "react";
import "./Company_Section.css";

// import logos (recommended)
import flipkart from "../assets/flipkart-minutes-logo.webp";
import indiaToday from "../assets/india today logo.png";
import techMahindra from "../assets/tech-mahindra-logo.avif";
import amazon from "../assets/amazon.png";
import yatra from "../assets/yatra-logo.png";
import swiggy from "../assets/swiggy-logo.png";
import myntra from "../assets/mintra-logo.png";
import netflix from "../assets/netflix-transparen.webp";

const HumanResource_Company = () => {
  return (
    <div className="white-section">

      {/* Counsellor CTA */}
      <div className="counsellor-box">
        <p>
          Have questions about the Human Resource Management Placement Course? Our counsellors are here to help you every step of the way
        </p>
        <button className="counsellor-btn">
          Speak to a counsellor
        </button>
      </div>

      {/* Companies */}
      <section className="companies">
        <h2>Top companies hiring on PCS</h2>

        <div className="company-logos">
          <img src={flipkart} alt="flipkart" />
          <img src={indiaToday} alt="india today" />
          <img src={techMahindra} alt="tech mahindra" />
          <img src={amazon} alt="amazon" />
          <img src={yatra} alt="yatra" />
          <img src={swiggy} alt="swiggy" />
          <img src={myntra} alt="myntra" />
          <img src={netflix} alt="netflix" />
        </div>
      </section>

      {/* Stats */}
      <div className="stats-box">
        <div className="stat">
          <h3>₹ 5-10 LPA</h3>
          <p>Salary after course</p>
        </div>

        <div className="stat">
          <h3>₹ 19 LPA</h3>
          <p>Highest salary offered</p>
        </div>

        <div className="stat">
          <h3>1350+</h3>
          <p>HRM jobs & PPO opportunities</p>
        </div>

        <div className="stat">
          <h3>2100+</h3>
          <p>Human Resource internships</p>
        </div>
      </div>

    </div>
  );
};

export default HumanResource_Company;