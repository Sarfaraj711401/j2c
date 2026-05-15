import React, { useState } from "react";


import user1 from "../assets/Sarfaraj_img.jpg";
import user2 from "../assets/Dipak_Mondal.jpg";
import user3 from "../assets/Face3.png";

const reviewsData = [
  {
    rating: "4.5",
    year: "Placed in 2025",
    title: "Beginner-Friendly Digital Marketing Course with Certification",
    text: "JourneyToCareer’s Digital Marketing Online Course with Certificate is the perfect starting point for beginners to explore today’s digital world. The course is divided into well-structured topics that are simple to understand and easy to apply in real-life scenarios.",
    name: "Sk Sarfaraj",
    college: "Calcutta Institute Of Technology",
    img: user1
  },
  {
    rating: "4.9",
    year: "Placed in 2025",
    title: "Building Confidence Through Practical Digital Marketing Traininge",
    text: "The Digital Marketing training program offered by JourneyToCareer has been one of the best learning experiences I've had. The content was well-structured, and the hands-on assignments after each chapter greatly enhanced my understanding and boosted my confidence.",
    name: "Dipak Mondal",
    college: "Contai Polytechnic",
    img: user2
  },
    {
    rating: "5",
    year: "Placed in 2025",
    title: "A Complete Guide to Digital Marketing Tools and Techniques",
    text: "This training is packed with essential digital marketing tools, tips, and techniques that every aspiring marketer should master before stepping into the digital world.",
    name: "Rohit Rathor",
    college: "Brainware University",
    img: user3
  },
];

function Digital_AI_Review() {

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

export default Digital_AI_Review;