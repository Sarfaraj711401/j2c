import React from "react";
import "./Staffing_BrandTrusted.css";

const Staffing_BrandTrusted = () => {
  return (
    <div className="brand-trust">
      <div className="brand-container">

        <p className="trust-title">
          Trusted by 500+ Market Leaders
        </p>

        <div className="brand-grid">

          <div className="brand-item">
            <div className="brand-box bg-dark"></div>
            <span>TechCorp</span>
          </div>

          <div className="brand-item">
            <div className="brand-box bg-primary circle"></div>
            <span>FinGlobal</span>
          </div>

          <div className="brand-item">
            <div className="brand-box bg-success top-round"></div>
            <span>EduSmart</span>
          </div>

          <div className="brand-item">
            <div className="brand-box bg-danger"></div>
            <span>MediaBuzz</span>
          </div>

          <div className="brand-item">
            <div className="brand-box bg-purple circle"></div>
            <span>LogiStick</span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Staffing_BrandTrusted;