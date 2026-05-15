import React, { useState } from "react";
import "./Reviews.css";

const reviewsData = [
  {
    rating: "4.5",
    year: "Placed in 2025",
    title: "Beginner Python Training: Quality Materials + 24hr Support",
    text: "The Python Training is perfect for beginners, featuring high-quality study materials and engaging assignments, with all queries promptly answered within 24 hours.",
    name: "Sk Sarfaraj",
    college: "Calcutta Institute Of Technology",
    img: "/images/Sarfaraj_img.jpg"
  },
  {
    rating: "4.9",
    year: "Placed in 2025",
    title: "Basics to advanced levels",
    text: "The Python training delivers industry-standard quality from basics to advanced levels, with highly specific modules and challenging quizzes that ensure mastery.",
    name: "Dipak Mondal",
    college: "Contai Polytechnic",
    img: "/images/Dipak_Mondal.jpg"
  },
  {
    rating: "5",
    year: "Placed in 2025",
    title: "Highly effective overall quality",
    text: "The Python training has been highly effective, with a narrative style and animated characters that make learning enjoyable and affordable.",
    name: "Rohit Rathor",
    college: "Kolaghat Engineering College",
    img: "/images/Fcae3.png"
  }
];

function Reviews() {
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
      <h2 className="review-title">Reviews from placed Students</h2>

      <div className="carousel-container">
        <div
          className="review-track"
          style={{ transform: `translateX(-${index * 400}px)` }}
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

export default Reviews;