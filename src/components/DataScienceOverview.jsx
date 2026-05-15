import React from "react";

const DataScienceOverview = () => {
  return (
    <section className="container overview-wrapper my-5">

      {/* MAIN TITLE */}
      <h2 className="overview-title text-center mb-4">
        Data Science Course - Overview
      </h2>

      {/* OVERVIEW PARAGRAPH */}
      <p className="overview-text">
        Did you know that the demand for skilled data science professionals is growing rapidly across industries 
        such as IT, healthcare, finance, and e-commerce? With the integration of AI into analytics tools, decision-making 
        is becoming faster and more accurate than ever—making Data Science with AI one of the most in-demand career skills today.{" "}
        <a href="#" className="overview-link">Data Science</a>, now is the time to take action!
      </p>

      <p className="overview-text">
        Kickstart your future in analytics with JourneyToCareer’s Data Science Course with AI. Powered by the Government of India
        through NSDC (National Skill Development Corporation) & Skill India, this program equips learners with advanced data science 
        and AI-driven tools to build a successful career in the data analytics and machine learning industry.
      </p>

      {/* SUB TITLE */}
      <h3 className="overview-subtitle mt-5 mb-3">
        Data Science Online Course with AI Outline
      </h3>

      {/* COURSE OUTLINE TEXT */}
      <p className="overview-text">
        JourneyToCareer’s Data Science online certification course is designed to help you become a skilled data science professional by covering a wide 
        range of essential concepts and real-world applications. The initial modules focus on building strong foundations in Python programming, data 
        handling, statistics, and exploratory data analysis to ensure you clearly understand how to work with structured and unstructured data.
      </p>

      <p className="overview-text">
        The next phase of the course dives into advanced topics such as SQL for data management, machine learning algorithms, data visualization,
        business intelligence tools, and predictive modeling techniques. You will learn how to analyze large datasets, build intelligent models, and create 
        interactive dashboards that follow{" "}
        <a href="#" className="overview-link">industry standards</a>.
      </p>

      <p className="overview-text">
        Towards the end of the program, you will explore AI-powered data science tools and automation techniques that help streamline data workflows, 
        improve model accuracy, and optimize business decision-making. You will also gain exposure to modern AI platforms and real-world use cases to 
        enhance productivity, build job-ready projects, and stay ahead of emerging trends in the data science industry.
      </p>

    </section>
  );
};

export default DataScienceOverview;