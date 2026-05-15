import React from "react";
import "./Staffing_Hiring.css";

const Staffing_Hiring = () => {
  return (
    <section className="hv-section">
      <div className="hv-container">

        {/* Heading */}
        <div className="hv-header">
          <h2>Hiring Across Verticals</h2>
          <p>Specialized talent pools for specialized industries.</p>
        </div>

        {/* Grid */}
        <div className="hv-grid">

          {/* CARD 1 */}
          <div className="hv-card">
            <div className="hv-icon blue">
              {"</>"}
            </div>
            <h4>IT & SaaS</h4>
            <p>DevOps, QA</p>
          </div>

          {/* CARD 2 */}
          <div className="hv-card">
            <div className="hv-icon green">
              $
            </div>
            <h4>Fintech</h4>
            <p>Analysts, CA</p>
          </div>

          {/* CARD 3 */}
          <div className="hv-card">
            <div className="hv-icon purple">
              ⚗️
            </div>
            <h4>Pharma</h4>
            <p>R&D, Lab Tech</p>
          </div>

          {/* CARD 4 */}
          <div className="hv-card">
            <div className="hv-icon orange">
              🛒
            </div>
            <h4>E-comm</h4>
            <p>Sales, Logistics</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Staffing_Hiring;