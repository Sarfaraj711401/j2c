import React from "react";
import "./Product_Mng_Fees.css";

const Product_Mng_Fees = () => {
  return (
    <section className="fs-fees-section container">
      <h2 className="fs-fees-title">Course fees</h2>

      <div className="fs-fee-card">
        
        <div className="fs-currency-icon-circle">
          <i className="fa-solid fa-indian-rupee-sign"></i>
        </div>

        <div className="fs-price-container">
          <span className="fs-current-price">₹35,999</span>
          <span className="fs-original-price">40,000</span>
          <span className="fs-validity-badge">Valid till today</span>
        </div>

        <p className="fs-fee-info-text">
          No-cost <a href="#">EMI options</a> available <br />
          starting at just ₹3,500 per month
        </p>

        <p className="fs-fee-info-text">
          Course fee refund if not placed!
        </p>

        <a href="#" className="fs-tc-apply">*T&C apply</a>

        <button className="fs-btn-apply-now">Apply now</button>
      </div>
    </section>
  );
};

export default Product_Mng_Fees;