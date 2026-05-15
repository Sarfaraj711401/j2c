import React from "react";

const DataScience_WhySection = () => {
  return (
    <div className="why-section-wrapper">
      <div className="why-card">

        {/* LEFT TEXT COLUMN */}
        <div className="why-text-block">
          <h2>Why Learn Data Science?</h2>

          <div className="reason-block">
            <div className="reason-title">High-Demand Career Skill</div>
            <p className="reason-text">
              Data Science professionals are among the most sought-after experts across IT, finance, healthcare, marketing, and e-commerce industries.
            </p>
          </div>

          <div className="reason-block">
            <div className="reason-title">Turns Data into Business Decisions</div>
            <p className="reason-text">
              Learn how to analyze raw data and convert it into meaningful insights that help companies grow and make smarter decisions.
            </p>
          </div>

          <div className="reason-block">
            <div className="reason-title">
              Powerful Combination of Analytics & AI
            </div>
            <p className="reason-text">
              Data Science blends statistics, Python, Machine Learning, and AI to solve real-world problems and build intelligent systems.
            </p>
          </div>
        </div>

        {/* RIGHT VISUAL COLUMN */}
        <div className="why-visual-block">
          <div className="bg-blob"></div>

          <div className="floating-badge">
            <i className="fas fa-bolt"></i> Learn with AI tools
          </div>

          <div className="girl-img"></div>

          <div className="floating-icon like">
            <i className="fas fa-thumbs-up"></i>
          </div>

          <div className="floating-icon chart">
            <i className="fas fa-chart-line"></i>
          </div>

          <div className="floating-icon globe">
            <i className="fas fa-globe"></i>
          </div>

          <div className="floating-icon hash">
            <i className="fas fa-hashtag"></i>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DataScience_WhySection;