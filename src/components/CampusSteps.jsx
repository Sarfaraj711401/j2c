import React from "react";
import "./CampusSteps.css";

const CampusSteps = () => {
  return (
    <section className="campus-steps">
      <div className="campus-steps__container">

        <h2 className="campus-steps__title">How It Works</h2>

        <div className="campus-steps__wrapper">

          {/* LINE (Desktop only) */}
          <div className="campus-steps__line"></div>

          {/* STEP 1 */}
          <div className="campus-steps__item">
            <div className="campus-steps__circle">1</div>
            <h4>Apply</h4>
            <p>Fill the form</p>
          </div>

          {/* STEP 2 */}
          <div className="campus-steps__item">
            <div className="campus-steps__circle">2</div>
            <h4>Select</h4>
            <p>Shortlisting</p>
          </div>

          {/* STEP 3 */}
          <div className="campus-steps__item">
            <div className="campus-steps__circle">3</div>
            <h4>Onboard</h4>
            <p>Get your kit</p>
          </div>

          {/* STEP 4 */}
          <div className="campus-steps__item">
            <div className="campus-steps__circle">4</div>
            <h4>Lead & Win</h4>
            <p>Start earning</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CampusSteps;