import React from "react";
import "./PlacementSection.css";

const PlacementSection = () => {
  return (
    <div className="placement-section-wrapper">
      <div className="placement-card">

        {/* LEFT TEXT */}
        <div className="placement-text-block">
          <h2>What placement assistance will you receive?</h2>

          <div className="benefit-block">
            <div className="benefit-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="benefit-title">
              Free Placement Prep Training
            </div>
            <p className="benefit-text">
              Learn how to build your resume, make great applications, and ace your interviews.
            </p>
          </div>

          <div className="benefit-block">
            <div className="benefit-icon">
              <i className="fas fa-search"></i>
            </div>
            <div className="benefit-title">
              Curated Internships & Jobs
            </div>
            <p className="benefit-text">
              Get internships and jobs as per your preference in inbox.
            </p>
          </div>

          <div className="benefit-block">
            <div className="benefit-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="benefit-title">
              Get Highlighted
            </div>
            <p className="benefit-text">
              Your internships and jobs will be highlighted in internship and job applications.
            </p>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="placement-visual-block">

          <div className="hired-badge">
            <i className="fas fa-check-circle"></i> HIRED
          </div>

          <div className="floating-docs doc-left">
            <div className="doc-icon">
              <i className="fas fa-file-alt"></i>
            </div>
            <div className="doc-label">Resume</div>
          </div>

          <div className="floating-docs doc-right">
            <div className="doc-icon">
              <i className="fas fa-rocket"></i>
            </div>
            <div className="doc-label">Job Offers</div>
          </div>

          <div className="student-character"></div>

        </div>

      </div>
    </div>
  );
};

export default PlacementSection;