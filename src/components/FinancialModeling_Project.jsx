import React from "react";
import "./Product_Mng_Project.css";

const FinancialModeling_Project = () => {
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
            <img src="/images/Financial_Youtub_img.svg" alt="icon" width="40" />
            <span className="rw-tag">Capstone Project</span>
          </div>
          <h3>Build Financial Model</h3>
          <p>
           Build a comprehensive financial model for Tata Motors using Excel, linking financial statements and utilizing key functions for analysis.
          </p>
        </div>

        {/* Card 2 */}
        <div className="rw-project-card">
          <div className="rw-project-header">
            <img src="/images/Financial_Statement_Img.png" alt="icon" width="40" />
          </div>
          <h3>Financial Statement Analysis</h3>
          <p>
            Perform an in-depth financial statement analysis of Hindustan Unilever, focusing on the income statement, balance sheet, and cash flow statement.
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

export default FinancialModeling_Project;