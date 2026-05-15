import React from "react";
import "./Career.css";

const Full_Stack_TopCareer = () => {
  const careers = [
    {
      title: "Full Stack Developer",
      desc: "Be a jack of all trades and create an entire website by yourself or manage teams who do!",
      img: "/images/Full Stack Development.jpg",
    },
    {
      title: "Software Development Engineer",
      desc: "Design, develop, and maintain software solutions.",
      img: "/images/Full_Stack_Software_Engineer.jpg",
    },
    {
      title: "Front-end Developer",
      desc: "Develop all the visual elements of a website that you see and interact with.",
      img: "/images/Full_Stack_front_end.jpg",
    },
    {
      title: "Back-end Developer",
      desc: "Manage the behind-the-scenes of a website and keep it running efficiently.",
      img: "/images/Full_Stack_back_end.avif",
    },
  ];

  return (
    <section className="career-section">
      <h2 className="career-title">
        Top career options in Full Stack Development Placement Course
      </h2>

      <div className="career-container">
        {careers.map((item, index) => (
          <div className="career-card" key={index}>
            <img
              src={item.img}
              alt={item.title}
              className="career-icon"
            />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Full_Stack_TopCareer;