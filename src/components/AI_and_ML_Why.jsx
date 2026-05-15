import React from "react";
import "./AI_and_ML_Why.css";

import aiLearning from "../assets/AI_Learning.jpg";
import placementImg from "../assets/AI_Placement_Support.jpg";
import toolsImg from "../assets/AI_Tools.jpg";

const AI_and_ML_Why = () => {
  return (
    <>

      {/* WHY LEARN AI AND ML */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">

            {/* Left Content */}
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">
                Why learn Artificial Intelligence and Machine Learning?
              </h2>

              <h5 className="fw-semibold">
                Master the skills the world is in demand for
              </h5>
              <p className="text-muted">
                AI/ML is transforming every industry. This course equips you with the technology driving the jobs of tomorrow.
              </p>

              <h5 className="fw-semibold mt-4">
                Get hands-on experience with cutting-edge tools
              </h5>
              <p className="text-muted">
                Master the tools powering top companies worldwide: ChatGPT for language, gTTS for voice, and YOLOv5 for vision.
              </p>

              <h5 className="fw-semibold mt-4">
                Build a portfolio that prepares you for the future
              </h5>
              <p className="text-muted">
                Work on real-world projects in every module to showcase your AI expertise in action.
              </p>
            </div>

            {/* Right Image */}
            <div className="col-lg-6 text-center">
              <img src={aiLearning} className="img-fluid rounded-4" alt="AI Learning" />
            </div>

          </div>
        </div>
      </section>

      {/* PLACEMENT ASSISTANCE */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center flex-lg-row-reverse">

            {/* Right Content */}
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">
                Get End-to-End Placement Assistance?
              </h2>

              <h5 className="fw-semibold">
                Complimentary Placement Preparation Training
              </h5>
              <p className="text-muted">
                Learn to craft a strong resume, write impactful applications, and confidently succeed in interviews.
              </p>

              <h5 className="fw-semibold mt-4">
                Curated Internship and Job Opportunities
              </h5>
              <p className="text-muted">
                Receive curated internship and fresher job opportunities directly in your inbox, tailored to your preferences.
              </p>

              <h5 className="fw-semibold mt-4">
                Showcase your profile and get noticed on JourneyToCareer
              </h5>
              <p className="text-muted">
                Top performers will get special visibility in internship and job applications on JourneyToCareer.
              </p>
            </div>

            {/* Left Image */}
            <div className="col-lg-6 text-center">
              <img src={placementImg} className="img-fluid rounded-4" alt="Placement Support" />
            </div>

          </div>
        </div>
      </section>

      {/* AI TOOLS SECTION */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">

            {/* Left Content */}
            <div className="col-lg-6">
              <div className="d-flex align-items-center mb-3">
                <h2 className="fw-bold mb-0">
                  How does this course future-proof your tech career with cutting-edge AI tools?
                </h2>
                <span className="badge bg-primary ms-3">NEW</span>
              </div>

              <h5 className="fw-semibold mt-4">ChatGPT</h5>
              <p className="text-muted">
                Design and build intelligent, responsive AI chat systems powered by OpenAI’s advanced conversational engine.
              </p>

              <h5 className="fw-semibold mt-4">Google Text-to-Speech</h5>
              <p className="text-muted">
                Enable your applications to speak by converting text into natural-sounding audio with seamless multilingual support.
              </p>
            </div>

            {/* Right Image */}
            <div className="col-lg-6 text-center">
              <img src={toolsImg} className="img-fluid rounded-4" alt="AI Tools" />
            </div>

          </div>
        </div>
      </section>

    </>
  );
};

export default AI_and_ML_Why;