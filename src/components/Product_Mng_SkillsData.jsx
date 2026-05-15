import React from "react";

const skillsData = [
  { name: "Product Strategy", img: "/images/product-strategy.png.webp" },
  { name: "Problem Solving", img: "/images/problem-solving.png.webp" },
  { name: "Design Thinking", img: "/images/design-thinking.png.webp" },
  { name: "Jira", img: "/images/jira.png.webp" },
  { name: "Prioritization", img: "/images/prioritization.png.webp" },
  { name: "Data Analysis", img: "/images/data-analysis.png.webp" },
  { name: "Latest gen AI tools", img: "/images/AI_tool.png.webp" },
  { name: "ChatGPT", img: "/images/chatgpt.png.webp" },
];

const Product_Mng_SkillsData = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="mb-4 fw-bold">Skills and tools you will learn</h2>

        <div className="row g-4">
          {skillsData.map((skill, index) => (
            <div className="col-md-4" key={index}>
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body d-flex align-items-center">
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="me-3"
                    style={{ width: "52px", height: "52px" }}
                  />
                  <h5 className="mb-0">{skill.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Product_Mng_SkillsData;