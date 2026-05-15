import React from "react";
import "./DigitalMarketing_Project.css";

const DigitalMarketing_Project = () => {
  return (
    <div className="projects-section">
      <h2>Build real-world projects</h2>
      <p className="sub-heading">
        Designed to help you gain industry-relevant skills
      </p>

      <div className="projects-container">

        {/* Card 1 */}
        <div className="project-card active-card">
          <div className="project-header">
            <img src="/images/Social_img_Growth.jpg" alt="Social Media" width="80" />
          </div>
          <h3>Expert in Social Media Strategy, Growth, and Engagement</h3>
          <p>
            Craft brand-specific social media strategies with eye-catching visuals
            and 4-month growth roadmaps.
          </p>
        </div>

        {/* Card 2 */}
        <div className="project-card">
          <div className="project-header">
            <img src="/images/Google_Ads.png" alt="Google Ads" width="80" />
          </div>
          <h3>Delivering measurable success with Google Ads mastery</h3>
          <p>
            Managed end-to-end Google Ads campaigns in targeted SEM projects for
            optimal results.
          </p>
        </div>

      </div>

      <p className="disclaimer">
        <b>Disclaimer:</b> Projects have been built leveraging real publicly
        available data sets from organisations.
      </p>

      <div className="slider-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default DigitalMarketing_Project;