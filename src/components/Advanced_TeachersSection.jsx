import React from "react";

const Advanced_TeachersSection = () => {
  return (
    <section className="container my-5 py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">

          {/* Section Heading */}
          <div className="text-center mb-5">
            <h2 className="teachers-heading">
              Your Teachers
            </h2>
            <p className="teachers-subtext">
              Meet our instructors with rich industry experience and passion for teaching
            </p>
          </div>

          {/* Cards Row */}
          <div className="row g-4 justify-content-center">

            {/* Zoya Card */}
            <div className="col-lg-5 col-xl-5">
              <div className="instructor-card">

                {/* Image */}
                <div className="img-left">
                  <img
                    src="/images/prince-sharma.jpg"
                    alt="Zoya"
                  />
                </div>

                {/* Content */}
                <div className="card-content">
                  <h4>Zoya</h4>
                  <p className="role">
                    Lead Instructor, Advanced Excel
                  </p>

                  <p className="desc">
                    Experienced and passionate trainer with a proven track
                    record of delivering high-impact, engaging training in
                    Artificial Intelligence and Data Science. With 5 years
                    of experience, she has worked as an AI Engineer in an
                    IT company.
                  </p>
                </div>
              </div>
            </div>

            {/* Alok Card */}
            <div className="col-lg-5 col-xl-5">
              <div className="instructor-card">

                {/* Image */}
                <div className="img-right">
                  <img
                    src="/Alok_image_new.jpg"
                    alt="Alok"
                  />
                </div>

                {/* Content */}
                <div className="card-content">
                  <h4>Alok</h4>
                  <p className="role">
                    Machine Learning Instructor
                  </p>

                  <p className="desc">
                    Innovative Data Scientist with 11+ years of experience
                    in leveraging Data Science, Artificial Intelligence,
                    and emerging Agentic AI systems to solve complex business
                    problems. Formerly worked with TCS, IBM and edtech platforms.
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

export default Advanced_TeachersSection;