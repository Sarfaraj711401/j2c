import React from "react";
import "./ProjectsSection.css";

// import images
import foodApp from "../assets/Food_Delivery.png";
import fintech from "../assets/wallet-money-fintech-icon-vector-21833224.webp";
import aiResume from "../assets/AI_Powered_BY_Icon.jpeg";

const UI_UX_ProjectsSection = () => {
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
            <img src={foodApp} width="80" alt="Food App" />
          </div>

          <h3>Food Delivery App UI/UX Redesign</h3>
          <p>
            Redesigned Food Delivery App UI/UX for intuitive navigation and enhanced user satisfaction.
          </p>
        </div>

        {/* Card 2 */}
        <div className="project-card">
          <div className="project-header">
            <img src={fintech} width="80" alt="Fintech" />
          </div>

          <h3>FinTech Wallet & Expense Tracker</h3>
          <p>
            Designed FinTech Wallet & Expense Tracker UI/UX with intuitive dashboards for secure transactions and effortless expense categorization.
          </p>
        </div>

        {/* Card 3 */}
        <div className="project-card active-card">
          <div className="project-header">
            <img src={aiResume} width="80" alt="AI Resume" />
          </div>

          <h3>AI-Powered Resume Builder UI</h3>
          <p>
            Designed AI-Powered Resume Builder UI/UX for streamlined, intelligent tailoring and one-click professional formatting.
          </p>
        </div>

      </div>

      {/* Disclaimer */}
      <p className="disclaimer">
        <b>Disclaimer:</b> Projects have been built leveraging real publicly available data
        sets from organisations.
      </p>

      {/* Dots */}
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

export default UI_UX_ProjectsSection;