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

const Full_Stack_Comapny = () => {
  return (
    <div className="white-section">

      {/* Counsellor CTA */}
      <div className="counsellor-box">
        <p>
          Have doubts about Full Stack Development Placement Course? Get guidance from counsellors now.
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
          <h3>19,818</h3>
          <p>FSD jobs & PPO opportunities</p>
        </div>

        <div className="stat">
          <h3>₹ 44 LPA</h3>
          <p>Highest salary offered</p>
        </div>

        <div className="stat">
          <h3>₹ 3-10 LPA</h3>
          <p>Average salary after course</p>
        </div>
      </div>

    </div>
  );
};

export default Full_Stack_Comapny;