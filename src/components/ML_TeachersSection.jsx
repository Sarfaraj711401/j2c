import React from "react";

const ML_TeachersSection = () => {
  return (
    <section className="container my-5 py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">

          {/* Section Heading */}
          <div className="text-center mb-5">
            <h2
              className="display-5 fw-bold mb-0"
              style={{
                color: "#1a1a1a",
                fontSize: "2.2rem",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Your Teachers
            </h2>

            <p
              className="lead mt-3 mb-0"
              style={{ color: "#666", fontSize: "1.1rem" }}
            >
              Meet our instructors with rich industry experience and passion for teaching
            </p>
          </div>

          {/* Instructors Cards Row */}
          <div className="row g-4 justify-content-center">

            {/* Anita Card */}
            <div className="col-lg-5 col-xl-5">
              <div
                className="instructor-card h-100 position-relative p-4 border-0 shadow-sm"
                style={{
                  background:
                    "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
                  borderRadius: "20px",
                  border: "1px solid #e9ecef",
                  height: "420px",
                  transition: "all 0.3s ease",
                  overflow: "hidden",
                }}
              >

                {/* Profile Image */}
                <div className="position-absolute top-0 start-0 p-4">
                  <img
                    src="/images/prince-sharma.jpg"
                    alt="Anita"
                    style={{ width: "80px", borderRadius: "50%" }}
                  />
                </div>

                {/* Content */}
                <div className="pt-5 mt-5">
                  <h4
                    className="fw-bold mb-2"
                    style={{ color: "#1a1a1a", fontSize: "1.3rem" }}
                  >
                    Anita
                  </h4>

                  <p
                    className="fw-semibold text-muted mb-3"
                    style={{ fontSize: "0.95rem" }}
                  >
                    Lead Instructor, Machine Learning
                  </p>

                  <p
                    className="text-dark mb-0"
                    style={{ fontSize: "0.92rem", lineHeight: "1.6" }}
                  >
                    Experienced and passionate trainer with a proven track record
                    of delivering high-impact, engaging training in Artificial
                    Intelligence and Data Science. With 3 years of experience, she
                    has worked as an AI Engineer in an IT company.
                  </p>
                </div>
              </div>
            </div>

            {/* Alok Card */}
            <div className="col-lg-5 col-xl-5">
              <div
                className="instructor-card h-100 position-relative p-4 border-0 shadow-sm"
                style={{
                  background:
                    "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
                  borderRadius: "20px",
                  border: "1px solid #e9ecef",
                  height: "420px",
                  transition: "all 0.3s ease",
                  overflow: "hidden",
                }}
              >

                {/* Profile Image */}
                <div className="position-absolute top-0 end-0 p-4">
                  <img
                    src="/Alok_image_new.jpg"
                    alt="Alok"
                    style={{ width: "80px", borderRadius: "50%" }}
                  />
                </div>

                {/* Content */}
                <div className="pt-5 mt-5">
                  <h4
                    className="fw-bold mb-2"
                    style={{ color: "#1a1a1a", fontSize: "1.3rem" }}
                  >
                    Alok
                  </h4>

                  <p
                    className="fw-semibold text-muted mb-3"
                    style={{ fontSize: "0.95rem" }}
                  >
                    Machine Learning Instructor
                  </p>

                  <p
                    className="text-dark mb-0"
                    style={{ fontSize: "0.92rem", lineHeight: "1.6" }}
                  >
                    Innovative Data Scientist with 11+ years of experience in
                    leveraging Data Science, Artificial Intelligence, and emerging
                    Agentic AI systems to solve complex business problems. Proven
                    track record of delivering impactful solutions in finance,
                    retail, healthcare, and technology. Formerly worked with TCS,
                    IBM and established edtech platforms.
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

export default ML_TeachersSection;