import React from "react";
import "./UI_UX_Certificate.css";

const HumanResource_Certificate = () => {
  const certificates = [
    {
      title: "Trainings certificate",
      desc: "Upon successful completion of the program, you will receive a Human Resource Course certificate from PCS GLOBAL.",
      img: "/images/Tranningcrt.jpg",
    },
    {
      title: "NSDC & Skill India certificate",
      desc: "Also, receive a certificate from NSDC (National Skill Development Corporation) and Skill India.",
      img: "/images/NSDC.jpg",
    },
  ];

  return (
    <section className="certificate-section">
      <h2 className="cert-title">
        Industry-recognized & government approved Human Resource Course Certification
      </h2>

      <div className="cert-grid">
        {certificates.map((item, index) => (
          <div className="cert-box" key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <img
              src={item.img}
              alt={item.title}
              className="cert-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HumanResource_Certificate;