import React from "react";
import "./Supply_Chain_mng_Project.css";

const Supply_Chain_mng_Project = () => {
  return (
    <section className="projects-section-custom">
      <h2>Build real-world projects</h2>
      <p className="sub-heading">
        Designed to help you gain industry-relevant skills
      </p>

      <div className="projects-container-custom">

        {/* Card 1 */}
        <div className="project-card-custom active-card">
          <div className="project-header">
            <img src="images/zepto.png.webp" alt="zepto" width="60" />
          </div>

          <h3>Zepto Problem Study</h3>
          <p>
            During Navratri, Zepto faced a surge in delivery times. Root cause
            analysis revealed packing delays and traffic. AI routing, rider
            bonuses, and forecasting help restore service.
          </p>
        </div>

        {/* Card 2 */}
        <div className="project-card-custom">
          <div className="project-header">
            <img src="images/instamart.png" alt="instamart" width="60" />
          </div>

          <h3>Data Analysis In Excel</h3>
          <p>
            Analysis of Swiggy dark store metrics and Mahindra Logistics routes
            to identify trends and improve efficiency using Excel.
          </p>
        </div>

        {/* Card 3 */}
        <div className="project-card-custom">
          <div className="project-header">
            <img src="images/bigbasket.png.webp" alt="bigbasket" width="80" />
          </div>

          <h3>Rider Motivation</h3>
          <p>
            Incentive plan rollout caused rider dissatisfaction. Focus on
            stakeholder communication and resolution strategy.
          </p>
        </div>

      </div>

      <p className="disclaimer-custom">
        <b>Disclaimer:</b> Projects are built using publicly available datasets.
      </p>

      <div className="slider-dots-custom">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
};

export default Supply_Chain_mng_Project;