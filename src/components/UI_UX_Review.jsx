import React, { useState } from "react";
import "./Reviews.css";

const reviewsData = [
  {
    rating: "4.5",
    year: "Placed in 2025",
    title: "Transitioning from a B.Sc. background to a UI/UX intern at Scizers Technologies",
    text: "Despite a B.Sc. background, I selected this course for its affordability and flexibility, where clear lessons, hands-on projects, and resume support enabled me to secure a UI/UX internship at Scizers Technologies.",
    name: "Sk Sarfaraj",
    college: "UI/UX Designer",
    img: "/images/Sarfaraj_img.jpg"
  },
  {
    rating: "4.9",
    year: "Placed in 2025",
    title: "From Learning to Landing a Job",
    text: "The course proved informative with highly supportive instructors, and doubt-clearing sessions were invaluable, enabling me to easily secure a job using the gained knowledge and projects.",
    name: "Dipak Mondal",
    college: "UI/UX Designer",
    img: "/images/Dipak_Mondal.jpg"
  },
  {
    rating: "5",
    year: "Placed in 2025",
    title: "From Civil Engineering to UI/UX Success",
    text: "As a civil engineering graduate, I took a bold step into UI/UX; live and recorded classes, timely doubt resolution, and hands-on projects equipped me with the skills needed for placement.",
    name: "Rohit Rathor",
    college: "UI/UX Designer",
    img: "/images/Face3.png"
  }
];

function UI_UX_Review() {
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

export default UI_UX_Review;