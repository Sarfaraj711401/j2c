import React from "react";
import "./Supply_Chain_mng_TopCareer.css";

const Supply_Chain_mng_TopCareer = () => {
  const data = [
    {
      img: "/images/assistant-store-manager.png.webp",
      title: "Assistant Store Manager",
      desc: "Supports store operations, supervises staff, manages inventory, and ensures excellent customer service."
    },
    {
      img: "/images/last-mile-executive.png.webp",
      title: "Last Mile Executive",
      desc: "Handles final delivery operations efficiently while improving customer satisfaction."
    },
    {
      img: "/images/delivery-fleet-executive.png.webp",
      title: "Delivery Fleet Executive",
      desc: "Manages delivery fleet operations ensuring safe and timely deliveries."
    },
    {
      img: "/images/store-manager.png.webp",
      title: "Store Manager",
      desc: "Oversees daily store operations, staff coordination, and inventory management."
    }
  ];

  return (
    <section className="career-sec">
      <h2 className="career-title-sec">
        Top career options in Supply Chain Logistics Management Placement Course
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

export default Supply_Chain_mng_TopCareer;