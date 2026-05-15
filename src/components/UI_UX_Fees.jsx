import React from "react";
import "./Fees.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

const UI_UX_Fees = () => {
  return (
    <section className="uiux-fees-page">  {/* ✅ WRAPPER */}

      <div className="fees-section">
        <div className="container">

          <h2 className="fees-title">Course fees</h2>

          <div className="fee-card">

            <div className="currency-icon-circle">
              <FontAwesomeIcon icon={faIndianRupeeSign} />
            </div>

            <div className="price-container">
              <span className="current-price">₹39,999</span>
              <span className="original-price">₹49,000</span>
              <span className="validity-badge">Valid till today</span>
            </div>

            <p className="fee-info-text">
              No-cost <a href="#">EMI options</a> available <br />
              starting at just ₹4,750 per month
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
      </div>

    </section>
  );
};

export default UI_UX_Fees;