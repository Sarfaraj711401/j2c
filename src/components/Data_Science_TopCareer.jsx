import React from "react";
import "./Career.css";

const Data_Science_TopCareer = () => {
  return (
    <section className="career-section">

      <h2 className="career-title">
        Top career options in Data Science Placement Course
      </h2>

      <div className="career-container">

        <div className="career-card">
          <img src="/images/image1.jpg" alt="Data Scientist" className="career-icon" />
          <h3>Data Scientist</h3>
          <p>Analyze data, build models and drive business decisions.</p>
        </div>

        <div className="career-card">
          <img src="/images/image6.webp" alt="Data Analyst" className="career-icon" />
          <h3>Data Analyst</h3>
          <p>Convert raw data into actionable insights.</p>
        </div>

        <div className="career-card">
          <img src="/images/image3.png" alt="ML Engineer" className="career-icon" />
          <h3>Machine Learning Engineer</h3>
          <p>Build and deploy intelligent ML systems.</p>
        </div>

        <div className="career-card">
          <img src="/images/image4.png" alt="Business Analyst" className="career-icon" />
          <h3>Business Analyst</h3>
          <p>Bridge the gap between data and business strategy.</p>
        </div>

        <div className="career-card">
          <img src="/images/image2.jpg" alt="Data Engineer" className="career-icon" />
          <h3>Data Engineer</h3>
          <p>Design scalable data pipelines and systems.</p>
        </div>

        <div className="career-card">
          <img src="/images/image5.jpg" alt="AI Engineer" className="career-icon" />
          <h3>AI Engineer</h3>
          <p>Create AI-powered products and solutions.</p>
        </div>

      </div>

    </section>
  );
};

export default Data_Science_TopCareer;