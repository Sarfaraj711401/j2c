import React from "react";
import "./Campus_Hiring_Company.css";

const Campus_Hiring_Company = () => {
  const companies = [
    { name: "Google", role: "Software • Data • Cloud", badge: "Top Recruiter" },
    { name: "Microsoft", role: "Engineering • AI", badge: "MNC" },
    { name: "Amazon", role: "Backend • Operations", badge: "Global" },
    { name: "Infosys", role: "IT Services • Consulting" },
    { name: "TCS", role: "Enterprise Solutions" },
    { name: "Accenture", role: "Consulting • Tech", badge: "Hot Hiring" },
    { name: "Wipro", role: "Digital • Cloud" },
    { name: "Deloitte", role: "Analytics • Advisory" }
  ];

  return (
    <section className="j2c-company-section">
      <div className="j2c-company-container">

        <h2 className="j2c-company-title">Top Hiring Companies</h2>

        <div className="j2c-company-grid">
          {companies.map((company, index) => (
            <div key={index} className="j2c-company-card">

              {company.badge && (
                <span className="j2c-company-badge">
                  {company.badge}
                </span>
              )}

              <h3>{company.name}</h3>
              <p>{company.role}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Campus_Hiring_Company;