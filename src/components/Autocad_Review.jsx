import React, { useState } from "react";


import user1 from "../assets/Sarfaraj_img.jpg";
import user2 from "../assets/Dipak_Mondal.jpg";
import user3 from "../assets/Face3.png";

const reviewsData = [
  {
    rating: "4.5",
    year: "Placed in 2025",
    title: "Excellent Course on AutoCAD at j2c",
    text: "The AutoCAD learning videos were highly interactive. Alok Sir was excellent, and whenever I had a doubt, he responded very quickly. This was my first AutoCAD class at j2c, and it turned out to be a truly unique and rewarding experience. I wasn’t sure what to expect initially, but I am extremely satisfied with the way the course was conducted. The instructors were highly knowledgeable and maintained a comfortable learning pace. They communicated effectively with all participants and ensured that everyone’s doubts were clearly resolved. I would definitely recommend j2c to others as the best AutoCAD institute, and I look forward to attending more CAD training programs with them in the future.",
    name: "Soumen Jana",
    college: "Sister Nivedita University",
    img: user1
  },
  {
    rating: "4.9",
    year: "Placed in 2025",
    title: "It was a humble beginning that led to a confident completion of AutoCAD",
    text: "I am very happy to be a student of Wizcrafter Training Institution. The test papers are conducted efficiently, and the faculty provides excellent training. The classes have increased my interest in the subject, and the teachers are always ready to clear our doubts. I truly enjoyed the AutoCAD in Electrical course. This program helped me visualize every 3D object and learn how to draw them using the software. As a result, my confidence has grown significantly. Thank you to Wizcrafter, the mentors, and finally Autodesk for offering such a wonderful course.",
    name: "Sayan kar",
    college: "Narula Institute of Technologyc",
    img: user2
  },
    {
    rating: "5",
    year: "Placed in 2025",
    title: "Best CAD Training Institute",
    text: "I explored several coaching institutes online before choosing j2c, and I am truly thankful to them for providing such an excellent learning experience in Interior AutoCAD. The institute is a great place to learn software related to Civil, Architecture, and Interior Design such as AutoCAD, Revit Architecture, and 3ds Max. The mentors are highly qualified, and the facilities are more than sufficient for learning and practice. The faculty members give ample time for hands-on training and always clear any remaining doubts. The mentors are extremely supportive and helpful. Overall, if you are searching for the best CAD training institute, I strongly recommend j2c. For my AutoCAD course experience, I am giving a 5-star rating.⭐⭐⭐⭐⭐",
    name: "Rohit Gupta",
    college: "Junior Talent Acquisition Specialist",
    img: user3
  },
];

function Autocad_Review() {

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

export default Autocad_Review;