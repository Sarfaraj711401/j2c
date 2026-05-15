import React, { useState } from "react";


import user1 from "../assets/Sarfaraj_img.jpg";
import user2 from "../assets/Dipak_Mondal.jpg";
import user3 from "../assets/Face3.png";

const reviewsData = [
  {
    rating: "4.5",
    year: "Placed in 2025",
    title: "Beginner-Friendly Advanced Excel Course with Certification",
    text: "This Advanced Excel course is very beginner friendly and well structured. Concepts are explained clearly with practical examples.",
    name: "Sayan Bhaumik",
    college: "Sister Nivedita University",
    img: user1
  },
  {
    rating: "4.9",
    year: "Placed in 2025",
    title: "Building Confidence Through Practical Advanced Excel Training",
    text: "The hands-on training made this Advanced Excel course very effective. Real-world examples and projects helped me apply what I learned at work. The certification is a great addition to my professional profile.",
    name: "Saibal Jana",
    college: "Netaji Subhash Engineering College",
    img: user2
  },
    {
    rating: "5",
    year: "Placed in 2025",
    title: "A Complete Guide to Advanced Excel Tools and Techniques",
    text: "I really liked the AI-assisted Excel features covered in this course. It improved my productivity and data analysis skills. The course content is practical, and the certification adds credibility.",
    name: "Kaustur Kumar Shit",
    college: "Indian Institute of Technology,Patna",
    img: user3
  },
];

function Advanced_Review() {

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

export default Advanced_Review;