import React from "react";
import "./Staffing_Hero.css";

const Staffing_Hero = () => {
  return (
    <section className="j2c-hero-wrapper">

      <div className="j2c-hero-container">

        {/* LEFT */}
        <div className="j2c-hero-left">

          <div className="j2c-badge">
            #1 Staffing Partner in India
          </div>

          <h1>
            Hire Top Talent,<br />
            <span>Zero Hassle.</span>
          </h1>

          <p>
            From fresh graduates to C-suite executives, we connect you with
            pre-vetted candidates <b>3x faster</b> than traditional agencies.
          </p>

          <div className="j2c-btn-group">
            <a href="#" className="j2c-btn-primary">
              Start Hiring Now
            </a>

            <a href="#" className="j2c-btn-outline">
              View Pricing
            </a>
          </div>

          <div className="j2c-features">
            <span>✔ AI-Verified</span>
            <span>✔ 48hr TAT</span>
          </div>

        </div>

        {/* RIGHT */}
        <div className="j2c-hero-right">

          <div className="j2c-image-bg"></div>

          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
            alt="hero"
            className="j2c-hero-img"
          />

          {/* FLOAT CARD */}
          <div className="j2c-float-card">
            <div className="j2c-icon">✔</div>
            <div>
              <small>CANDIDATES PLACED</small>
              <h3>12,500+</h3>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Staffing_Hero;