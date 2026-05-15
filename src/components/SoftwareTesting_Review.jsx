import React, { useState } from "react";
import "./Reviews.css";

const reviewsData = [
  {
    rating: "4.5",
    year: "Placed in 2025",
    title: "Excellent learning experience",
    text: "I recently completed the software testing course and had an excellent experience. The instructor covered both theory and practical aspects well.",
    name: "Nirbhay",
    college: "Senior Engineer",
    img: "/images/Sarfaraj_img.jpg"
  },
  {
    rating: "4.9",
    year: "Placed in 2025",
    title: "Understood concept even without a tech backround",
    text: "I learned a lot about software testing, and the basics were explained really well. This training is great even for non-technical students like me.",
    name: "Abhishek",
    college: "Software Engineer, Samsung",
    img: "/images/Dipak_Mondal.jpg"
  },
  {
    rating: "5",
    year: "Placed in 2025",
    title: "Covers all software testing concepts",
    text: "The training was really helpful, covering all the essential topics, basics of software testing, automation concepts, and more. It gave me a clear understanding of the field.",
    name: "Amrutha",
    college: "Software Tester",
    img: "/images/Face3.png"
  }
];

function SoftwareTesting_Review() {
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

export default SoftwareTesting_Review;