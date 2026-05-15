import React, { useState } from "react";
import "./Reviews.css";

const reviewsData = [
  {
    rating: "4.5",
    year: "Placed in 2025",
    title: "Secured a full-time role as Associate Product Manager",
    text: "This course helped me build the right skills and grab the right opportunity. I landed an internship with the help of projects and placement support that turned into a full-time role as APM at Emotorad.",
    name: "Sk Sarfaraj",
    college: "Associate Product Manager, Emotorad",
    img: "/images/Sarfaraj_img.jpg"
  },
  {
    rating: "4.9",
    year: "Placed in 2025",
    title: "Landed the right role with strong fundamentals",
    text: "The course helped me stay on top of my work by solidifying core concepts and expectations. It took time to find the right opportunity, but now I'm enjoying my role at Talview.",
    name: "Dipak Mondal",
    college: "Product Manager, Talview",
    img: "/images/Dipak_Mondal.jpg"
  },
  {
    rating: "5",
    year: "Placed in 2025",
    title: "Expert guidance made all the difference",
    text: "The course was properly structured. The instructor were very supportive and encouraged us to connect on LinkedIn for doubts and career advice. Their mentorship truly helped shape my learning and career direction.",
    name: "Gladson Routh",
    college: "Product Intern, Supreme Components International",
    img: "/images/Face3.png"
  }
];

function Product_Mng_Review() {
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

export default Product_Mng_Review;