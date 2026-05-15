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

const Supply_Chain_mng_Company = () => {
  return (
    <div className="white-section">

      {/* Counsellor CTA */}
      <div className="counsellor-box">
        <p>
          Have questions about the Supply Chain Logistics Placement Course? Our counsellors are here to help you every step of the way
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
          <h3>₹ 79,999/month</h3>
          <p>Highest stipend offered</p>
        </div>

        <div className="stat">
          <h3>₹ 29 LPA</h3>
          <p>Highest salary offered</p>
        </div>

        <div className="stat">
          <h3>3000+</h3>
          <p>Internships with PPO</p>
        </div>

        <div className="stat">
          <h3>700+</h3>
          <p>Supply Chain Management internships</p>
        </div>
      </div>

    </div>
  );
};

export default Supply_Chain_mng_Company;