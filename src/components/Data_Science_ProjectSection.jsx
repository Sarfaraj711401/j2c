import React from "react";
import "./ProjectsSection.css";

const Data_Science_ProjectSection = () => {
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
            <img src="images/swiggy-logo.png" alt="Swiggy" width="80" />
          </div>
          <h3>Customer Sentiment Analysis</h3>
          <p>
            Build a sentiment analysis model and use Python packages for web
            scraping, data preprocessing, and transformation. Visualise customer
            satisfaction insights and sentiment patterns using Power BI.
          </p>
        </div>

        {/* Card 2 */}
        <div className="project-card">
          <div className="project-header">
            <img src="images/amazon.png" alt="Amazon" width="80" />
          </div>
          <h3>Social Media Analytics for Branding</h3>
          <p>
            Leverage Excel for data extraction, cleaning, and analysis of social
            media metrics to uncover brand insights and optimize marketing
            strategies.
          </p>
        </div>

        {/* Card 3 */}
        <div className="project-card active-card">
          <div className="project-header">
            <img src="images/netflix-transparen.webp" alt="Netflix" width="80" />
          </div>
          <h3>Retail Customer Retention Analytics</h3>
          <p>
            Design interactive Power BI dashboard to analyze customer journey,
            purchase patterns, and retention trends. Implement data modeling,
            DAX, and dynamic visuals.
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

export default Data_Science_ProjectSection;