import React from "react";


function WebWhySection() {
  return (
    <div className="why-section-wrapper">
      <div className="why-card">

        {/* LEFT TEXT */}
        <div className="why-text-block">
          <h2>Why Learn Web Development?</h2>

          <div className="reason-block">
            <div className="reason-title">Stay Future-Ready</div>
            <p className="reason-text">
              AI is becoming a core part of modern websites—from chatbots and
              personalization to search and automation. Learning web development
              with AI prepares you for the future of tech jobs.
            </p>
          </div>

          <div className="reason-block">
            <div className="reason-title">
              Build Smarter Websites Faster
            </div>
            <p className="reason-text">
              AI tools help you generate code, debug faster, create content, and
              automate repetitive tasks—making you more productive as a developer.
            </p>
          </div>

          <div className="reason-block">
            <div className="reason-title">
              Higher Career Demand & Better Pay
            </div>
            <p className="reason-text">
              Developers with AI skills are in high demand. Combining web
              development with AI opens doors to advanced roles and better salary
              opportunities.
            </p>
          </div>
        </div>

        {/* RIGHT VISUAL */}
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
}

export default WebWhySection;