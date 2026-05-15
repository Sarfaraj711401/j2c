import React from "react";
import "./PlacedSlider.css";

const UI_UX_PlacedSlider = () => {
  const students = [
    {
      name: "Sarfaraj",
      img: "/images/Sarfaraj_img.jpg",
      company: "/images/marmeto.png",
    },
    {
      name: "Rahul",
      img: "/images/rahul.png",
      company: "/images/ideafoundation.png",
    },
    {
      name: "Dipak",
      img: "/images/Dipak_Mondal.jpg",
      company: "/images/algobulls.png",
    },
    {
      name: "Varis",
      img: "/images/varis.png",
      company: "/images/brimo.png",
    },
    {
      name: "Gaurav",
      img: "/images/gaurav.png",
      company: "/images/nurturelabs.png",
    },
    {
      name: "Aman",
      img: "/images/aman.png",
      company: "/images/hexadecimal.png",
    },
  ];

  // Duplicate for smooth infinite scroll
  const sliderData = [...students, ...students];

  return (
    <section className="placed-slider-section">
      <h2 className="placed-title">
        Our learners got placed. So can you!
      </h2>

      <div className="placed-slider-wrapper">
        <div className="placed-slider">
          {sliderData.map((item, index) => (
            <div className="placed-card" key={index}>
              <img
                src={item.img}
                alt={item.name}
                className="placed-img"
              />
              <h3>{item.name}</h3>
              <img
                src={item.company}
                alt="company"
                className="company-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UI_UX_PlacedSlider;