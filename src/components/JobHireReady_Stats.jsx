import React from "react";

const JobHireReady_Stats = () => {
  return (
    <>
      {/* Scoped CSS */}
      <style>{`
        .JobHireReady_Stats {
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.2);
          position: relative;
          overflow: hidden;
        }

        .JobHireReady_Stats::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #00d4ff, #f093fb, #00d4ff, transparent);
          animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
          0%, 100% { opacity: 0.5; transform: scaleX(0); }
          50% { opacity: 1; transform: scaleX(1); }
        }

        .JobHireReady_Stats .stat-item {
          text-align: center;
          padding: 40px 20px;
        }

        .JobHireReady_Stats .stat-number {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 800;
          background: linear-gradient(135deg, #00d4ff 0%, #ffffff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 12px;
        }

        .JobHireReady_Stats .stat-label {
          font-size: 1.1rem;
          font-weight: 600;
          opacity: 0.95;
        }

        .JobHireReady_Stats.section-padding {
          padding: 80px 0; /* controlled spacing */
        }

        /* Responsive */
        @media (max-width: 768px) {
          .JobHireReady_Stats .stat-item {
            padding: 30px 10px;
          }
        }
      `}</style>

      {/* Stats Section */}
      <section className="JobHireReady_Stats section-padding">
        <div className="container">
          <div className="row g-4">

            <div className="col-lg-3 col-md-6 stat-item">
              <div className="stat-number">25K+</div>
              <div className="stat-label">Students Placed</div>
            </div>

            <div className="col-lg-3 col-md-6 stat-item">
              <div className="stat-number">1200+</div>
              <div className="stat-label">Live Opportunities</div>
            </div>

            <div className="col-lg-3 col-md-6 stat-item">
              <div className="stat-number">600+</div>
              <div className="stat-label">Active Partners</div>
            </div>

            <div className="col-lg-3 col-md-6 stat-item">
              <div className="stat-number">80+</div>
              <div className="stat-label">Cities Covered</div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default JobHireReady_Stats;