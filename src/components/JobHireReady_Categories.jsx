import React from "react";

const JobHireReady_Categories = () => {
  return (
    <div className="jobhire-category-wrapper">

      <style>{`
        .jobhire-category-wrapper {
          width: 100%;
          background: linear-gradient(135deg, #f8fbff, #eef5ff);
        }

        .section-padding {
          padding: 100px 0;
        }

        /* ===== TITLE ===== */
        .section-title {
          text-align: center;
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          font-weight: 800;
          margin-bottom: 10px;
          background: linear-gradient(135deg, #00d4ff, #6a11cb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .section-subtitle {
          text-align: center;
          color: #64748b;
          max-width: 720px;
          margin: 0 auto 60px;
          font-size: 1.05rem;
        }

        /* ===== CATEGORY CARD ===== */
        .category-card {
          background: rgba(255,255,255,0.8);
          backdrop-filter: blur(12px);
          border-radius: 22px;
          padding: 30px 20px;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(0,212,255,0.15);
        }

        /* glowing border */
        .category-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 22px;
          padding: 2px;
          background: linear-gradient(135deg, #00d4ff, #6a11cb, #00d4ff);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
                  mask-composite: exclude;
          opacity: 0;
          transition: 0.4s;
        }

        .category-card:hover::before {
          opacity: 1;
        }

        .category-card:hover {
          transform: translateY(-12px) scale(1.03);
          box-shadow: 0 25px 70px rgba(0,212,255,0.25);
        }

        /* ICON */
        .category-icon {
          width: 75px;
          height: 75px;
          border-radius: 18px;
          background: linear-gradient(135deg, #00d4ff, #0099cc);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 15px;
          font-size: 1.8rem;
          color: white;
          box-shadow: 0 10px 30px rgba(0,212,255,0.4);
          transition: 0.3s;
        }

        .category-card:hover .category-icon {
          transform: rotate(8deg) scale(1.1);
        }

        .category-card h6 {
          font-weight: 700;
          margin-bottom: 6px;
          font-size: 1.1rem;
          color: #1a202c;
        }

        .category-card p {
          font-size: 0.9rem;
          color: #64748b;
        }

        /* ===== COMPANY SECTION ===== */
        .company-section {
          background: transparent;
        }

        .company-card {
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(10px);
          padding: 20px 30px;
          border-radius: 16px;
          transition: 0.4s;
          border: 1px solid rgba(0,212,255,0.1);
          min-width: 130px;
        }

        .company-card i {
          color: #00d4ff;
          margin-bottom: 8px;
        }

        .company-card p {
          margin: 0;
          font-weight: 600;
        }

        .company-card:hover {
          transform: translateY(-8px) scale(1.05);
          background: linear-gradient(135deg, #00d4ff, #6a11cb);
          color: white;
          box-shadow: 0 20px 50px rgba(0,212,255,0.3);
        }

        .company-card:hover i {
          color: white;
        }

        /* ===== RESPONSIVE ===== */
        @media(max-width:768px){
          .section-padding {
            padding: 70px 15px;
          }
        }

      `}</style>

      {/* ===== JOB CATEGORIES ===== */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">Explore Job Categories</h2>

          <p className="section-subtitle">
            Discover opportunities across trending domains and kickstart your career.
          </p>

          <div className="row g-4 text-center">

            <div className="col-md-3 col-6">
              <div className="category-card">
                <div className="category-icon">
                  <i className="fas fa-code"></i>
                </div>
                <h6>IT & Software</h6>
                <p>Developer, Tester, DevOps</p>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="category-card">
                <div className="category-icon">
                  <i className="fas fa-chart-pie"></i>
                </div>
                <h6>Data Science</h6>
                <p>ML, AI, Analytics</p>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="category-card">
                <div className="category-icon">
                  <i className="fas fa-bullhorn"></i>
                </div>
                <h6>Marketing</h6>
                <p>SEO, Ads, Social Media</p>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="category-card">
                <div className="category-icon">
                  <i className="fas fa-palette"></i>
                </div>
                <h6>Design</h6>
                <p>UI/UX, Graphic Design</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== TOP COMPANIES ===== */}
      <section className="section-padding company-section">
        <div className="container text-center">

          <h2 className="section-title">
            Top Companies Hiring From Us
          </h2>

          <div className="d-flex flex-wrap justify-content-center gap-4 mt-5">

            <div className="company-card">
              <i className="fab fa-google fa-2x"></i>
              <p>Google</p>
            </div>

            <div className="company-card">
              <i className="fab fa-amazon fa-2x"></i>
              <p>Amazon</p>
            </div>

            <div className="company-card">
              <i className="fab fa-microsoft fa-2x"></i>
              <p>Microsoft</p>
            </div>

            <div className="company-card">
              <i className="fab fa-linkedin fa-2x"></i>
              <p>LinkedIn</p>
            </div>

            <div className="company-card">
              <i className="fab fa-apple fa-2x"></i>
              <p>Apple</p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default JobHireReady_Categories;