import React from "react";
import "./Career.css";

const UI_UX_TopCareer = () => {
  const careers = [
    {
      title: "Product Designer",
      desc: "Combines UI, UX, and product thinking to design end-to-end digital products.",
      img: "/images/Product_UI_UX.jpg",
    },
    {
      title: "Interaction Designer",
      desc: "Designs user flows, micro-interactions, animations, and transitions.",
      img: "/images/Interaction_UI_UX.jpg",
    },
    {
      title: "UX Researcher",
      desc: "Conducts user interviews, surveys, usability tests, and data analysis.",
      img: "/images/UX_researcher.jpg",
    },
    {
      title: "Mobile App Designer (iOS/Android)",
      desc: "Designs mobile-first experiences following platform guidelines.",
      img: "/images/Mobile_ios.webp",
    },
    {
      title: "Freelance UI/UX Designer",
      desc: "Works independently with startups, agencies, and global clients.",
      img: "/images/Freelancer_UI_UX.jpg",
    },
    {
      title: "Design System Designer",
      desc: "Builds and maintains scalable design systems for large products.",
      img: "/images/System_Design.jpg",
    },
  ];

  return (
    <section className="career-section">
      <h2 className="career-title">
        Top career options in UI/UX Design Course
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

export default UI_UX_TopCareer;