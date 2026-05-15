import React from "react";
import "./FinancialModeling_Fees.css";

const HumanResource_Fees = () => {
  return (
    <section className="fees-sec-wrapper">
      <div className="fees-sec-container">
        <h2 className="fees-sec-title">Course fees</h2>

        <div className="fees-sec-card">
          <div className="fees-sec-icon-circle">
            <i className="fa-solid fa-indian-rupee-sign"></i>
          </div>

          <div className="fees-sec-price-box">
            <span className="fees-sec-current">₹30,999</span>
            <span className="fees-sec-original">40,000</span>
            <span className="fees-sec-badge">Valid till today</span>
          </div>

          <p className="fees-sec-text">
            No-cost <a href="#">EMI options</a> available <br />
            starting at just ₹1,950 per month
          </p>

          <p className="fees-sec-text">
            Course fee refund if not placed!
          </p>

          <a href="#" className="fees-sec-tc">
            *T&C apply
          </a>

          <button className="fees-sec-btn">Apply now</button>
        </div>
      </div>
    </section>
  );
};

export default HumanResource_Fees;