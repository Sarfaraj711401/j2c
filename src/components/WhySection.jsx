import React from "react";
import "./WhySection.css";

const WhySection = () => {
  return (
    <div className="why-section-wrapper">
      <div className="why-card">

        {/* LEFT TEXT */}
        <div className="why-text-block">
          <h2>Why learn Python?</h2>

          <div className="reason-block">
            <div className="reason-title">Flexibility</div>
            <p className="reason-text">
              Python powers Machine Learning, AI, Web Development, Hacking, IoT, and countless other fields—truly a universal programming language
            </p>
          </div>

          <div className="reason-block">
            <div className="reason-title">Approachability</div>
            <p className="reason-text">
              Python's simple yet powerful syntax makes it one of the most accessible languages to learn.
            </p>
          </div>

          <div className="reason-block">
            <div className="reason-title">High job market value</div>
            <p className="reason-text">
              Python tops Stack Overflow's fastest-growing languages list and offers freshers an average salary of 5+ LPA per Glassdoor data.
            </p>
          </div>
        </div>

        {/* RIGHT VISUAL */}
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

export default WhySection;