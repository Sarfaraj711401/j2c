import React from "react";
import "./CampusBenefits.css";

const CampusBenefits = () => {
  return (
    <section className="campus-benefits">
      <div className="campus-benefits__container">
        
        <h2 className="campus-benefits__title">
          Why Become an Ambassador?
        </h2>

        <p className="campus-benefits__subtitle">
          Unlock exclusive perks that accelerate your career.
        </p>

        <div className="campus-benefits__grid">

          <div className="campus-benefits__card">
            <div className="campus-benefits__icon blue">💰</div>
            <h3>Stipends</h3>
            <p>Earn cash rewards for every milestone you achieve.</p>
          </div>

          <div className="campus-benefits__card">
            <div className="campus-benefits__icon purple">📜</div>
            <h3>Certificate</h3>
            <p>Get a prestigious Certificate of Merit from J2C.</p>
          </div>

          <div className="campus-benefits__card">
            <div className="campus-benefits__icon orange">🤝</div>
            <h3>Mentorship</h3>
            <p>Connect directly with industry experts & recruiters.</p>
          </div>

          <div className="campus-benefits__card">
            <div className="campus-benefits__icon teal">🎁</div>
            <h3>Goodies</h3>
            <p>Win exclusive J2C merchandise and vouchers.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CampusBenefits;