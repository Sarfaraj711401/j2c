import React from "react";
import "./Overview.css";

const AI_and_ML_Overview = () => {
  return (
    <section className="container overview-wrapper my-5">

      {/* MAIN TITLE */}
      <h2 className="overview-title text-center mb-4">
        Artificial Intelligence & Machine Learning - Overview
      </h2>

      {/* OVERVIEW PARAGRAPH */}
      <p className="overview-text">
        By 2035, Artificial Intelligence is expected to add over $15 trillion to the global economy, transforming industries from healthcare to autonomous vehicles and intelligent chatbots. As companies seek professionals who can build AI-driven solutions, analyze data, and drive innovation, learning AI and ML has become a must-have skill. JourneyToCareer’s Artificial Intelligence and Machine Learning course equips you with everything from foundational concepts to advanced topics like deep learning, NLP, and computer vision, while providing hands-on experience to create real-world AI solutions and jumpstart your career.{" "}
        
        <a href="#" className="overview-link">
          Artificial Intelligence & Machine Learning
        </a>, now is the time to take action!
      </p>

      {/* SUB TITLE */}
      <h3 className="overview-subtitle mt-5 mb-3">
        Artificial Intelligence & Machine Learning Online Course with AI Outline
      </h3>

      {/* COURSE OUTLINE TEXT */}
      <p className="overview-text">
        JourneyToCareer’s Artificial Intelligence & Machine Learning online course is designed to take you from the basics to advanced concepts with hands-on projects in every module. You’ll start with an introduction to AI and ML, learn Python programming and essential libraries, and master data preprocessing and analysis. The course covers supervised and unsupervised learning, deep learning with neural networks, natural language processing, and real-world AI applications across industries. You’ll also get hands-on experience with popular tools and frameworks like TensorFlow, PyTorch, Scikit-Learn, ChatGPT, YOLOv5, and gTTS. By the end of the course, you’ll complete a capstone project to showcase your skills in a future-ready portfolio, along with resume guidance, career mentorship, and placement support to kickstart your AI/ML career.
      </p>

    </section>
  );
};

export default AI_and_ML_Overview;