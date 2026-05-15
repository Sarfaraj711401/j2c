import React from "react";
import "./Placement_Partner_Prepare.css";

const Placement_Partner_Prepare = () => {
  return (
    <section className="pp-prepare-section">
      
      <h2 className="pp-prepare-title">
        How We Prepare You
      </h2>

      <div className="pp-prepare-grid">

        {/* CARD 1 */}
        <div className="pp-prepare-card">
          <div className="pp-prepare-step">1</div>
          <h3>Skill Assessment</h3>
          <p>
            Individual profiling to identify technical gaps
            and career aspirations.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="pp-prepare-card">
          <div className="pp-prepare-step">2</div>
          <h3>Bootcamps</h3>
          <p>
            Intensive 4-week training on coding, logic,
            and soft skills.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="pp-prepare-card">
          <div className="pp-prepare-step">3</div>
          <h3>Interview Drives</h3>
          <p>
            Direct access to campus recruitment drives
            with Fortune 500 companies.
          </p>
        </div>

      </div>

    </section>
  );
};

export default Placement_Partner_Prepare;