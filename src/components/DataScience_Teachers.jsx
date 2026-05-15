import React from "react";

const DataScience_Teachers = () => {
  return (
    <section className="container my-5 py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">

          {/* Section Heading */}
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-0 section-title">
              Your Teachers
            </h2>
            <p className="lead mt-3 mb-0 section-subtitle">
              Meet our instructors with rich industry experience and passion for teaching
            </p>
          </div>

          {/* Instructors Cards Row */}
          <div className="row g-4 justify-content-center">

            {/* Anita Card */}
            <div className="col-lg-5 col-xl-5">
              <div className="instructor-card h-100 position-relative p-4">

                {/* Profile Image */}
                <div className="position-absolute top-0 start-0 p-4">
                  <img
                    src="images/prince-sharma.jpg"
                    alt="Anita"
                    className="instructor-img"
                  />
                </div>

                {/* Content */}
                <div className="pt-5 mt-5">
                  <h4 className="fw-bold mb-2">Anita</h4>
                  <p className="fw-semibold text-muted mb-3">
                    Lead Instructor, Digital Marketing
                  </p>

                  <p className="text-dark mb-0 instructor-text">
                    Anita has honed his expertise working with a diverse range of clients, from 
                    startups to Fortune 1000 companies. He drives innovative digital marketing strategies 
                    that deliver measurable growth and help individuals excel in their digital marketing endeavors.
                  </p>
                </div>

              </div>
            </div>

            {/* Alok Card */}
            <div className="col-lg-5 col-xl-5">
              <div className="instructor-card h-100 position-relative p-4">

                {/* Profile Image */}
                <div className="position-absolute top-0 end-0 p-4">
                  <img
                    src="images/gourav-mehta.jpg"
                    alt="Alok"
                    className="instructor-img"
                  />
                </div>

                {/* Content */}
                <div className="pt-5 mt-5">
                  <h4 className="fw-bold mb-2">Alok</h4>
                  <p className="fw-semibold text-muted mb-3">
                    Digital Marketing Instructor
                  </p>

                  <p className="text-dark mb-0 instructor-text">
                    Alok is a seasoned Digital Marketing professional with 11+ years of diverse 
                    experience at JourneyToCareer & Tech Mahindra. Having mentored over 6000 IT solutions, 
                    he founded a content, analytics, and training company that thrives on digital 
                    marketing audits, mentoring startups, and impactful storytelling.
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

export default DataScience_Teachers;