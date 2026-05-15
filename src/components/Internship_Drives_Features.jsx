import React from "react";
import "./Internship_Drives_Features.css";

const Internship_Drives_Features = () => {
  return (
    <section className="internship-features">
      <div className="container">
        <div className="row g-4">

          {/* CARD 1 */}
          <div className="col-lg-4 col-md-6">
            <div className="internship-feature-card">
              <div className="internship-feature-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h4>Live Campus Drives</h4>
              <p>
                Top companies visit your campus for direct interviews. No travel needed.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="col-lg-4 col-md-6">
            <div className="internship-feature-card">
              <div className="internship-feature-icon">
                <i className="fas fa-users"></i>
              </div>
              <h4>AI Skill Matching</h4>
              <p>
                Personalized opportunities in Digital Marketing, HR, Supply Chain & more.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="col-lg-4 col-md-6">
            <div className="internship-feature-card">
              <div className="internship-feature-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <h4>Guaranteed Offers</h4>
              <p>
                Pre-placement interviews with high selection rate and full-time roles.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Internship_Drives_Features;