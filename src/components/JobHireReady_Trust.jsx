import React from "react";

const JobHireReady_Trust = () => {
  return (
    <>
      <style>{`
        .JobHireReady_Trust {
          padding: 100px 0;
          background: linear-gradient(135deg, #f9fcff 0%, #eef6ff 50%, #fdfbff 100%);
          position: relative;
          overflow: hidden;
        }

        /* Soft floating glow */
        .JobHireReady_Trust::before {
          content: '';
          position: absolute;
          top: -80px;
          left: -80px;
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, rgba(0,212,255,0.25), transparent);
          filter: blur(60px);
        }

        .JobHireReady_Trust::after {
          content: '';
          position: absolute;
          bottom: -80px;
          right: -80px;
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, rgba(240,147,251,0.25), transparent);
          filter: blur(60px);
        }

        .JobHireReady_Trust .container {
          position: relative;
          z-index: 2;
        }

        .section-title {
          text-align: center;
          font-size: clamp(2.2rem, 4vw, 3rem);
          font-weight: 800;
          margin-bottom: 12px;
          background: linear-gradient(135deg, #00A5EC, #6C63FF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .section-subtitle {
          text-align: center;
          color: #6b7280;
          max-width: 700px;
          margin: 0 auto 60px;
          font-size: 1.1rem;
        }

        .trust-card {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          padding: 30px 20px;
          text-align: center;
          border: 1px solid rgba(0,0,0,0.05);
          transition: all 0.35s ease;
          height: 100%;
          position: relative;
        }

        /* subtle shine */
        .trust-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 20px;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.5), transparent);
          opacity: 0;
          transition: 0.4s;
        }

        .trust-card:hover::before {
          opacity: 1;
        }

        .trust-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0,165,236,0.15);
          border: 1px solid rgba(0,165,236,0.2);
        }

        .trust-icon {
          width: 70px;
          height: 70px;
          border-radius: 18px;
          background: linear-gradient(135deg, #00A5EC, #6C63FF);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          font-size: 1.8rem;
          color: #fff;
          transition: 0.4s;
        }

        .trust-card:hover .trust-icon {
          transform: scale(1.1) rotate(8deg);
          box-shadow: 0 10px 25px rgba(0,165,236,0.4);
        }

        .trust-card h5 {
          font-weight: 700;
          margin-bottom: 10px;
          color: #1f2937;
        }

        .trust-card p {
          font-size: 0.95rem;
          color: #6b7280;
        }

        @media (max-width: 768px) {
          .JobHireReady_Trust {
            padding: 70px 0;
          }
        }
      `}</style>

      <section className="JobHireReady_Trust">
        <div className="container">

          <h2 className="section-title">Why Companies Trust Us</h2>

          <p className="section-subtitle">
            JourneyToCareer is the preferred partner for 600+ companies hiring fresh talent across India.
          </p>

          <div className="row g-4">

            <div className="col-lg-3 col-md-6">
              <div className="trust-card">
                <div className="trust-icon">
                  <i className="fas fa-check-double"></i>
                </div>
                <h5>Pre-Verified Candidates</h5>
                <p>100% verified student profiles with academic & skill validation</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="trust-card">
                <div className="trust-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h5>Zero Recruitment Fee</h5>
                <p>Free job postings & candidate access for all partner companies</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="trust-card">
                <div className="trust-icon">
                  <i className="fas fa-bolt"></i>
                </div>
                <h5>Lightning Fast Hiring</h5>
                <p>From posting to hire in under 7 days average turnaround</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="trust-card">
                <div className="trust-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h5>95% Retention Rate</h5>
                <p>High-quality hires that stay longer and perform better</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default JobHireReady_Trust;