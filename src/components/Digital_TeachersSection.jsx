import React from "react";

const Digital_TeachersSection = () => {
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
                  background: "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
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
                    src="images/prince-sharma.jpg"
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
                    Lead Instructor, Digital Marketing
                  </p>

                  <p
                    className="text-dark mb-0"
                    style={{ fontSize: "0.92rem", lineHeight: "1.6" }}
                  >
                    Anita has honed his expertise working with a diverse range of clients,
                    from startups to Fortune 1000 companies. He drives innovative digital
                    marketing strategies that deliver measurable growth and help individuals
                    excel in their digital marketing endeavors.
                  </p>
                </div>
              </div>
            </div>

            {/* Alok Card */}
            <div className="col-lg-5 col-xl-5">
              <div
                className="instructor-card h-100 position-relative p-4 border-0 shadow-sm"
                style={{
                  background: "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
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
                    src="images/gourav-mehta.jpg"
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
                    Digital Marketing Instructor
                  </p>

                  <p
                    className="text-dark mb-0"
                    style={{ fontSize: "0.92rem", lineHeight: "1.6" }}
                  >
                    Alok is a seasoned Digital Marketing professional with 11+ years of diverse
                    experience at JourneyToCareer & Tech Mahindra. Having mentored over 6000 IT
                    solutions, he founded a content, analytics, and training company that thrives
                    on digital marketing audits, mentoring startups, and impactful storytelling.
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

export default Digital_TeachersSection;