import React from "react";

const JobHireReady_AppCTA = () => {
  return (
    <div className="jobhire-app-wrapper">

      {/* ✅ SCOPED CSS */}
      <style>{`
        .jobhire-app-wrapper {
          width: 100%;
        }

        .section-padding {
          padding: 90px 0;
        }

        .section-title {
          text-align: center;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          background: linear-gradient(135deg, #00d4ff, #6a11cb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 10px;
        }

        .section-subtitle {
          text-align: center;
          color: #64748b;
          max-width: 650px;
          margin: 0 auto 30px;
        }

        /* ===== APP SECTION ===== */
        .app-section {
          background: linear-gradient(135deg, #f8fbff, #eef5ff);
          text-align: center;
          border-radius: 20px;
        }

        .store-buttons {
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
          margin-top: 25px;
        }

        .store-btn {
          background: #111;
          color: white;
          border: none;
          padding: 14px 26px;
          border-radius: 12px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: 0.3s;
        }

        .store-btn:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }

        /* ===== CTA SECTION ===== */
        .job-cta {
          background: linear-gradient(135deg, #00d4ff, #6a11cb);
          color: white;
          text-align: center;
          padding: 120px 20px;
          border-radius: 30px;
          margin-top: 60px;
          position: relative;
          overflow: hidden;
        }

        /* glowing background */
        .job-cta::before {
          content: "";
          position: absolute;
          width: 300px;
          height: 300px;
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
          top: -80px;
          left: -80px;
          filter: blur(100px);
        }

        .job-cta::after {
          content: "";
          position: absolute;
          width: 300px;
          height: 300px;
          background: rgba(255,255,255,0.15);
          border-radius: 50%;
          bottom: -80px;
          right: -80px;
          filter: blur(100px);
        }

        .cta-title {
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          font-weight: 800;
          margin-bottom: 15px;
        }

        .cta-subtitle {
          font-size: 1.2rem;
          max-width: 650px;
          margin: 0 auto 35px;
          opacity: 0.95;
        }

        .cta-btn {
          background: white;
          color: #6a11cb;
          padding: 16px 40px;
          border-radius: 40px;
          font-weight: 700;
          font-size: 1.1rem;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          transition: 0.3s;
        }

        .cta-btn:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 15px 40px rgba(0,0,0,0.25);
        }

        /* ===== MOBILE ===== */
        @media(max-width:768px){
          .section-padding {
            padding: 60px 15px;
          }

          .job-cta {
            padding: 80px 20px;
          }
        }

      `}</style> 

      {/* ===== FINAL CTA ===== */}
      <section className="job-cta">
        <div className="container">

          <h2 className="cta-title">
            Ready to Transform Your Career?
          </h2>

          <p className="cta-subtitle">
            Join 25K+ students who launched their careers through JourneyToCareer.
            Your first opportunity is just one click away!
          </p>

          <a href="#" className="cta-btn">
            <i className="fas fa-rocket"></i>
            Start Your Journey Now
          </a>

        </div>
      </section>


      {/* ===== APP DOWNLOAD SECTION ===== */}
      <section className="section-padding app-section">
        <div className="container">
          <h2 className="section-title">Get Jobs On The Go 📱</h2>

          <p className="section-subtitle">
            Download our mobile app and apply anytime, anywhere.
          </p>

          <div className="store-buttons">

            <button className="store-btn">
              <i className="fab fa-google-play"></i>
              Play Store
            </button>

            <button className="store-btn">
              <i className="fab fa-apple"></i>
              App Store
            </button>

          </div>
        </div>
      </section>

  


    </div>
  );
};

export default JobHireReady_AppCTA;