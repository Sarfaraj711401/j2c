import React from "react";
import "./Workshop_Hero.css";

const Workshop_Hero = () => {
  return (
    <header className="workshop-hero-header">
      <div className="workshop-hero-container">
        
        <div className="workshop-hero-text">
          <h1>College Training Workshop 2026</h1>
          <p>
            Hands-on training, real projects & industry exposure for students.
          </p>

          <a href="#apply" className="workshop-hero-btn">
            Apply Now
          </a>

          <div className="workshop-hero-rating">
            <span>⭐ 4.9 Rating</span>
            <span>🎓 7000+ Students</span>
            <span>🏫 300+ Colleges</span>
          </div>
        </div>

        <div className="workshop-hero-image">
          <img
            src="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
            alt="College Workshop"
          />
        </div>

      </div>
    </header>
  );
};

export default Workshop_Hero;