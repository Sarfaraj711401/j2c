import React from "react";
import "./Overview.css";

const Overview = () => {
  return (
    <section className="container overview-wrapper my-5">

      {/* MAIN TITLE */}
      <h2 className="overview-title text-center mb-4">
        Python Course with AI - Overview
      </h2>

      {/* OVERVIEW PARAGRAPH */}
      <p className="overview-text">
        Did you know the $15+ billion Python software industry is projected to triple by 2035? 
        This explosive growth will drive up Python developer salaries, making it one of today's 
        most sought-after tech careers. If you're considering a programming career, now's the perfect time to start{" "}
        <a href="#" className="overview-link">python</a>, now is the time to take action!
      </p>

      <p className="overview-text">
        Kickstart your future in Python programming with JourneyToCareer’s Programming with Python course with AI. 
        Powered by the government of India through the NSDC (National Skill Development Corporation) & Skill India, 
        this course aims to equip students with the requisite knowledge and skills to pursue a successful career in Python development.
      </p>

      {/* SUB TITLE */}
      <h3 className="overview-subtitle mt-5 mb-3">
        Python Online Course with AI Outline
      </h3>

      {/* COURSE OUTLINE */}
      <p className="overview-text">
        JourneyToCareer’s Programming with Python online certification course covers a wide range of topics and concepts 
        that will help you become an expert Python developer. The initial lessons will teach you Python fundamentals 
        and how to use essential libraries to build successful programming projects.
      </p>

      <p className="overview-text">
        The next modules will cover important concepts related to data analysis, web frameworks, machine learning, 
        & automation. You will also learn about Python libraries like Pandas and Flask which will help you earn 
        industry-recognized Python certifications. This can add a strong edge to your resume when you apply for programming roles{" "}
        <a href="#" className="overview-link">python jobs</a>.
      </p>

      <p className="overview-text">
        Toward the end of the course, you will learn about advanced Python libraries and the latest programming trends 
        (like AI integration and automation). You will also gain insights about cutting-edge AI tools like TensorFlow, 
        PyTorch, Hugging Face, LangChain, OpenAI API, and Streamlit for building intelligent applications.
      </p>

    </section>
  );
};

export default Overview;