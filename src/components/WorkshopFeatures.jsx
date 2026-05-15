import React from "react";
import "./WorkshopFeatures.css";

const WorkshopFeatures = () => {
  return (
    <>
      {/* WHY JOIN */}
      <section className="workshop-section">
        <div className="workshop-container">
          <h2>Why Join This Workshop?</h2>
          <p className="workshop-desc">Designed for real career impact</p>

          <div className="workshop-cards">
            <div className="workshop-card">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" alt="" />
              <h3>Industry-Level Skills</h3>
              <p>Learn tools & technologies used by professionals.</p>
            </div>

            <div className="workshop-card">
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df" alt="" />
              <h3>Recognized Certificate</h3>
              <p>Strengthen your resume with proof of skills.</p>
            </div>

            <div className="workshop-card">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978" alt="" />
              <h3>Career Support</h3>
              <p>Guidance for internships & placements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO */}
      <section className="workshop-section workshop-light">
        <div className="workshop-container">
          <h2>Who Are We Looking For?</h2>
          <p className="workshop-desc">Motivated college students</p>

          <div className="workshop-cards">
            <div className="workshop-card">
              <img src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b" alt="" />
              <p>Students from any stream</p>
            </div>

            <div className="workshop-card">
              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b" alt="" />
              <p>Eager to learn & grow</p>
            </div>

            <div className="workshop-card">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" alt="" />
              <p>Basic computer knowledge</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkshopFeatures;