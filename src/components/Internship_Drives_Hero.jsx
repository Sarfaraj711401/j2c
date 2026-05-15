import React from "react";
import "./Internship_Drives_Hero.css";

const Internship_Drives_Hero = () => {
  return (
    <section className="internship-hero">
      <div className="container internship-hero-content text-center position-relative">

        <h1 className="internship-hero-title">
          Internship Drives
        </h1>

        <p className="internship-hero-lead">
          Your Gateway to Professional Success
          <br />
          <small className="internship-hero-small">
            Connect with top companies hiring fresh talent across India
          </small>
        </p>

        <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
          <a href="#register" className="internship-btn internship-btn-primary">
            Apply Now
          </a>

          <a href="#upcoming" className="internship-btn internship-btn-outline">
            View Upcoming Drives
          </a>
        </div>

      </div>
    </section>
  );
};

export default Internship_Drives_Hero;