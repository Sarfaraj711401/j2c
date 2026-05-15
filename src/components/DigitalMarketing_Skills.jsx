import React from "react";
import "./DigitalMarketing_Skills.css";

const skills = [
  { icon: "fa-clipboard-list", title: "Content Strategy & Development" },
  { icon: "fa-google", title: "Google Ads", brand: true },
  { icon: "fa-meta", title: "Meta Ads", brand: true },
  { icon: "fa-envelope-open-text", title: "Email Marketing" },
  { icon: "fa-share-nodes", title: "Social Media Marketing" },
  { icon: "fa-magnifying-glass-chart", title: "SEO" },
  { icon: "fa-wordpress", title: "WordPress", brand: true },
  { icon: "fa-chart-line", title: "Google Analytics 4" },
  { icon: "fa-openai", title: "ChatGPT", brand: true },
];

const DigitalMarketing_Skills = () => {
  return (
    <section className="dm-skills">
      <div className="dm-skills__container">
        <h2 className="dm-skills__title">Skills and tools you will learn</h2>

        <div className="dm-skills__grid">
          {skills.map((skill, index) => (
            <div className="dm-skills__card" key={index}>
              <div className="dm-skills__icon">
                <i
                  className={`fa-${skill.brand ? "brands" : "solid"} ${skill.icon}`}
                ></i>
              </div>
              <h5>{skill.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketing_Skills;