import React, { useState } from "react";
import "./Benefits.css";

const UI_UX_Benefits = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const benefitsData = [
    {
      title: "AI-driven practice interviews",
      desc: "Elevate your resume and get personalized 1:1 resume vetting sessions."
    },
    {
      title: "Get IS Boost worth ₹12,000 for FREE",
      desc: "Increase your visibility on Internshala by 5x with unlimited profile boosts."
    },
    {
      title: "Access to top brands and high-paying roles",
      desc: "Apply to opportunities reserved only for Placement Course learners."
    }
  ];

  return (
    <section className="benefits-section">
      <div className="benefits-wrapper">

        {/* Left Content */}
        <div className="benefits-left">
          <h2 className="benefits-title">
            Unlock Exclusive Placement Benefits
            <span className="exclusive-badge">Exclusive</span>
          </h2>

          <p className="benefits-subtitle">
            Unlock a world of opportunities and start your journey to success –
            we assure you a secure career with our placement benefits!
          </p>

          {benefitsData.map((item, index) => (
            <div
              key={index}
              className={`benefit-card ${
                activeIndex === index ? "benefit-highlight" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}

          <p className="benefits-note">
            To know more about terms and conditions,{" "}
            <a href="#">click here.</a>
          </p>
        </div>

        {/* Right Image */}
        <div className="benefits-right">
          <img
            src="/images/Exclusive.webp"
            alt="exclusive benefits"
            className="benefits-img"
          />
        </div>

      </div>
    </section>
  );
};

export default UI_UX_Benefits;