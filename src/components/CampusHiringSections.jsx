import React from "react";
import "./CampusHiringSections.css";

const CampusHiringSections = () => {
  return (
    <div className="j2c-sections">

      {/* ================= ROLES ================= */}
      <section className="j2c-section" id="roles">
        <div className="j2c-container">
          <h2 className="j2c-section-title">Available Job Roles</h2>

          <div className="j2c-job-grid">

            <div className="j2c-job-card hot">
              <span className="j2c-job-badge">Hot Role</span>
              <h3>Software Developer</h3>
              <p>₹4 – 10 LPA</p>
              <div className="j2c-job-tags">
                <span>Java</span>
                <span>DSA</span>
                <span>Backend</span>
              </div>
            </div>

            <div className="j2c-job-card">
              <h3>UI/UX Designer</h3>
              <p>₹3 – 8 LPA</p>
              <div className="j2c-job-tags">
                <span>Figma</span>
                <span>UX</span>
                <span>Prototyping</span>
              </div>
            </div>

            <div className="j2c-job-card">
              <h3>Data Analyst</h3>
              <p>₹5 – 12 LPA</p>
              <div className="j2c-job-tags">
                <span>Python</span>
                <span>SQL</span>
                <span>Power BI</span>
              </div>
            </div>

            <div className="j2c-job-card">
              <h3>Business Analyst</h3>
              <p>₹4 – 9 LPA</p>
              <div className="j2c-job-tags">
                <span>Excel</span>
                <span>Analytics</span>
              </div>
            </div>

            <div className="j2c-job-card fresher">
              <span className="j2c-job-badge fresher">Fresher</span>
              <h3>QA Engineer</h3>
              <p>₹3 – 6 LPA</p>
              <div className="j2c-job-tags">
                <span>Testing</span>
                <span>Automation</span>
              </div>
            </div>

            <div className="j2c-job-card">
              <h3>Full Stack Developer</h3>
              <p>₹6 – 12 LPA</p>
              <div className="j2c-job-tags">
                <span>MERN</span>
                <span>API</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= ELIGIBILITY ================= */}
      <section className="j2c-section j2c-light">
        <div className="j2c-container">
          <h2 className="j2c-section-title">Eligibility Criteria</h2>

          <div className="j2c-eligibility-grid">

            <div className="j2c-eligibility-card">
              <div className="j2c-icon">🎓</div>
              <h3>Educational Qualification</h3>
              <p>Graduation in any discipline from a recognized university.</p>
            </div>

            <div className="j2c-eligibility-card">
              <div className="j2c-icon">📊</div>
              <h3>Academic Score</h3>
              <p>Minimum <strong>60%</strong> aggregate.</p>
            </div>

            <div className="j2c-eligibility-card">
              <div className="j2c-icon">📘</div>
              <h3>Backlogs</h3>
              <p>No active backlogs.</p>
            </div>

            <div className="j2c-eligibility-card">
              <div className="j2c-icon">💻</div>
              <h3>Technical Knowledge</h3>
              <p>Basic programming & problem solving.</p>
            </div>

            <div className="j2c-eligibility-card">
              <div className="j2c-icon">🗓</div>
              <h3>Eligible Batches</h3>
              <p>2024, 2025 & 2026 batches.</p>
            </div>

            <div className="j2c-eligibility-card highlight">
              <div className="j2c-icon">🚀</div>
              <h3>Who Should Apply?</h3>
              <p>Final-year students & fresh graduates.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="j2c-section j2c-process">
        <div className="j2c-container">
          <h2 className="j2c-section-title">Hiring Process</h2>

          <div className="j2c-process-grid">

            {[
              ["1", "Registration"],
              ["2", "Online Test"],
              ["3", "Technical Interview"],
              ["4", "HR Interview"],
              ["5", "Offer Letter 🎉"]
            ].map((step, index) => (
              <div key={index} className={`j2c-process-card ${index === 4 ? "highlight" : ""}`}>
                <div className="j2c-step">{step[0]}</div>
                <h3>{step[1]}</h3>
                <p>Complete this stage successfully.</p>
              </div>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
};

export default CampusHiringSections;