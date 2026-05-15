import React, { useEffect } from "react";

const JobHireReady_Hero = () => {

  useEffect(() => {
    const timer = setTimeout(() => {
      const preloader = document.getElementById("preloader");
      if (preloader) {
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";
        setTimeout(() => (preloader.style.display = "none"), 800);
      }
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.querySelector(".search-input")?.value;
    if (query) {
      alert(`Searching for "${query}"... 🚀`);
    }
  };

  return (
    <div className="jobhire-wrapper">

      {/* ================= CSS ================= */}
      <style>{`

        .jobhire-wrapper {
          font-family: 'Poppins', sans-serif;
          overflow-x: hidden;
          position: relative;
        }

        /* Background */
        .jobhire-wrapper::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background:
            radial-gradient(circle at 20% 80%, rgba(120,119,198,0.3), transparent),
            radial-gradient(circle at 80% 20%, rgba(255,119,198,0.3), transparent),
            linear-gradient(135deg, #667eea, #764ba2);
          z-index: -2;
        }

        /* ===== PRELOADER ===== */
        .preloader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg,#667eea,#764ba2);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          transition: 0.8s;
        }

        .logo-preload {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg,#00d4ff,#fff);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          animation: pulse 2s infinite;
        }

        .logo-preload i {
          font-size: 2.5rem;
          color: #667eea;
        }

        @keyframes pulse {
          50% { transform: scale(1.1); }
        }

        .loader-ring {
          width: 60px;
          height: 60px;
          border: 4px solid rgba(255,255,255,0.1);
          border-top: 4px solid #00d4ff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          100% { transform: rotate(360deg); }
        }

        /* ===== HERO (FIXED) ===== */
        .job-hero {
          min-height: calc(100vh - 70px);
          background: linear-gradient(135deg,#001f3f,#003366);
          color: #fff;
          display: flex;
          align-items: center;
          position: relative;
        }

        .hero-content {
          padding: 30px 0 70px; /* FIXED GAP */
        }

        .hero-title {
          font-size: clamp(2.5rem,6vw,4.5rem);
          font-weight: 700;
          background: linear-gradient(135deg,#00d4ff,#fff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 20px;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          max-width: 650px;
          margin: 0 auto 30px;
        }

        /* ===== SEARCH ===== */
        .hero-search {
          max-width: 900px;
          margin: auto;
          background: rgba(255,255,255,0.1);
          border-radius: 20px;
          padding: 10px;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
        }

        .search-group {
          flex: 1;
          min-width: 220px;
        }

        .search-input, .search-select {
          width: 100%;
          padding: 16px;
          border-radius: 14px;
          border: none;
          background: rgba(255,255,255,0.95);
        }

        .search-btn {
          background: linear-gradient(135deg,#00d4ff,#0099cc);
          border: none;
          border-radius: 14px;
          padding: 16px 28px;
          color: #fff;
          font-weight: 700;
          white-space: nowrap;
        }

        .search-btn:hover {
          transform: translateY(-2px);
        }

        /* ===== MOBILE ===== */
        @media(max-width:768px){
          .job-hero {
            min-height: calc(100vh - 60px);
          }

          .hero-content {
            padding: 20px 0 50px;
          }

          .hero-search {
            flex-direction: column;
          }

          .search-btn {
            width: 100%;
          }
        }

      `}</style>

      {/* ===== PRELOADER ===== */}
      <div className="preloader" id="preloader">
        <div className="logo-preload">
          <i className="fas fa-rocket"></i>
        </div>
        <div className="loader-ring"></div>
        <p style={{ marginTop: "24px", fontWeight: "500" }}>
          Launching your career...
        </p>
      </div>

      {/* ===== HERO ===== */}
      <section className="job-hero">
        <div className="container">
          <div className="hero-content text-center">

            <h1 className="hero-title">Job Hire Ready 🚀</h1>

            <p className="hero-subtitle">
              Unlock verified internships, fresher jobs & skill-building programs across 75+ cities.
              Join 20K+ students connected with 500+ top hiring partners through JourneyToCareer.
            </p>

            <form className="hero-search" onSubmit={handleSearch}>

              <div className="search-group">
                <select className="search-select">
                  <option>All Categories</option>
                  <option>Software Development</option>
                  <option>Data Science & AI</option>
                  <option>Digital Marketing</option>
                  <option>Product Management</option>
                  <option>Business Analyst</option>
                  <option>Design & UX</option>
                </select>
              </div>

              <div className="search-group">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Job title, company, skills or keywords..."
                />
              </div>

              <div className="search-group">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Location (e.g. Bangalore, Remote)"
                />
              </div>

              <button className="search-btn" type="submit">
                <i className="fas fa-search"></i> Find Your Dream Job
              </button>

            </form>

          </div>
        </div>
      </section>

    </div>
  );
};

export default JobHireReady_Hero;