import React from "react";
import "./AI_and_ML_Training.css";

import anitaImg from "../assets/Debamitra.png";
import alokImg from "../assets/Alok_Haldar.jpg";

const AI_and_ML_Teachers = () => {
  return (
    <section className="container my-5 py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">

          {/* Section Heading */}
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-0 main-heading">
              Your Teachers
            </h2>
            <p className="lead mt-3 mb-0 sub-heading">
              Meet our instructors with rich industry experience and passion for teaching
            </p>
          </div>

          {/* Instructors Cards */}
          <div className="row g-4 justify-content-center">

            {/* Anita Card */}
            <div className="col-lg-5 col-xl-5">
              <div className="instructor-card h-100 position-relative p-4">

                {/* Image */}
                <div className="img-left">
                  <img src={anitaImg} alt="Anita" />
                </div>

                {/* Content */}
                <div className="content pt-5 mt-5">
                  <h4 className="fw-bold mb-2">Anita</h4>
                  <p className="fw-semibold text-muted mb-3">
                    Lead Instructor, Professor of Machine Learning
                  </p>

                  <p className="text-dark mb-0">
                    As a Professor of Machine Learning, I am dedicated to educating and mentoring students in the design, development, and application of intelligent algorithms that learn from data to solve complex, real-world problems. My teaching philosophy emphasizes a strong foundation in mathematical principles, statistical modeling, and computational techniques, combined with hands-on experience in implementing machine learning models using state-of-the-art tools and frameworks.
                  </p>
                </div>

              </div>
            </div>

            {/* Alok Card */}
            <div className="col-lg-5 col-xl-5">
              <div className="instructor-card h-100 position-relative p-4">

                {/* Image */}
                <div className="img-right">
                  <img src={alokImg} alt="Alok" />
                </div>

                {/* Content */}
                <div className="content pt-5 mt-5">
                  <h4 className="fw-bold mb-2">Alok</h4>
                  <p className="fw-semibold text-muted mb-3">
                    Professor of Artificial Intelligence and Machine Learning
                  </p>

                  <p className="text-dark mb-0">
                    As a professor of Artificial Intelligence and Machine Learning, I am committed to advancing the understanding and application of cutting-edge technologies that are transforming every aspect of our world. My work focuses on teaching students how to design intelligent systems, analyze complex data, and develop machine learning models that solve real-world problems.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AI_and_ML_Teachers;