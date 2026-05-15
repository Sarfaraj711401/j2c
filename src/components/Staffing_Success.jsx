import React from "react";
import "./Staffing_Success.css";

const Staffing_Success = () => {
  return (
    <section className="j2c-success-section">
      <div className="j2c-container">

        {/* Heading */}
        <h2 className="j2c-section-title">
          Success Stories
        </h2>

        {/* Cards */}
        <div className="j2c-row">

          {/* CARD 1 */}
          <div className="j2c-col">
            <div className="j2c-success-card border-primary">

              <div className="j2c-card-header">
                <span className="j2c-badge badge-primary">Tech Startup</span>
                <span className="j2c-meta">Hired in 10 Days</span>
              </div>

              <h3>Scaling a Dev Team for Series A Startup</h3>

              <p className="j2c-description">
                The client needed 5 Full Stack Developers immediately after funding.
                Traditional channels were too slow.
              </p>

              <div className="j2c-result-box">
                <strong>Result:</strong>
                <p className="j2c-success-text">
                  J2C closed all 5 positions with candidates from top IITs/NITs within 10 days.
                </p>
              </div>

            </div>
          </div>

          {/* CARD 2 */}
          <div className="j2c-col">
            <div className="j2c-success-card border-success">

              <div className="j2c-card-header">
                <span className="j2c-badge badge-success">Ed-Tech Giant</span>
                <span className="j2c-meta">Campus Drive</span>
              </div>

              <h3>Pan-India Sales Intern Hiring</h3>

              <p className="j2c-description">
                Client required 200+ interns for summer sales program across 15 different cities.
              </p>

              <div className="j2c-result-box">
                <strong>Result:</strong>
                <p className="j2c-success-text">
                  Conducted virtual drives in 50+ colleges. Onboarded 220 interns in 3 weeks.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Staffing_Success;