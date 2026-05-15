import React from "react";
import "./Staffing_Service.css";

const Staffing_Service = () => {
  return (
    <section className="services-section">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="section-title">Comprehensive Hiring Models</h2>
          <p className="section-subtitle">
            We don't just send resumes; we deliver results.
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4">

          {/* Card 1 */}
          <div className="col-md-4">
            <div className="service-card h-100">

              <div className="icon-box blue">
                💼
              </div>

              <h3>Permanent Staffing</h3>

              <p>
                Find long-term employees who align with your company culture.
                We handle screening, technical rounds, and background checks.
              </p>

              <a href="#" className="service-link">
                Learn more →
              </a>

            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div className="service-card h-100">

              <div className="icon-box orange">
                ⏱️
              </div>

              <h3>Contract & Temp</h3>

              <p>
                Scale your team up or down instantly. Perfect for seasonal
                projects or short-term requirements without payroll hassle.
              </p>

              <a href="#" className="service-link">
                Learn more →
              </a>

            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className="service-card h-100">

              <div className="icon-box purple">
                🏢
              </div>

              <h3>Campus Hiring</h3>

              <p>
                Access India's largest college network. We organize drives,
                hackathons, and internship programs to find fresh talent.
              </p>

              <a href="#" className="service-link">
                Learn more →
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Staffing_Service;