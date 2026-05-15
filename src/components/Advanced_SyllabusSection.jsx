import React from "react";
import "./SyllabusSection.css";

const syllabusData = [
  {
    title: "Advanced Excel Fundamentals",
    topics: [
      "Advanced formulas and functions",
      "Logical, text, date, and financial functions",
      "XLOOKUP, INDEX-MATCH",
      "Data validation and named ranges",
    ],
  },
  {
    title: "Data Analysis & Management",
    topics: [
      "Advanced sorting and filtering",
      "Conditional formatting (advanced)",
      "Pivot Tables and Pivot Charts",
      "Working with large datasets",
    ],
  },
  {
    title: "Power Query & Data Cleaning",
    topics: [
      "Importing data from multiple sources",
      "Data transformation and cleaning",
      "Merging and appending data",
      "Automating data preparation",
    ],
  },
  {
    title: "Data Visualization & Dashboards",
    topics: [
      "Advanced and dynamic charts",
      "Interactive dashboards",
      "Slicers and timelines",
      "KPI and MIS reports",
    ],
  },
  {
    title: "Excel Automation",
    topics: [
      "Macros basics",
      "Introduction to VBA",
      "Automating repetitive tasks",
      "Error handling",
    ],
  },
  {
    title: "Power Pivot & Data Modeling",
    topics: [
      "Data models in Excel",
      "Relationships between tables",
      "DAX basics",
      "Advanced calculations",
    ],
  },
  {
    title: "Excel with AI Tools",
    topics: [
      "AI features in Excel (Analyze Data / Ideas)",
      "AI-assisted forecasting and trends",
      "Using AI tools (ChatGPT) for formulas, analysis, and automation",
      "Smart insights and recommendations",
    ],
  },
  {
    title: "Projects & Case Studies",
    topics: [
      "Real-time Excel projects",
      "Dashboard development",
      "Automation project",
      "Industry-based case studies",
    ],
  },
];

const Advanced_SyllabusSection = () => {
  return (
    <section className="container syllabus-section my-5">
      
      <h2 className="syllabus-title text-center mb-5">
        Advanced Excel Course with AI – Syllabus
      </h2>

      <div className="row g-4">
        {syllabusData.map((module, index) => (
          <div className="col-md-6" key={index}>
            <div className="syllabus-card">
              <h5>
                <i className="bi bi-book"></i> {module.title}
              </h5>
              <ul>
                {module.topics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Advanced_SyllabusSection;