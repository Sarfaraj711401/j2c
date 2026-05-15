import React from "react";

const JobHireReady_Skills = () => {
  return (
    <div className="jobhire-skills-wrapper">

      {/* ✅ SCOPED CSS */}
      <style>{`
        .jobhire-skills-wrapper {
          padding: 100px 0;
          background: linear-gradient(135deg, #f8fafc, #eef5ff);
        }

        .section-title {
          text-align: center;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          background: linear-gradient(135deg, #00d4ff, #0066ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 15px;
        }

        .section-subtitle {
          text-align: center;
          color: #64748b;
          max-width: 750px;
          margin: 0 auto 60px;
          font-size: 1.1rem;
        }

        /* GRID */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 30px;
        }

        /* CARD */
        .skill-card {
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(12px);
          border-radius: 22px;
          padding: 40px 25px;
          text-align: center;
          box-shadow: 0 15px 50px rgba(0,0,0,0.08);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        /* glowing border animation */
        .skill-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 22px;
          padding: 2px;
          background: linear-gradient(135deg, #00d4ff, #6c5ce7, #00d4ff);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
                  mask-composite: exclude;
          opacity: 0;
          transition: 0.4s;
        }

        .skill-card:hover::before {
          opacity: 1;
        }

        .skill-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 25px 70px rgba(0,212,255,0.25);
        }

        /* ICON */
        .skill-icon {
          width: 85px;
          height: 85px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          font-size: 2rem;
          color: white;
          background: linear-gradient(135deg, #00d4ff, #0099cc);
          box-shadow: 0 10px 30px rgba(0,212,255,0.4);
          transition: 0.3s;
        }

        .skill-card:hover .skill-icon {
          transform: rotate(5deg) scale(1.1);
        }

        /* TEXT */
        .skill-card h5 {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: #1a202c;
        }

        .skill-card p {
          color: #64748b;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* MOBILE */
        @media(max-width:768px){
          .jobhire-skills-wrapper {
            padding: 70px 15px;
          }
        }

      `}</style>

      <div className="container">
        <h2 className="section-title">
          Skills That Make You Hire Ready
        </h2>

        <p className="section-subtitle">
          Master these in-demand skills that 95% of companies prioritize for freshers & interns.
        </p>

        <div className="skills-grid">

          {/* CARD 1 */}
          <div className="skill-card">
            <div className="skill-icon">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h5>Technical Mastery</h5>
            <p>
              Full Stack Development, Data Science, Cloud Computing, DevOps, Mobile Apps
            </p>
          </div>

          {/* CARD 2 */}
          <div className="skill-card">
            <div className="skill-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h5>Business Acumen</h5>
            <p>
              Product Management, Analytics, Digital Marketing, Financial Modeling
            </p>
          </div>

          {/* CARD 3 */}
          <div className="skill-card">
            <div className="skill-icon">
              <i className="fas fa-users"></i>
            </div>
            <h5>Communication</h5>
            <p>
              Presentation Skills, Stakeholder Management, Negotiation, Team Leadership
            </p>
          </div>

          {/* CARD 4 */}
          <div className="skill-card">
            <div className="skill-icon">
              <i className="fas fa-brain"></i>
            </div>
            <h5>Problem Solving</h5>
            <p>
              Critical Thinking, System Design, Case Studies, Logical Reasoning
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default JobHireReady_Skills;