import React from "react";
import "./PlacementReady.css";

const UI_UX_PlacementReady = () => {
  return (
    <section className="placement-ready-section">
      <div className="pr-card">
        
        {/* Left Image */}
        <div className="pr-left">
          <img
            src="/images/banner-2.gif"
            alt="placement ready"
            className="pr-img"
          />
        </div>

        {/* Right Content */}
        <div className="pr-right">
          <h2 className="pr-title">
            Become <span className="blue">placement-ready</span>
          </h2>

          <p className="pr-desc">
            Prepare to ace your placements with our career coaches, having 10+ years of
            experience. Say goodbye to placement anxiety!
          </p>

          <div className="pr-features">
            
            <div className="pr-box">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4228/4228703.png"
                alt="soft skills"
                className="pr-icon"
              />
              <p>Soft skills training</p>
            </div>

            <div className="pr-box">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
                alt="resume"
                className="pr-icon"
              />
              <p>
                Resume building & <br /> AI-Powered mock interviews
              </p>
            </div>

            <div className="pr-box">
              <img
                src="https://cdn-icons-png.flaticon.com/512/565/565547.png"
                alt="bootcamp"
                className="pr-icon"
              />
              <p>
                All-new live <br /> bootcamp
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default UI_UX_PlacementReady;