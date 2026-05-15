import React from "react";
import "./VideoTestimonial.css";

import videoImg from "../assets/Youtub.avif";

const FinancialModeling_VideoTestimonial = () => {
  const handlePlay = () => {
    // You can replace this with modal / YouTube link
    alert("Play video clicked!");
  };

  return (
    <section className="video-section">
      <div className="testimonial-wrapper">

        {/* VIDEO THUMB */}
        <div className="video-thumb">
          <img src={videoImg} alt="Video Thumbnail" />
          <div className="play-btn" onClick={handlePlay}>
            ▶
          </div>
        </div>

        {/* TEXT CONTENT */}
        <div className="text-block">
          <span className="quote">❝</span>
          <h2>
            I landed a job even after a long career break!
          </h2>

          <p>
            Extremely practical syllabus, real-world projects, mock interviews & resume support helped me restart my journey confidently.
          </p>

          <p className="author">
            — <b>Sayan</b>, Software Developer
          </p>
        </div>

      </div>
    </section>
  );
};

export default FinancialModeling_VideoTestimonial;