import React, { useState } from "react";
import "./Reviews.css";

const reviewsData = [
  {
    rating: "4.5",
    year: "Placed in 2025",
    title: "Hands-on and Practical",
    text: "Curriculum is perfect for beginners. Highly recommended for job seekers.",
    name: "Sk Sarfaraj",
    college: "Data Analysts",
    img: "/images/Sarfaraj_img.jpg"
  },
  {
    rating: "4.9",
    year: "Placed in 2025",
    title: "From banking aspirant to Flipkart",
    text: "Amazing course! The projects really helped me understand Data Science.",
    name: "Dipak Mondal",
    college: "Data Analysts",
    img: "/images/Dipak_Mondal.jpg"
  },
  {
    rating: "5",
    year: "Placed in 2025",
    title: "Mock interviews helped",
    text: "Placement support is excellent. Mock interviews boosted my confidence.",
    name: "Rohit Rathor",
    college: "Data Analystsr",
    img: "/images/Face3.png"
  }
];

function Data_Science_Review() {
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

export default Data_Science_Review;