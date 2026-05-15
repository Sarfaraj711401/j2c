import React from "react";


const ML_WhySection = () => {
  return (
    <div className="why-section-wrapper">
      <div className="why-card">

        {/* LEFT TEXT COLUMN */}
        <div className="why-text-block">
          <h2>Why learn Machine Learning?</h2>

          <div className="reason-block">
            <div className="reason-title">
              High demand & career growth
            </div>
            <p className="reason-text">
              ML skills are in demand across industries like IT, finance,
              healthcare, e-commerce, and manufacturing. Roles such as ML
              Engineer, Data Scientist, and AI Engineer offer strong career
              growth and good salaries.
            </p>
          </div>

          <div className="reason-block">
            <div className="reason-title">
              Automates decision-making
            </div>
            <p className="reason-text">
              ML systems can analyze large amounts of data and make accurate
              predictions or decisions faster than humans, improving efficiency
              and productivity.
            </p>
          </div>

          <div className="reason-block mb-0">
            <div className="reason-title">
              Enhances problem-solving & logical thinking
            </div>
            <p className="reason-text">
              ML improves analytical thinking, statistics understanding, and
              programming skills, which are valuable in many tech roles.
            </p>
          </div>
        </div>

        {/* RIGHT VISUAL COLUMN */}
        <div className="why-visual-block">
          <div className="bg-blob"></div>

          <div className="floating-badge">
            <i className="fas fa-bolt"></i> Learn with AI tools
          </div>

          <div className="girl-img"></div>

          <div className="floating-icon like">
            <i className="fas fa-thumbs-up"></i>
          </div>

          <div className="floating-icon chart">
            <i className="fas fa-chart-line"></i>
          </div>

          <div className="floating-icon globe">
            <i className="fas fa-globe"></i>
          </div>

          <div className="floating-icon hash">
            <i className="fas fa-hashtag"></i>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ML_WhySection;