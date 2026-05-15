import React from "react";

const companies = [
  { name: "Google", logo: "/images/google.png" },
  { name: "TCS", logo: "/images/tcs.png" },
  { name: "Accenture", logo: "/images/accenture.png" },
  { name: "Infosys", logo: "/images/infosys.jpg" },
  { name: "Wipro", logo: "/images/wipro.png" },
  { name: "Cognizant", logo: "/images/cognizent.png" },
  { name: "Amazon", logo: "/images/amazon.png" },
  { name: "IBM", logo: "/images/ibm.png" },
];

const FeaturedCompanies = () => {
  return (
    <>
      {/* INJECTED COMPONENT CSS - Keeps styling 100% modular without external files */}
      <style>{`
        .featured-companies-section {
          background: #ffffff;
          padding: 80px 20px;
        }

        .featured-companies-section h2 {
          font-size: 34px;
          font-weight: 700;
          color: #003580;
          margin-bottom: 10px;
        }

        .featured-companies-section .subtitle {
          font-size: 17px;
          color: #555;
        }

        .companies-grid {
          display: grid;
          /* Automatically fits as many 160px columns as possible, making it 100% responsive natively */
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 30px;
          justify-items: center;
          align-items: center;
          margin-top: 40px;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .company-card {
          background: #fff;
          border-radius: 12px;
          padding: 25px;
          transition: all 0.3s ease;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100px;
          width: 100%;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
          border: 1px solid #f8f9fa;
        }

        .company-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }

        .company-card img {
          max-width: 100px;
          max-height: 50px;
          object-fit: contain; /* Ensures logos don't stretch weirdly */
          transition: transform 0.3s ease;
        }

        .company-card:hover img {
          transform: scale(1.08); /* Slight zoom effect */
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .featured-companies-section {
            padding: 60px 15px;
          }
          .company-card {
            height: 90px;
          }
          .companies-grid {
            grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
            gap: 20px;
          }
        }
      `}</style>

      <section className="featured-companies-section">
        <div className="container text-center">
          <h2>Our Hiring Partners</h2>
          <p className="subtitle">
            Top companies that trust JourneyToCareer to find great talent
          </p>

          <div className="companies-grid mt-5">
            {companies.map((company, index) => (
              <div className="company-card" key={index}>
                {/* Note: Ensure these images are placed inside your React project's public/images/ folder! */}
                <img src={company.logo} alt={company.name} title={company.name} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedCompanies;