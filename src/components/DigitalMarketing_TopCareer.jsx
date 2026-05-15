import React from "react";
import "./Supply_Chain_mng_TopCareer.css";

const DigitalMarketing_TopCareer = () => {
  const data = [
    {
      img: "/images/E-commerce_DG.jpg",
      title: "E-Commerce Manager",
      desc: "Boosts e-commerce revenue via smart strategies, product tweaks, and potent digital marketing."
    },
    {
      img: "/images/Marketing_Analysis.jpg",
      title: "Marketing Analyst",
      desc: "Love marketing's creativity and numbers' precision? Combine them now!"
    },
    {
      img: "/images/Content_Development.webp",
      title: "Content Development",
      desc: "Develop captivating, data-backed, AI-powered materials to educate and engage audiences on digital channels."
    },
    {
      img: "/images/Content_Marketer.avif",
      title: "Content Marketer",
      desc: "Harness writing prowess to influence customers and achieve measurable success."
    }
  ];

  return (
    <section className="career-sec">
      <h2 className="career-title-sec">
        Top career options in Digital Marketing Placement Course
      </h2>

      <div className="career-grid">
        {data.map((item, index) => (
          <div className="career-card-sec" key={index}>
            <img src={item.img} alt={item.title} className="career-icon-sec" />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DigitalMarketing_TopCareer;