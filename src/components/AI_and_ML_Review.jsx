import React from "react";
import "./AI_and_ML_Review.css";

const AI_and_ML_Review = () => {
  return (
    <section className="ai-projects-section py-5">
      <div className="container">

        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">
            Artificial Intelligence and Machine Learning Training Projects Details
          </h2>
        </div>

        {/* Cards Row */}
        <div className="row g-4">

          {/* Card 1 */}
          <div className="col-lg-4 col-md-6">
            <div className="project-card h-100">
              <h4 className="project-title">
                Conversational AI Systems: Building Intelligent Assistants with ChatGPT
              </h4>
              <div className="title-underline"></div>
              <p className="project-desc">
                Design and develop a real-time conversational AI interface using Python and the ChatGPT API. This project enables programmatic prompt handling and response generation, facilitating seamless two-way communication between applications and advanced language models.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-4 col-md-6">
            <div className="project-card h-100">
              <h4 className="project-title">
                Build Multilingual Text-to-Speech Applications
              </h4>
              <div className="title-underline"></div>
              <p className="project-desc">
                Design and develop a real-time multilingual voice system using Python that translates English text into multiple languages and converts it into clear, natural speech. This project demonstrates how to chain AI models to build intelligent applications such as virtual assistants and accessibility tools.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-4 col-md-6">
            <div className="project-card h-100">
              <h4 className="project-title">
                YOLOv5-Driven Autonomous Vehicles: Advancing Perception Through Deep Learning
              </h4>
              <div className="title-underline"></div>
              <p className="project-desc">
                Design and implement an intelligent object detection system using YOLOv5 for autonomous vehicles. The system identifies pedestrians, vehicles, and road obstacles in real time, enabling safer and more efficient navigation, even on edge and embedded devices.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AI_and_ML_Review;