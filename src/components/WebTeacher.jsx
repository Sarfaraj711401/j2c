import React from "react";

const teachers = [
  {
    name: "Anita",
    role: "Web Developer",
    image: "/images/prince-sharma.jpg",
    description:
      "Anita has honed her expertise by working with a diverse range of clients, from startups to Fortune 1000 companies. She builds innovative, AI-powered web solutions that drive measurable impact and help learners excel in modern web development with AI.",
    position: "left",
  },
  {
    name: "Alok",
    role: "Developer",
    image: "/images/gourav-mehta.jpg",
    description:
      "Alok is a seasoned Web Development and AI professional with 11+ years of diverse experience at JourneyToCareer and Tech Mahindra. He has mentored over 6,000 learners and IT solutions, and founded a technology-driven training and solutions company focused on AI-powered web development, intelligent applications, and real-world project mentoring.",
    position: "right",
  },
];

const WebTeachers = () => {
  return (
    <section className="container my-5 py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">

          {/* Heading */}
          <div className="text-center mb-5">
            <h2 className="teacher-title">Your Teachers</h2>
            <p className="teacher-subtitle">
              Meet our instructors with rich industry experience and passion for teaching
            </p>
          </div>

          {/* Cards */}
          <div className="row g-4 justify-content-center">
            {teachers.map((teacher, index) => (
              <div className="col-lg-5 col-xl-5" key={index}>
                <div className="instructor-card">

                  {/* Image */}
                  <div
                    className={`image-wrapper ${
                      teacher.position === "right" ? "right" : "left"
                    }`}
                  >
                    <img src={teacher.image} alt={teacher.name} />
                  </div>

                  {/* Content */}
                  <div className="card-content">
                    <h4>{teacher.name}</h4>
                    <p className="role">{teacher.role}</p>
                    <p className="desc">{teacher.description}</p>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WebTeachers;