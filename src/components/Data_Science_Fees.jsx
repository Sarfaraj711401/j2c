import React from "react";
import "./Data_Science_Fees.css";

const Data_Science_Fees = () => {
  return (
    <section className="fees-section">
  <div className="container">
    <h2 className="fees-title">Course fees</h2>

    <div className="fee-card">
      <div className="currency-icon-circle">
        <i className="fa-solid fa-indian-rupee-sign"></i>
      </div>

      <div className="price-container">
        <span className="current-price">₹38,999</span>
        <span className="original-price">45,000</span>
        <span className="validity-badge">Valid till today</span>
      </div>

      <p className="fee-info-text">
        No-cost <a href="#">EMI options</a> available <br />
        starting at just ₹3,750 per month
      </p>

      <p className="fee-info-text">
        Course fee refund if not placed!
      </p>

      <a href="#" className="tc-apply">
        *T&C apply
      </a>

      <button className="btn btn-apply-now">
        Apply now
      </button>
    </div>
  </div>
</section>
  );
};

export default Data_Science_Fees;