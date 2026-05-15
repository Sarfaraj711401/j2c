import React from "react";
import "./UI_UX_Skills.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFigma,
  faGoogle,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLightbulb,
  faChartLine,
  faStickyNote,
  faClipboardCheck,
  faLayerGroup,
  faTh,
  faSitemap,
  faDraftingCompass,
  faCogs,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const UI_UX_Skills = () => {
  const skills = [
    { name: "Figma", icon: faFigma, class: "figma" },
    { name: "Design Thinking", icon: faLightbulb, class: "design-thinking" },
    { name: "Product Thinking", icon: faChartLine, class: "product-thinking" },
    { name: "Notion", icon: faStickyNote, class: "notion" },
    { name: "Usability Testing", icon: faClipboardCheck, class: "usability" },
    { name: "Visual Hierarchy", icon: faLayerGroup, class: "visual-hierarchy" },
    { name: "Google Workspace", icon: faGoogle, class: "google-workspace" },
    { name: "Prototyping", icon: faTh, class: "prototype" },
    { name: "Behance", icon: faBehance, class: "behance" },
    { name: "Information Architecture", icon: faSitemap, class: "info-architecture" },
    { name: "Wireframing", icon: faDraftingCompass, class: "wireframing" },
    { name: "Design Systems", icon: faCogs, class: "design-systems" },
    { name: "Collaboration & Handoff", icon: faUsers, class: "collab" },
  ];

  return (
    <section className="uiux-skills-page"> {/* ✅ NEW WRAPPER */}

      <div className="skills-grid">
        <div className="skills-container">

          <div className="section-title">
            <h2>Master UI/UX Design Skills</h2>
            <p>
              Learn industry-standard tools and methodologies used by top designers worldwide
            </p>
          </div>

          <div className="skills-row">
            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <div className={`skill-icon ${skill.class}`}>
                  <FontAwesomeIcon icon={skill.icon} />
                </div>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};

export default UI_UX_Skills;