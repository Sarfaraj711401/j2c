import React from "react";

const Digital_WhySection = () => {
  return (
    <div className="why-section-wrapper">
      <div className="why-card">
        
        {/* LEFT TEXT COLUMN */}
        <div className="why-text-block">
          <h2>Why learn Digital Marketing?</h2>

          <div className="reason-block">
            <div className="reason-title">Take your idea to millions</div>
            <p className="reason-text">
              Whether you have an app, blog, YouTube channel, or want to manage
              publicity for your college fest; digital marketing can help you
              reach millions!
            </p>
          </div>

          <div className="reason-block">
            <div className="reason-title">Be in demand</div>
            <p className="reason-text">
              Digital marketing is one of the hottest career options these days
              with thousands of internships and jobs being added everyday.
            </p>
          </div>

          <div className="reason-block">
            <div className="reason-title">Channel your creativity</div>
            <p className="reason-text">
              Whether you like numbers, or wordplay, or designing things;
              digital marketing offers a heady mix of creativity for everyone.
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

export default Digital_WhySection;