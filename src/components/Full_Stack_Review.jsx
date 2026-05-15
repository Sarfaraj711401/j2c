import React, { useState } from "react";
import "./Reviews.css";

const reviewsData = [
  {
    rating: "4.5",
    year: "Placed in 2025",
    title: "Course helped me crack an 18.5 LPA Job",
    text: "Awesome structured training, real projects & resume help changed my career.",
    name: "Uday Kalyan",
    college: "Senior Engineer, Dish Network",
    img: "/images/Sarfaraj_img.jpg"
  },
  {
    rating: "4.9",
    year: "Placed in 2025",
    title: "Got placed at my dream company",
    text: "Interview-ready projects + 1:1 mock interviews prepared me well.",
    name: "Toha Sayeed",
    college: "Software Engineer, Samsung",
    img: "/images/Dipak_Mondal.jpg"
  },
  {
    rating: "5",
    year: "Placed in 2025",
    title: "1:1 mentoring cleared doubts fast",
    text: "Best personalized help. Concepts became strong, confidence boosted.",
    name: "Gladson Routh",
    college: "Full Stack TA, Internshala",
    img: "/images/Face3.png"
  }
];

function Full_Stack_Review() {
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

export default Full_Stack_Review;