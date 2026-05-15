import React from "react";
import "./VideoTestimonial.css";

import videoImg from "../assets/Youtub.avif";

const Data_Science_VideoTestimonial = () => {
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
            Successfully secured a new job after a long career break!
          </h2>

          <p>
            The practical syllabus, real-world projects, mock interviews, and resume support enabled a confident career restart
          </p>

          <p className="author">
            — <b>Vishal</b>, Data Analysts
          </p>
        </div>

      </div>
    </section>
  );
};

export default Data_Science_VideoTestimonial;