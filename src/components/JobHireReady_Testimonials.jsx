import React from "react";

const JobHireReady_Testimonials = () => {
  return (
    <div className="jobhire-testimonial-wrapper">

      <style>{`
        .jobhire-testimonial-wrapper {
          width: 100%;
        }

        /* ===== TESTIMONIAL SECTION ===== */
        .testimonials-section {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 90px 0;
          position: relative;
          overflow: hidden;
        }

        .section-title {
          text-align: center;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          margin-bottom: 40px;
          background: linear-gradient(135deg, #9edc1a, #e0f7ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .testimonial-card {
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(18px);
          border-radius: 22px;
          padding: 30px 25px;
          border: 1px solid rgba(255,255,255,0.2);
          transition: 0.4s ease;
          height: 100%;
        }

        .testimonial-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.2);
        }

        .testimonial-text {
          font-size: 1rem;
          font-style: italic;
          margin-bottom: 20px;
          line-height: 1.6;
          opacity: 0.95;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .author-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00d4ff, #f093fb);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: white;
        }

        .author-info h6 {
          margin: 0;
          font-weight: 700;
        }

        .author-info p {
          margin: 0;
          font-size: 0.85rem;
          opacity: 0.8;
        }

        /* ===== JOURNEY SECTION ===== */
        .journey-section {
          padding: 90px 0;
          background: #fcf8ff;
        }

        .section-subtitle {
          text-align: center;
          color: #64748b;
          max-width: 700px;
          margin: 0 auto 50px;
        }

        .journey-card {
          background: white;
          padding: 25px;
          border-radius: 18px;
          transition: 0.4s;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }

        .journey-card i {
          font-size: 1.8rem;
          color: #00d4ff;
          margin-bottom: 12px;
        }

        .journey-card h6 {
          font-weight: 700;
        }

        .journey-card p {
          font-size: 0.9rem;
          color: #64748b;
        }

        .journey-card:hover {
          transform: translateY(-8px);
          background: linear-gradient(135deg, #00d4ff, #6a11cb);
          color: white;
        }

        .journey-card:hover p {
          color: rgba(255,255,255,0.9);
        }
          .journey-section .section-title {
  background: linear-gradient(135deg, #00d4ff, #6a11cb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

        /* ===== RESPONSIVE ===== */
        @media(max-width:768px){
          .testimonials-section,
          .journey-section {
            padding: 60px 15px;
          }
        }

      `}</style>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">Success Stories</h2>

          <div className="row g-4">

            <div className="col-lg-4 col-md-6">
              <div className="testimonial-card">
                <p className="testimonial-text">
                  "JourneyToCareer helped me land my first internship at Google within 2 weeks!"
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">A.S</div>
                  <div className="author-info">
                    <h6>Anjali Sharma</h6>
                    <p>Google Intern</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="testimonial-card">
                <p className="testimonial-text">
                  "As a fresher, I found genuine opportunities and got placed at Deloitte."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">R.K</div>
                  <div className="author-info">
                    <h6>Rahul Kumar</h6>
                    <p>Deloitte Analyst</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="testimonial-card">
                <p className="testimonial-text">
                  "Got placed at Flipkart through campus hiring. Amazing experience!"
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">P.M</div>
                  <div className="author-info">
                    <h6>Priya Mehta</h6>
                    <p>Flipkart Intern</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== JOURNEY ===== */}
      <section className="journey-section">
        <div className="container">

          <h2 className="section-title">
            Your Journey to Getting Hired
          </h2>

          <p className="section-subtitle">
            From confusion to confidence — step-by-step guidance until you land your job.
          </p>

          <div className="row g-4 text-center">

            <div className="col-md-3 col-6">
              <div className="journey-card">
                <i className="fas fa-user-graduate"></i>
                <h6>Step 1</h6>
                <p>Register & build profile</p>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="journey-card">
                <i className="fas fa-book-open"></i>
                <h6>Step 2</h6>
                <p>Learn & build projects</p>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="journey-card">
                <i className="fas fa-user-tie"></i>
                <h6>Step 3</h6>
                <p>Prepare for interviews</p>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="journey-card">
                <i className="fas fa-briefcase"></i>
                <h6>Step 4</h6>
                <p>Get hired</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default JobHireReady_Testimonials;