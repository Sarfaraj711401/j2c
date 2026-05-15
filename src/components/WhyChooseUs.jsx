import React from "react";

const features = [
    {
        icon: "fa-solid fa-user-graduate",
        title: "Career-Focused Internships",
        desc: "Gain hands-on experience through meaningful internships that shape your future career path.",
    },
    {
        icon: "fa-solid fa-briefcase",
        title: "Trusted Job Listings",
        desc: "Explore verified and high-quality job openings from top employers across industries.",
    },
    {
        icon: "fa-solid fa-chalkboard-user",
        title: "Skill-Oriented Courses",
        desc: "Learn practical skills from industry experts to enhance your employability.",
    },
    {
        icon: "fa-solid fa-shield-halved",
        title: "Verified Employers",
        desc: "All companies on our platform are thoroughly verified for authenticity and quality.",
    },
];

const WhyChooseUs = () => {
    return (
        <>
            {/* INJECTED COMPONENT CSS - Keeps styling 100% modular without external files */}
            <style>{`
        .why-choose-section {
          background: linear-gradient(135deg, #f1f8ff, #ffffff);
          padding: 90px 20px;
          text-align: center;
        }

        .why-choose-section h2 {
          font-size: 34px;
          font-weight: 700;
          color: #003580;
          margin-bottom: 10px;
        }

        .why-choose-section .subtitle {
          font-size: 17px;
          color: #555;
        }

        .features-grid {
          display: grid;
          /* Automatically fits 4 columns on large screens, 2 on tablets, and 1 on mobile */
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 35px;
          margin-top: 50px;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .feature-card {
          background: #fff;
          border-radius: 15px;
          padding: 35px 25px;
          box-shadow: 0 6px 15px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .feature-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.12);
        }

        .feature-card i {
          font-size: 45px;
          color: #0077ff;
          margin-bottom: 20px;
        }

        .feature-card h4 {
          color: #003580;
          font-weight: 600;
          font-size: 20px;
          margin-bottom: 10px;
        }

        .feature-card p {
          color: #555;
          font-size: 15px;
          line-height: 1.6;
          margin: 0;
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .why-choose-section {
            padding: 60px 15px;
          }
          .features-grid {
            gap: 25px;
            margin-top: 35px;
          }
        }
      `}</style>

            <section className="why-choose-section">
                <div className="container text-center">
                    <h2>Why Choose JourneyToCareer?</h2>
                    <p className="subtitle">
                        We help students and professionals connect with the right opportunities.
                    </p>

                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div className="feature-card" key={index}>
                                <i className={feature.icon}></i>
                                <h4>{feature.title}</h4>
                                <p>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhyChooseUs;