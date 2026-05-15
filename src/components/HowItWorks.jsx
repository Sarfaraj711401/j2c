import React from "react";

const steps = [
    {
        icon: "fa-solid fa-user-plus",
        title: "1. Register",
        desc: "Create your free account and build your profile in minutes.",
    },
    {
        icon: "fa-solid fa-search",
        title: "2. Explore",
        desc: "Discover internships, jobs, and training programs tailored to your goals.",
    },
    {
        icon: "fa-solid fa-paper-plane",
        title: "3. Apply",
        desc: "Submit applications directly to top employers and startups.",
    },
    {
        icon: "fa-solid fa-handshake",
        title: "4. Get Hired",
        desc: "Start your professional journey and gain valuable experience.",
    },
];

const HowItWorks = () => {
    return (
        <>
            {/* INJECTED COMPONENT CSS - Keeps styling 100% modular without external files */}
            <style>{`
        .how-it-works-section {
          background: #ffffff;
          padding: 80px 20px;
        }

        .how-it-works-section h2 {
          font-size: 34px;
          font-weight: 700;
          color: #003580;
          margin-bottom: 10px;
        }

        .how-it-works-section .subtitle {
          font-size: 17px;
          color: #555;
        }

        .step-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 40px 25px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.04);
          border: 1px solid #f4f6f8;
          transition: all 0.3s ease;
          height: 100%;
        }

        .step-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 119, 255, 0.1);
        }

        .step-icon {
          background: #e6f3ff;
          color: #0077ff;
          font-size: 32px;
          width: 75px;
          height: 75px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }

        .step-card h5 {
          font-size: 19px;
          font-weight: 700;
          color: #003580;
          margin-bottom: 12px;
        }

        .step-card p {
          color: #666;
          font-size: 15px;
          line-height: 1.5;
          margin: 0;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .how-it-works-section {
            padding: 50px 15px;
          }
        }
      `}</style>

            <section className="how-it-works-section">
                <div className="container text-center">
                    <h2>How JourneyToCareer Works</h2>
                    <p className="subtitle">
                        Follow these simple steps to start your career journey with us
                    </p>

                    {/* g-4 adds gap between rows/columns, mt-5 adds margin top */}
                    <div className="row justify-content-center mt-5 g-4">
                        {steps.map((step, index) => (
                            <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                                <div className="step-card">
                                    <div className="step-icon">
                                        <i className={step.icon}></i>
                                    </div>
                                    <h5>{step.title}</h5>
                                    <p>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default HowItWorks;