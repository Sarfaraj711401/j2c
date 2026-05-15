import React from "react";

const opportunities = [
  {
    icon: "fa-solid fa-laptop-code",
    title: "IT & Software",
    linkText: "View Internships",
    link: "#"
  },
  {
    icon: "fa-solid fa-briefcase",
    title: "Business & Management",
    linkText: "View Roles",
    link: "#"
  },
  {
    icon: "fa-solid fa-palette",
    title: "Design & Creative",
    linkText: "Explore Now",
    link: "#"
  },
  {
    icon: "fa-solid fa-bullhorn",
    title: "Marketing",
    linkText: "View Openings",
    link: "#"
  },
  {
    icon: "fa-solid fa-database",
    title: "Data Science",
    linkText: "Discover",
    link: "#"
  },
  {
    icon: "fa-solid fa-pen-nib",
    title: "Content Writing",
    linkText: "Start Exploring",
    link: "#"
  }
];

const ExploreOpportunities = () => {
  return (
    <>
      {/* INJECTED COMPONENT CSS - Keeps styling 100% modular without external files */}
      <style>{`
        .opportunities-section {
          background: linear-gradient(to right, #e6f3ff, #ffffff);
          padding: 80px 20px;
          text-align: center;
        }

        .opportunities-section h2 {
          font-size: 34px;
          color: #003580;
          margin-bottom: 12px;
          font-weight: 700;
        }

        .opportunities-section p {
          color: #555;
          font-size: 17px;
          margin-bottom: 50px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .opportunities-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 35px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .opportunity-card {
          background: #fff;
          border-radius: 12px;
          padding: 40px 25px;
          width: 260px;
          box-shadow: 0 4px 14px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-align: center;
          border: none;
        }

        .opportunity-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }

        .opportunity-card i {
          font-size: 42px;
          color: #0077ff;
          margin-bottom: 18px;
        }

        .opportunity-card h3 {
          font-size: 20px;
          color: #003580;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .opportunity-card a {
          text-decoration: none;
          color: #0077ff;
          font-weight: 600;
          font-size: 14px;
          transition: color 0.3s;
        }

        .opportunity-card a:hover {
          color: #0056b3;
          text-decoration: underline;
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .opportunity-card {
            width: 45%;
          }
        }

        @media (max-width: 600px) {
          .opportunity-card {
            width: 100%;
            max-width: 350px;
          }
        }
      `}</style>

      <section className="opportunities-section">
        <div className="container">
          <h2>Explore Opportunities</h2>
          <p>
            Discover exciting internships, jobs, and learning programs that align
            with your passion and career goals.
          </p>

          <div className="opportunities-grid">
            {opportunities.map((item, index) => (
              <div className="opportunity-card" key={index}>
                <i className={item.icon}></i>
                <h3>{item.title}</h3>
                <a href={item.link}>{item.linkText}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ExploreOpportunities;