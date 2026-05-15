import React from "react";
import "./Campus_Hiring_Hero.css";

const Campus_Hiring_Hero = () => {
  return (
    <section className="j2c-hero j2c-hero-advanced">
      <div className="j2c-container j2c-hero-advanced-grid">

        {/* LEFT CONTENT */}
        <div className="j2c-hero-content">
          <span className="j2c-hero-badge">🚀 Campus Hiring Drive 2026</span>

          <h1>
            Get Hired by <span>Top Companies</span><br />
            Through J2C Platform
          </h1>

          <p>
            Join India’s centralized campus recruitment drive and unlock
            opportunities across <strong>Software, Data, UI/UX & Business roles</strong>.
          </p>

          <div className="j2c-hero-stats">
            <div>
              <h3>100+</h3>
              <span>Companies</span>
            </div>
            <div>
              <h3>5000+</h3>
              <span>Openings</span>
            </div>
            <div>
              <h3>₹12 LPA</h3>
              <span>Highest CTC</span>
            </div>
          </div>

          <div className="j2c-hero-actions">
            <a href="#apply" className="j2c-btn-primary">Apply Now</a>
            <a href="#roles" className="j2c-btn-outline">View Roles</a>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="j2c-hero-glass-card">
          <h3>Hiring Highlights</h3>

          <ul>
            <li>✔ Online Test & Interviews</li>
            <li>✔ Fresher Friendly Jobs</li>
            <li>✔ No Registration Fee</li>
            <li>✔ Multiple Offer Letters</li>
          </ul>

          <div className="j2c-hero-date">
            📅 <strong>15 Feb 2026</strong><br />
            🌐 Online Mode
          </div>
        </div>

      </div>
    </section>
  );
};

export default Campus_Hiring_Hero;