import React from "react";
import "./CampusImpact.css";

const CampusImpact = () => {
  return (
    <section className="campus-impact">
      <div className="campus-impact__container">

        <div className="campus-impact__wrapper">

          {/* LEFT CONTENT */}
          <div className="campus-impact__left">
            <h2 className="campus-impact__title">
              Your Impact & Responsibilities
            </h2>

            <p className="campus-impact__subtitle">
              You won't just be a student anymore; you will be a leader.
            </p>

            <div className="campus-impact__timeline">

              <div className="campus-impact__item">
                <div className="campus-impact__dot"></div>
                <h4>The Evangelist</h4>
                <p>Promote J2C internships and courses on social media.</p>
              </div>

              <div className="campus-impact__item">
                <div className="campus-impact__dot"></div>
                <h4>The Community Leader</h4>
                <p>Organize seminars and help peers register on the platform.</p>
              </div>

              <div className="campus-impact__item">
                <div className="campus-impact__dot"></div>
                <h4>The Strategist</h4>
                <p>Provide feedback to the J2C team to improve experience.</p>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="campus-impact__right">
            <img
              src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31"
              alt="Working"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default CampusImpact;