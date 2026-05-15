import React from "react";
import "./WhySection.css";

const Advanced_WhySection = () => {
  return (
    <div className="why-section-wrapper">
      <div className="why-card">

        {/* LEFT TEXT COLUMN */}
        <div className="why-text-block">
          <h2>Why learn Advanced Excel?</h2>

          <div className="reason-block">
            <div className="reason-title">
              High demand skill across industries
            </div>
            <p className="reason-text">
              Advanced Excel is widely used in finance, IT, HR, marketing,
              operations, and analytics. Employers value professionals who can
              analyze and present data effectively.
            </p>
          </div>

          <div className="reason-block">
            <div className="reason-title">
              Faster and smarter data analysis
            </div>
            <p className="reason-text">
              Advanced formulas, Pivot Tables, Power Query, and dashboards help
              you analyze large datasets quickly and accurately.
            </p>
          </div>

          <div className="reason-block mb-0">
            <div className="reason-title">
              Foundation for data & analytics careers
            </div>
            <p className="reason-text">
              Advanced Excel is a stepping stone to learning Power BI, SQL,
              Python, and data science.
            </p>
          </div>
        </div>

        {/* RIGHT VISUAL COLUMN */}
        <div className="why-visual-block">

          <div className="bg-blob"></div>

          <div className="floating-badge">
            ⚡ Learn with AI tools
          </div>

          <div className="girl-img"></div>

          <div className="floating-icon like">👍</div>
          <div className="floating-icon chart">📈</div>
          <div className="floating-icon globe">🌍</div>
          <div className="floating-icon hash">#</div>

        </div>
      </div>
    </div>
  );
};

export default Advanced_WhySection;