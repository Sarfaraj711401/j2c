import React from "react";
import "./Placement_Partner_Trusted.css";

const Placement_Partner_Trusted = () => {
  return (
    <>
      {/* TITLE */}
      <div className="pp-section-title">
        <h2>
          Trusted by <span>Industry Leaders</span>
        </h2>
        <p>Our partners represent the pinnacle of global business</p>
      </div>

      {/* GRID */}
      <section className="pp-partner-grid">
        
        <div className="pp-partner-card">
          <span className="pp-partner-tag">Technology</span>
          <div className="pp-partner-logo">G</div>
          <h3>Google</h3>
          <p><span className="pp-highlight">45</span> placements this year</p>
        </div>

        <div className="pp-partner-card">
          <span className="pp-partner-tag">Finance</span>
          <div className="pp-partner-logo">GS</div>
          <h3>Goldman Sachs</h3>
          <p><span className="pp-highlight">38</span> placements this year</p>
        </div>

        <div className="pp-partner-card">
          <span className="pp-partner-tag">Consulting</span>
          <div className="pp-partner-logo">Mc</div>
          <h3>McKinsey</h3>
          <p><span className="pp-highlight">32</span> placements this year</p>
        </div>

        <div className="pp-partner-card">
          <span className="pp-partner-tag">Technology</span>
          <div className="pp-partner-logo">A</div>
          <h3>Amazon</h3>
          <p><span className="pp-highlight">52</span> placements this year</p>
        </div>

        <div className="pp-partner-card">
          <span className="pp-partner-tag">Finance</span>
          <div className="pp-partner-logo">JP</div>
          <h3>JPMorgan</h3>
          <p><span className="pp-highlight">41</span> placements this year</p>
        </div>

        <div className="pp-partner-card">
          <span className="pp-partner-tag">Technology</span>
          <div className="pp-partner-logo">Ms</div>
          <h3>Microsoft</h3>
          <p><span className="pp-highlight">48</span> placements this year</p>
        </div>

        <div className="pp-partner-card">
          <span className="pp-partner-tag">Consulting</span>
          <div className="pp-partner-logo">D</div>
          <h3>Deloitte</h3>
          <p><span className="pp-highlight">36</span> placements this year</p>
        </div>

        <div className="pp-partner-card">
          <span className="pp-partner-tag">Technology</span>
          <div className="pp-partner-logo">Ap</div>
          <h3>Apple</h3>
          <p><span className="pp-highlight">29</span> placements this year</p>
        </div>

      </section>
    </>
  );
};

export default Placement_Partner_Trusted;