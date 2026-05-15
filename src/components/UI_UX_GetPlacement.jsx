import React from "react";
import "./GetPlacement.css";

const UI_UX_GetPlacement = () => {
  return (
    <section className="get-placement-section">
      <h2 className="gp-title">How will you get placement?</h2>

      <div className="gp-card">
        {/* Left Side */}
        <div className="gp-left">
          <h3 className="gp-subtitle">
            Go from <span className="blue">beginner to pro in 6 months</span>
          </h3>

          <p className="gp-desc">
            With a curriculum designed and taught by industry experts,
            you will get the skills and mentorship for career success.
          </p>

          <div className="gp-features">
            <div className="gp-box">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2985/2985150.png"
                alt="sessions"
                className="gp-icon"
              />
              <p>Live & on-demand sessions</p>
            </div>

            <div className="gp-box">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
                alt="ai tools"
                className="gp-icon"
              />
              <p>Latest AI tools</p>
            </div>

            <div className="gp-box">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3208/3208750.png"
                alt="projects"
                className="gp-icon"
              />
              <p>Industry-level projects</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="gp-right">
          <img
            src="/images/banner-1.gif"
            alt="illustration"
            className="gp-illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default UI_UX_GetPlacement;