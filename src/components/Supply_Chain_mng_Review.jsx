import React, { useState } from "react";
import "./Reviews.css";

const reviewsData = [
  {
    rating: "4.5",
    year: "Placed in 2025",
    title: "Gained right skills and got placed",
    text: "My journey with J2C proved truly transformative; the course stood out as thoughtfully structured, placement support excelled, and I landed a role early while honing the precise skills my position required.",
    name: "Sk Sarfaraj",
    college: "Senior Associate - Category Governance, Zepto",
    img: "/images/Sarfaraj_img.jpg"
  },
  {
    rating: "4.3",
    year: "Placed in 2025",
    title: "Got placed in Blinkit",
    text: "The J2C course impressed with its well-structured format, featuring regular modules and engaging weekend mentor-led sessions. Doubt resolution proved swift and effective, backed by responsive support through email and calls. J2C further excelled by offering multiple placement opportunities directly via its platform.",
    name: "Dipak Mondal",
    college: "Fleet Operations Lead, Blinkit",
    img: "/images/Dipak_Mondal.jpg"
  },
  {
    rating: "5",
    year: "Placed in 2025",
    title: "Structured course and support helped me get placed",
    text: "The J2C course captivated with its engaging, meticulously organized structure and hands-on practical experience. Instructors provided exceptional guidance, while the support team delivered swift, responsive assistance. Overall, it crafted an enriching, transformative learning journey.",
    name: "Gladson Routh",
    college: "Senior Associate - Category Governance, Zepto",
    img: "/images/Face3.png"
  }
];

function Supply_Chain_mng_Review() {
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

export default Supply_Chain_mng_Review;