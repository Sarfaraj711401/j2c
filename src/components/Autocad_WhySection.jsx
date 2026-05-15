import React from "react";
import "./WhySection.css";

const Autocad_WhySection = () => {
  return (
    <div className="why-section-wrapper">
      <div className="why-card">

        {/* LEFT TEXT COLUMN */}
        <div className="why-text-block">
          <h2>Why Learn AutoCAD?</h2>

          <div className="reason-block">
            <div className="reason-title">Industry Standard Tool</div>
            <p className="reason-text">
              AutoCAD is trusted by professionals all over the world for precise and reliable drafting.
            </p>
          </div>

          <div className="reason-block">
            <div className="reason-title">Supports 2D & 3D Designs</div>
            <p className="reason-text">
              Create both technical 2D drawings and realistic 3D models with ease.
            </p>
          </div>

          <div className="reason-block">
            <div className="reason-title">
              Boosts Career Opportunities & Improves Productivity
            </div>
            <p className="reason-text">
              AutoCAD skills open doors to jobs in Civil, Electrical, Mechanical, and Interior Design fields. 
              Automates repetitive tasks, saving time and increasing efficiency.
            </p>
          </div>
        </div>

        {/* RIGHT VISUAL COLUMN */}
        <div className="why-visual-block">
          <div className="bg-blob"></div>

          <div className="floating-badge">
            <i className="fas fa-bolt"></i>
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

export default Autocad_WhySection;