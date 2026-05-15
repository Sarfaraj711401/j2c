import React, { useState } from "react";


import user1 from "../assets/Sarfaraj_img.jpg";
import user2 from "../assets/Dipak_Mondal.jpg";
import user3 from "../assets/Face3.png";

const reviewsData = [
  {
    rating: "4.5",
    year: "Placed in 2025",
    title: "A Perfect Blend of Data Science & AI for Career Growth",
    text: "This Data Science with AI course gave me a solid foundation in data analytics and practical AI tools like Python, Machine Learning, and Neural Networks. The curriculum was well-structured, and real-world projects helped me build confidence. Instructors explained complex concepts clearly. If you’re serious about a career in Data Science and AI, this course is worth it!",
    name: "Kartik Das",
    college: "Haldia Institute of Technology",
    img: user1
  },
  {
    rating: "4.9",
    year: "Placed in 2025",
    title: "A Smooth and Supportive Entry into the World of AI",
    text: "As someone new to coding and data, this course was amazing! It started with basics like statistics and Python before moving into AI and deep learning. Every module had hands-on labs which made learning fun and not overwhelming. Support from mentors was quick and helpful. Highly recommend for beginners!",
    name: "Suman Hazra",
    college: "Chandigarh University",
    img: user2
  },
    {
    rating: "5",
    year: "Placed in 2025",
    title: "Hands-On Training That Prepares You for Real Jobs",
    text: "This is a good data science + AI course with detailed modules and useful tools like TensorFlow and Scikit-Learn. The assignments were challenging in a good way, though some topics could use more examples. Overall I learned a lot and feel confident applying for jobs, but be ready to put in dedicated time.",
    name: "Akash Bera",
    college: "Narula Institute of Technology",
    img: user3
  },
];

function DataScience_Review() {

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

export default DataScience_Review;