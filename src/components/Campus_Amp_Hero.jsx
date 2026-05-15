import React from "react";
import "./Campus_Amp_Hero.css";

const Campus_Amp_Hero = () => {
  return (
    <div className="campus-hero"> {/* ✅ UNIQUE WRAPPER */}

      <section className="campus-hero__section">
        <div className="campus-hero__container">
          
          {/* LEFT */}
          <div className="campus-hero__left">
            <div className="campus-hero__badge">Official 2026 Program</div>

            <h1 className="campus-hero__title">
              Become the <span>Face of J2C</span> on Your Campus
            </h1>

            <p className="campus-hero__desc">
              Gain leadership experience, earn performance-based stipends,
              and bridge the gap between college and the corporate world.
            </p>

            <div className="campus-hero__cta">
              <a href="#apply-form" className="campus-hero__btn">
                Apply Now →
              </a>
              <p className="campus-hero__small">
                Takes less than 2 minutes • Free to join
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="campus-hero__right">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
              alt="Students"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="campus-hero__stats">
        <div className="campus-hero__stats-container">
          <div className="campus-hero__stat">🎓 500+ Campuses</div>
          <div className="campus-hero__stat">🚀 2,000+ Ambassadors</div>
          <div className="campus-hero__stat">⭐ 4.8/5 Rated Program</div>
        </div>
      </section>

    </div>
  );
};

export default Campus_Amp_Hero;