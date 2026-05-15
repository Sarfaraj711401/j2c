import React from "react";
import "./HumanResource_Skills.css";

const skills = [
  { icon: "👥", title: "Recruitment" },
  { icon: "🤝", title: "Onboarding" },
  { icon: "🏅", title: "HR Branding" },
  { icon: "📊", title: "HR Analytics" },
  { icon: "🔁", title: "Employee Engagement" },
  { icon: "🗂️", title: "HRIS" },
  { icon: "🧠", title: "Training & Development" },
  { icon: <i className="fa-brands fa-microsoft text-success"></i>, title: "Microsoft Excel" },
  { icon: <i className="fa-brands fa-openai text-primary"></i>, title: "ChatGPT" },
  { icon: <i className="fa-solid fa-q text-danger"></i>, title: "Zoho Recruit" },
  { icon: <i className="fa-solid fa-n text-primary"></i>, title: "Naukri" },
  { icon: <i className="fa-brands fa-linkedin text-primary"></i>, title: "LinkedIn" },
  { icon: <strong>G</strong>, title: "GreytHR" },
];

const HumanResource_Skills = () => {
  return (
    <section className="hr-skills">
      <div className="hr-skills__container">
        <h2 className="hr-skills__title">
          Skills and tools you will learn
        </h2>

        <div className="hr-skills__grid">
          {skills.map((skill, index) => (
            <div className="hr-skills__card" key={index}>
              <div className="hr-skills__icon">
                {typeof skill.icon === "string" ? skill.icon : skill.icon}
              </div>
              <div className="hr-skills__text">{skill.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HumanResource_Skills;