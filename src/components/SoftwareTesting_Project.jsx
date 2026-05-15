import React from "react";
import "./Product_Mng_Project.css";

const SoftwareTesting_Project = () => {
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
          <h3>Build a YouTube Clone</h3>
          <p>
           Create a YouTube-like platform using the MERN stack, featuring user authentication, video management, and a responsive UI.
          </p>
        </div>

        {/* Card 2 */}
        <div className="rw-project-card">
          <div className="rw-project-header">
            <img src="/images/Financial_Statement_Img.png" alt="icon" width="40" />
          </div>
          <h3>Your Personal Portfolio Website</h3>
          <p>
            Create a personal portfolio website using HTML and CSS to effectively showcase your skills, projects, achievements, and contact information.
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

export default SoftwareTesting_Project;