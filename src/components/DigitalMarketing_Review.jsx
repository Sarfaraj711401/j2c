import React, { useState } from "react";
import "./Reviews.css";

const reviewsData = [
  {
    rating: "4.5",
    year: "Placed in 2025",
    title: "I’ve been successfully placed, backed by outstanding placement support",
    text: "The teaching approach was highly effective and equipped me with practical, job-ready skills, while the instructors and placement team guided me through resume building, interview preparation, and LinkedIn optimization, ultimately helping me secure a job.",
    name: "Sk Sarfaraj",
    college: "Digital Marketing Executive, Webiniser",
    img: "/images/Sarfaraj_img.jpg"
  },
  {
    rating: "4.9",
    year: "Placed in 2025",
    title: "Started my professional journey in influencer marketing, laying a strong foundation for a growth-focused career",
    text: "Pursued the Digital Marketing Placement Course to gain essential skills; the unexpected win was landing a job and diving into influencer marketing.",
    name: "Dipak Mondal",
    college: "Influencer Marketing, Razor Pod",
    img: "/images/Dipak_Mondal.jpg"
  },
  {
    rating: "5",
    year: "Placed in 2025",
    title: "Landed a job right after finishing the course—zero downtime to career launch.",
    text: "Enrolled to learn marketing for my startup dreams; placement was unplanned but a welcome win.",
    name: "Rohit Rathor",
    college: "Soft Skills Trainer, Kapable",
    img: "/images/Face3.png"
  }
];

function DigitalMarketing_Review() {
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

export default  DigitalMarketing_Review;