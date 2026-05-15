import React from "react";
import "./Product_Mng_Project.css";

const Product_Mng_Project = () => {
  return (
    <div className="rw-projects-section">
      <h2>Build real-world projects</h2>
      <p className="rw-sub-heading">
        Designed to help you gain industry-relevant skills
      </p>

      <div className="rw-projects-container">

        {/* Card 1 */}
        <div className="rw-project-card rw-active-card">
          <div className="rw-project-header">
            <img src="/images/product_portfolio.png" alt="icon" width="40" />
            <span className="rw-tag">Capstone Project</span>
          </div>
          <h3>Build for Bharat Challenge</h3>
          <p>
            Choose any popular foreign app and build your own Indian version.
            Submit a working prototype and showcase your journey across six
            product management phases.
          </p>
        </div>

        {/* Card 2 */}
        <div className="rw-project-card">
          <div className="rw-project-header">
            <img src="/images/product_portfolio.png" alt="icon" width="40" />
          </div>
          <h3>Build your own Product</h3>
          <p>
            Build your own product incorporating the 6 phases of product
            management you have learned in this course.
          </p>
        </div>

      </div>

      <p className="rw-disclaimer">
        <b>Disclaimer:</b> Projects have been built leveraging real publicly
        available data sets from organisations.
      </p>

      <div className="rw-slider-dots">
        <span className="rw-dot rw-active"></span>
        <span className="rw-dot"></span>
        <span className="rw-dot"></span>
        <span className="rw-dot"></span>
        <span className="rw-dot"></span>
      </div>
    </div>
  );
};

export default Product_Mng_Project;