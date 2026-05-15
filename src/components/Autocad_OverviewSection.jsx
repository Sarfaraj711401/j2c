import React from "react";

const Autocad_OverviewSection = () => {
  return (
    <section className="container overview-wrapper my-5">

      {/* MAIN TITLE */}
      <h2 className="overview-title text-center mb-4">
        AutoCAD Course with AI - Overview
      </h2>

      {/* OVERVIEW PARAGRAPH */}
      <p className="overview-text">
        Did you know that the demand for skilled CAD professionals is growing rapidly across engineering, architecture, 
        and interior design industries? With the integration of AI in design software, productivity and accuracy are 
        increasing like never before, making with AI one of the most in-demand career skills today.{" "}
        <a href="#" className="overview-link">AutoCAD</a>, now is the time to take action!
      </p>

      <p className="overview-text">
        Kickstart your future in design with JourneyToCareer’s AutoCAD Course with AI. Powered by the Government of India through
        NSDC (National Skill Development Corporation) & Skill India, this course equips students with advanced AutoCAD and AI-based 
        tools to build a successful career in the CAD industry.
      </p>

      {/* SUB TITLE */}
      <h3 className="overview-subtitle mt-5 mb-3">
        AutoCAD Online Course with AI Outline
      </h3>

      {/* COURSE OUTLINE TEXT */}
      <p className="overview-text">
        JourneyToCareer’s AutoCAD online certification course covers a wide range of concepts that will help you become a skilled CAD professional.
        The initial modules focus on understanding the AutoCAD interface, basic drawing tools, layers, blocks, and precise dimensioning techniques
        to build strong drafting fundamentals.
      </p>

      <p className="overview-text">
        The next lessons cover advanced 2D drafting and 3D modeling concepts such as layouts, plotting, rendering, parametric design, and industry-specific
        workflows for Civil, Electrical, and Interior projects. These modules also teach how to create professional drawings that meet{" "}
        <a href="#" className="overview-link">industry standards</a>.
      </p>

      <p className="overview-text">
        Towards the end of the course, you will explore AI-powered AutoCAD features and smart design tools that automate repetitive tasks, detect errors, 
        and improve drawing accuracy. You will also gain exposure to modern AI tools used in the CAD industry to boost productivity and stay ahead of current design trends.
      </p>

    </section>
  );
};

export default Autocad_OverviewSection;