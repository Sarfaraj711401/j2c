import React from "react";
import "./Internship_Drives_Why.css";

const Internship_Drives_Why = () => {
  return (
    <section className="internship-why">
      <div className="container">
        <div className="row align-items-center g-3">

          {/* LEFT IMAGE */}
          <div className="col-lg-6">
            <div className="internship-why-image-wrapper">

              <div className="internship-why-bg-shape"></div>

              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                alt="Students collaborating"
                className="img-fluid internship-why-image"
              />

              <div className="internship-why-badge d-none d-md-block">
                <div className="d-flex align-items-center">
                  <i className="fas fa-check-circle"></i>
                  <span>Industry Verified Programs</span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6">
            <h2 className="internship-why-title">
              Why Apply for <span>Internship Drives?</span>
            </h2>

            <p className="internship-why-subtitle">
              Bridging the gap between academic learning and professional excellence through structured corporate exposure.
            </p>

            <div className="row g-4">

              {/* ITEM 1 */}
              <div className="col-12">
                <div className="internship-why-item">
                  <div className="internship-why-icon">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  <div>
                    <h5>Direct Corporate Exposure</h5>
                    <p>Skip the long application queues and interact directly with hiring managers from top-tier firms.</p>
                  </div>
                </div>
              </div>

              {/* ITEM 2 */}
              <div className="col-12">
                <div className="internship-why-item">
                  <div className="internship-why-icon">
                    <i className="fas fa-certificate"></i>
                  </div>
                  <div>
                    <h5>Pre-Placement Offers (PPO)</h5>
                    <p>Over 60% of our interns secure full-time job offers before completing their final year.</p>
                  </div>
                </div>
              </div>

              {/* ITEM 3 */}
              <div className="col-12">
                <div className="internship-why-item">
                  <div className="internship-why-icon">
                    <i className="fas fa-network-wired"></i>
                  </div>
                  <div>
                    <h5>High-Level Networking</h5>
                    <p>Connect with industry mentors and like-minded peers to build a strong professional circle.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Internship_Drives_Why;