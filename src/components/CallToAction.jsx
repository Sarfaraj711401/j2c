import React from "react";

const CallToAction = () => {
    return (
        <>
            <style>{`
        .cta-section {
          background: linear-gradient(135deg, #00A5EC, #0078D7);
          padding: 100px 20px;
          text-align: center;
          color: white;
        }

        .cta-section h2 {
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .cta-section p {
          font-size: 1.15rem;
          margin-bottom: 40px;
          opacity: 0.95;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .btn-candidate {
          background: white;
          color: #0078D7;
          padding: 14px 30px;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 2px solid white;
        }

        .btn-candidate:hover {
          background: #f0f8ff;
          color: #005bb5;
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .btn-employer {
          background: transparent;
          border: 2px solid white;
          color: white;
          padding: 14px 30px;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn-employer:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        @media (max-width: 768px) {
          .cta-section { padding: 60px 20px; }
          .cta-section h2 { font-size: 1.8rem; }
          .cta-buttons { flex-direction: column; gap: 15px; padding: 0 20px; }
          .btn-candidate, .btn-employer { width: 100%; }
        }
      `}</style>

            <section className="cta-section">
                <div className="container">
                    <h2>Start Your Journey Today!</h2>
                    <p>
                        Whether you’re a candidate ready to learn or an employer ready to hire — take the next step with us.
                    </p>
                    <div className="cta-buttons">
                        <a href="#" className="btn-candidate">I’m a Candidate</a>
                        <a href="#" className="btn-employer">I’m an Employer</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CallToAction;