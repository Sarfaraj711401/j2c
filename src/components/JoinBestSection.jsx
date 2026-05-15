import React from "react";
import "./JoinBestSection.css";

const JoinBestSection = () => {
  return (
    <section className="pp-join-best-section">
      <div className="pp-join-best-card">
        
        <h1 className="pp-join-title">
          Join the Best. Be Recognized.
        </h1>

        <p className="pp-join-subtitle">
          Top performers get internships & rewards.
        </p>

        <div className="pp-join-image-box">
          <img
            src="/images/handshack-team.webp"
            alt="Successful partnership meeting"
            className="pp-join-image"
          />
        </div>

      </div>
    </section>
  );
};

export default JoinBestSection;