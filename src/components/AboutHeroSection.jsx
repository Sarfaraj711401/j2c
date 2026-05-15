import React from 'react';

const AboutHeroSection = () => {
  return (
    <>
      {/* INJECTED COMPONENT CSS - Allows for responsive media queries */}
      <style>{`
        .about-hero-section {
          background: linear-gradient(135deg, #001f3f, #003366, #004080);
          color: #ffffff;
          padding: 100px 20px; /* Added side padding to prevent text from touching screen edges */
          text-align: center;
        }
        
        .about-hero-title {
          font-size: 3rem;
          font-weight: 700;
          margin: 0;
          /* Ensures very long words break safely on extremely small devices */
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        .about-hero-desc {
          max-width: 750px;
          margin: 20px auto 0;
          font-size: 1.15rem;
          color: #dbe6ff;
        }

        /* Tablet Responsive */
        @media (max-width: 768px) {
          .about-hero-section {
            padding: 70px 15px;
          }
          .about-hero-title {
            font-size: 2.3rem; /* Scaled down for tablets */
          }
          .about-hero-desc {
            font-size: 1.05rem;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 480px) {
          .about-hero-section {
            padding: 50px 15px;
          }
          .about-hero-title {
            font-size: 1.8rem; /* Scaled down for phones to fit "JourneyToCareers" */
          }
          .about-hero-desc {
            font-size: 1rem;
          }
        }
      `}</style>

      <section className="about-hero-section">
        <div className="container">
          <h1 className="about-hero-title">About JourneyToCareers</h1>
          <p className="about-hero-desc">
            Empowering students and fresh graduates to transform ambition into achievement
            through internships, skill development, and job opportunities.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutHeroSection;