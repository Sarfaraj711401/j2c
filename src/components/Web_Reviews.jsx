import React, { useState } from "react";
import "./Web_Reviews.css";

import user1 from "../assets/Sarfaraj_img.jpg";
import user2 from "../assets/Dipak_Mondal.jpg";
import user3 from "../assets/Face3.png";

const reviewsData = [
  {
    rating: "4.5",
    year: "Placed in 2025",
    title: "From Beginner to Confident Web Developer",
    text: "I started this web development course as a complete beginner, and within a short time, I was confidently connecting concepts and building interesting real-world projects—highly recommended for anyone eager to learn web development.",
    name: "Sk Sarfaraj",
    college: "Calcutta Institute Of Technology",
    img: user1
  },
  {
    rating: "4.9",
    year: "Placed in 2025",
    title: "A Training Experience That Truly Impresses",
    text: "The web development training content was excellent, and the instructor was highly knowledgeable. All my questions were answered promptly during the course, and I am thoroughly impressed with the overall training.",
    name: "Dipak Mondal",
    college: "Contai Polytechnic",
    img: user2
  },
    {
    rating: "5",
    year: "Placed in 2025",
    title: "Hands-On Training That Delivers Results",
    text: "The training was engaging and interactive, with an excellent balance of theory and hands-on practice. The instructor explained every concept clearly, and the final project enabled me to build my first full-fledged website.",
    name: "Swastik Roy",
    college: "Brainware University",
    img: user3
  },
];

function Web_Reviews() {

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < reviewsData.length - 1) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="reviews-section">

      <h2 className="review-title">
        Reviews from placed Students
      </h2>

      <div className="carousel-container">
        <div
          className="review-track"
          style={{
            transform: `translateX(-${index * 408}px)`
          }}
        >
          {reviewsData.map((review, i) => (
            <div className="review-card" key={i}>

              <div className="review-top">
                <span className="rating-badge">★ {review.rating}</span>
                <span className="placed-tag">{review.year}</span>
              </div>

              <h3>{review.title}</h3>
              <p className="review-text">{review.text}</p>

              <div className="review-user">
                <img src={review.img} alt="user" className="review-img" />
                <div className="user-details">
                  <span className="user-name">{review.name}</span>
                  <span className="linkedin-icon">in</span>
                  <p>{review.college}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* CONTROLS */}
      <div className="review-controls">

        <div className="arrow-round" onClick={prevSlide}>
          &#10094;
        </div>

        <div className="dots">
          {reviewsData.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
            ></span>
          ))}
        </div>

        <div className="arrow-round" onClick={nextSlide}>
          &#10095;
        </div>

      </div>

    </section>
  );
}

export default Web_Reviews;