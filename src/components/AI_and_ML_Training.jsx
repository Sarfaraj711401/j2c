import React from "react";
import "./TrainingSection.css";

const AI_and_ML_Training = () => {
  return (
    <section className="training-section-wrapper">
      <div className="training-card">

        {/* HEADER */}
        <div className="training-header">
          <h2 className="training-title">
            How will your training work?
          </h2>
        </div>

        {/* GRID */}
        <div className="training-grid">

          {/* Step 1 */}
          <div className="training-step">
            <div className="step-icon">
              <i className="fas fa-play-circle"></i>
            </div>
            <h3 className="step-title">
              Learn concepts videos to learn
            </h3>
            <p className="step-description">
              1-1 doubt solved through QA form within{" "}
              <span className="step-highlight">24hrs</span>
            </p>
          </div>

          {/* Step 2 */}
          <div className="training-step">
            <div className="step-icon">
              <i className="fas fa-tasks"></i>
            </div>
            <h3 className="step-title">
              Test your knowledge through quizzes
            </h3>
            <p className="step-description">
              & module tests regularly
            </p>
          </div>

          {/* Step 3 */}
          <div className="training-step">
            <div className="step-icon">
              <i className="fas fa-hands-helping"></i>
            </div>
            <h3 className="step-title">
              Hands-on practice
            </h3>
            <p className="step-description">
              do projects
            </p>
          </div>

          {/* Step 4 */}
          <div className="training-step">
            <div className="step-icon">
              <i className="fas fa-comments"></i>
            </div>
            <h3 className="step-title">
              1-1 doubt solving by experts
            </h3>
            <p className="step-description">
              through Q&A form within{" "}
              <span className="step-highlight">24hrs</span>
            </p>
          </div>

          {/* Step 5 */}
          <div className="training-step">
            <div className="step-icon">
              <i className="fas fa-clipboard-check"></i>
            </div>
            <h3 className="step-title">
              Complete training by taking the
            </h3>
            <p className="step-description">
              <span className="step-highlight">final exam</span>
            </p>
          </div>

          {/* Step 6 */}
          <div className="training-step">
            <div className="step-icon">
              <i className="fas fa-certificate"></i>
            </div>
            <h3 className="step-title">
              Get certified in Artificial Intelligence and Machine Learning
            </h3>
            <p className="step-description">
              upon successful{" "}
              <span className="step-highlight">completion</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AI_and_ML_Training;