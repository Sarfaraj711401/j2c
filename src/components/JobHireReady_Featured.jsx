import React from "react";

const JobHireReady_Featured = () => {
  return (
    <>
      {/* Scoped CSS */}
      <style>{`
        .JobHireReady_Featured {
          padding: 100px 0;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          text-align: center;
          margin-bottom: 10px;
          background: linear-gradient(135deg, #00d4ff, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .section-subtitle {
          text-align: center;
          color: #64748b;
          max-width: 700px;
          margin: 0 auto 50px;
        }

        /* Job Card */
        .job-card {
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(15px);
          border-radius: 24px;
          padding: 35px;
          height: 100%;
          box-shadow: 0 20px 60px rgba(0,0,0,0.12);
          transition: all 0.4s ease;
          border: 1px solid rgba(0,212,255,0.2);
          position: relative;
          overflow: hidden;
        }

        .job-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #00d4ff, #f093fb, #00d4ff);
        }

        .job-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 35px 80px rgba(0,212,255,0.25);
        }

        .job-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }

        .job-icon {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: white;
        }

        .job-company {
          color: #00d4ff;
          font-weight: 700;
          font-size: 1.1rem;
        }

        .job-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #1a202c;
          margin: 10px 0;
        }

        .job-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 20px;
          font-size: 0.9rem;
        }

        .job-meta i {
          color: #00d4ff;
          margin-right: 5px;
        }

        .job-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 20px;
        }

        .job-tag {
          background: linear-gradient(135deg, #00d4ff, #0099cc);
          color: white;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .job-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }

        .btn-apply {
          padding: 10px 22px;
          border-radius: 20px;
          border: none;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .btn-primary-apply {
          background: linear-gradient(135deg, #00d4ff, #0099cc);
          color: white;
          box-shadow: 0 8px 25px rgba(0,212,255,0.3);
        }

        .btn-primary-apply:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(0,212,255,0.5);
          color: white;
        }

        @media(max-width:768px){
          .job-actions {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <section className="JobHireReady_Featured">
        <div className="container">

          <h2 className="section-title">🔥 Featured Opportunities</h2>

          <p className="section-subtitle">
            Latest verified internships & fresher jobs handpicked from top companies across India.
          </p>

          <div className="row g-4">

            {/* Job 1 */}
            <div className="col-xl-4 col-lg-6">
              <div className="job-card">
                <div className="job-header">
                  <div className="job-icon" style={{background:"linear-gradient(135deg,#ff6b6b,#ee5a24)"}}>
                    <i className="fab fa-google"></i>
                  </div>
                </div>

                <div className="job-company">Google India</div>
                <div className="job-title">Software Engineering Intern</div>

                <div className="job-meta">
                  <span><i className="fas fa-map-marker-alt"></i> Bangalore</span>
                  <span><i className="fas fa-clock"></i> 6 Months</span>
                  <span><i className="fas fa-inr"></i> ₹25,000/month</span>
                </div>

                <div className="job-tags">
                  <span className="job-tag">Internship</span>
                  <span className="job-tag">Full Stack</span>
                  <span className="job-tag">Remote</span>
                </div>

                <div className="job-actions">
                  <a href="#" className="btn-apply btn-primary-apply">
                    <i className="fas fa-paper-plane"></i> Apply Now
                  </a>
                  <span className="text-muted">Closes in 7 days</span>
                </div>
              </div>
            </div>

            {/* Job 2 */}
            <div className="col-xl-4 col-lg-6">
              <div className="job-card">
                <div className="job-header">
                  <div className="job-icon" style={{background:"#fff"}}>
                    <img src="https://tse3.mm.bing.net/th/id/OIP.FUj7LV1B0HHctq3t5gmWCAAAAA?pid=Api&P=0&h=180" style={{width:"40px"}} />
                  </div>
                </div>

                <div className="job-company">Deloitte</div>
                <div className="job-title">Business Analyst Fresher</div>

                <div className="job-meta">
                  <span><i className="fas fa-map-marker-alt"></i> Mumbai</span>
                  <span><i className="fas fa-clock"></i> Full-time</span>
                  <span><i className="fas fa-inr"></i> ₹6.5 LPA</span>
                </div>

                <div className="job-tags">
                  <span className="job-tag">Fresher</span>
                  <span className="job-tag">Consulting</span>
                </div>

                <div className="job-actions">
                  <a href="#" className="btn-apply btn-primary-apply">
                    Apply Now
                  </a>
                  <span className="text-muted">Closes in 10 days</span>
                </div>
              </div>
            </div>

            {/* Job 3 */}
            <div className="col-xl-4 col-lg-6">
              <div className="job-card">
                <div className="job-header">
                  <div className="job-icon" style={{background:"#fff"}}>
                    <img src="https://th.bing.com/th/id/OIP.OQrbMsmN86RrB-hXq7AfSQHaHY?w=157&h=150&c=6&o=7&dpr=1.3&pid=1.7&rm=3" style={{width:"35px"}} />
                  </div>
                </div>

                <div className="job-company">Flipkart</div>
                <div className="job-title">Product Management Intern</div>

                <div className="job-meta">
                  <span><i className="fas fa-map-marker-alt"></i> Remote</span>
                  <span><i className="fas fa-clock"></i> 3 Months</span>
                  <span><i className="fas fa-inr"></i> ₹20,000/month</span>
                </div>

                <div className="job-tags">
                  <span className="job-tag">Internship</span>
                  <span className="job-tag">Product</span>
                </div>

                <div className="job-actions">
                  <a href="#" className="btn-apply btn-primary-apply">
                    Apply Now
                  </a>
                  <span className="text-muted">Closes in 5 days</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default JobHireReady_Featured;