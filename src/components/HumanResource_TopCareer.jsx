import React from "react";
import "./HumanResource_TopCareer.css";

const careers = [
  {
    img: "/images/Talent_Aquisting.jpg",
    title: "Talent Acquisition",
    desc: "Designed and implemented comprehensive strategies to attract, select, and secure elite talent for sustained growth.",
  },
  {
    img: "/images/HR_Generalist.jpg",
    title: "HR Generalist",
    desc: "Expertly handled comprehensive HR duties: recruitment, employee relations, benefits, and compliance for seamless operations.",
  },
  {
    img: "/images/HR_Operation.jpg",
    title: "HR Operations",
    desc: "Drove efficiency in HR through system design, payroll oversight, onboarding, and process optimization.",
  },
  {
    img: "/images/HR_Executive.jpg",
    title: "HR Executive",
    desc: "Handled everyday HR responsibilities, from employee data management to hiring support and policy adherence.",
  },
];

const HumanResource_TopCareer = () => {
  return (
    <section className="hr-career">
      <h2 className="hr-career__title">
        Top career options in Human Resource Management Course
      </h2>

      <div className="hr-career__container">
        {careers.map((item, index) => (
          <div className="hr-career__card" key={index}>
            <img src={item.img} alt={item.title} className="hr-career__icon" />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HumanResource_TopCareer;