import React from "react";
import "./Teachers.css";

const teachers = [
  {
    name: "Anita",
    role: "Lead Instructor",
    image: "/images/prince-sharma.jpg",
    align: "start",
    description:
      "Anita has honed her expertise delivering the Programming with Python course certification to a diverse range of students, from complete beginners to experienced developers. She drives innovative Python training strategies that deliver measurable skill growth and help individuals excel in their programming careers.",
  },
  {
    name: "Alok",
    role: "Python Developer",
    image: "/images/gourav-mehta.jpg",
    align: "end",
    description:
      "Alok is a seasoned Python programming expert with 11+ years of diverse experience at JourneyToCareer & Tech Mahindra. Having mentored over 6000 aspiring developers, he founded a content, coding, and training company that thrives on Python code audits, mentoring startups, and impactful programming storytelling.",
  },
];

const Teachers = () => {
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
              <div key={index} className="col-lg-5 col-xl-5">
                <div className="instructor-card">

                  {/* Image */}
                  <div className={`profile-img ${teacher.align}`}>
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

export default Teachers;