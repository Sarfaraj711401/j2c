import React, { useState } from "react";
import "./Reviews.css";

const reviewsData = [
  {
    rating: "4.5",
    year: "Placed in 2025",
    title: "I got placed right after completing the course and successfully converted it into a full-time role",
    text: "Gained practical experience managing recruitment, payroll, and developing company policies. Secured an HR Intern role at Secora right after completing the HR Placement Course.",
    name: "Sk Sarfaraj",
    college: "HR Associate, Secora",
    img: "/images/Sarfaraj_img.jpg"
  },
  {
    rating: "4.9",
    year: "Placed in 2025",
    title: "Secured a position in a reputed HR firm immediately after completing the course",
    text: "With 2 years in HR but lacking clarity, this course built my solid foundation and soft skills. Now thriving as an HR Associate, it's transformed my work.",
    name: "Dipak Mondal",
    college: "HR Associate",
    img: "/images/Dipak_Mondal.jpg"
  },
  {
    rating: "5",
    year: "Placed in 2025",
    title: "Confidently transitioned from marketing to HR, gaining the skills and clarity needed for success.",
    text: "Smoothly transitioned from marketing to HR with this affordable course, which spanned basics to advanced topics, boosted my confidence, and secured my role as Talent Acquisition Trainee.",
    name: "Rohit Rathor",
    college: "Junior Talent Acquisition Specialist",
    img: "/images/Face3.png"
  }
];

function HumanResource_Review() {
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

export default HumanResource_Review;