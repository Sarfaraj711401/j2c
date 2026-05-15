import React from "react";
import "./ForEmployer_Features.css";

const ForEmployer_Features = () => {
  return (
    <section className="femp-feature-section">
      <div className="femp-feature-inner">

        {/* LEFT */}
        <div className="femp-feature-left">

          <div className="femp-feature-card">
            <div style={{ flex: 1 }}>
              <div className="femp-feature-title">
                AI-powered Smart Shortlisting
              </div>
              <div className="femp-feature-desc">
                Quickly filter relevant profiles with AI Interviews and AI Screener
              </div>
            </div>
          </div>

          <div className="femp-feature-list">

            <div className="femp-row">
              <div className="femp-dot"></div>
              <div>
                <div className="femp-row-title">
                  Intelligent Candidate Database
                </div>
                <div className="femp-row-desc">
                  Access to 32 Mn+ candidates and get the best matches
                </div>
              </div>
            </div>

            <div className="femp-row">
              <div className="femp-dot"></div>
              <div>
                <div className="femp-row-title">
                  Advanced Hiring Tools
                </div>
                <div className="femp-row-desc">
                  Instantly chat with candidates, send assignments, schedule interviews and more.
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT */}
        <div className="femp-feature-right">

          {/* AI Screener */}
          <div className="femp-feature-box">
            <div className="femp-box-header">AI Screener</div>

            <div className="femp-box-content">
              <div className="femp-card-mini">
                <div className="femp-mini-title">AI Resume Match: Excellent</div>
                <div className="femp-mini-desc">Candidate Details...</div>
              </div>

              <div className="femp-card-mini">
                <div className="femp-mini-title">AI Resume Match: Moderate</div>
                <div className="femp-mini-desc">Candidate Details...</div>
              </div>
            </div>
          </div>

          {/* AI Interviewer */}
          <div className="femp-feature-box">
            <div className="femp-box-header">AI Interviewer</div>

            <div className="femp-box-content">
              <div className="femp-video-box">▶</div>

              <p className="femp-score"><b>9/10</b> Excellent Score</p>
              <p className="femp-overview">Overview...</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ForEmployer_Features;