import React from "react";
import "./Certification.css";

const Certification = () => {
  return (
    <div className="certification-section">
      <div className="section-container">

        <h1 className="main-title">
          Industry Recognized & <span>Government Approved Certificate</span>
        </h1>

        {/* Header */}
        <div className="cert-header">
          <div className="header-content">

            <div className="header-text">
              <p className="header-subtitle">
                10,000+ companies use JourneyToCareer certificates while hiring every year.
                So get NSDC certified from JourneyToCareer and get recognized everywhere.
              </p>

              <p className="header-highlight">
                ALSO: NSDC India Certificate from National Skill Development Corporation & Skill India
              </p>
            </div>

            <div className="cert-stats">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Companies Hiring</div>
            </div>

          </div>
        </div>

        {/* Certificates Section */}
        <div className="certificates-grid">

          {/* Image */}
          <div className="cert-image-container">
            <img
              src="/images/NSDC.jpg"   // 👉 put image inside public/images/
              alt="Certificate"
              className="cert-image"
            />
          </div>

          {/* Info */}
          <div className="cert-info">
            <h3>Industry Certificate + NSDC Certificate</h3>

            <ul className="cert-features">
              <li>Industry recognized everywhere</li>
              <li>NSDC Skill India certified</li>
              <li>Government approved training</li>
              <li>Lifetime valid certificates</li>
              <li>Digital & Physical both</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Certification;