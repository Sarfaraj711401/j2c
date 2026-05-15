import React from "react";
import "./Internship_Drives_Stats.css";

const Internship_Drives_Stats = () => {
  return (
    <section className="internship-stats">
      <div className="container">
        <div className="row g-4 text-center">

          <div className="col-lg-3 col-md-6">
            <div className="internship-stat-card">
              <div className="internship-stat-number">900+</div>
              <h5>Companies Partnered</h5>
              <p>Top recruiters from IT, Digital Marketing, HR & Supply Chain</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="internship-stat-card">
              <div className="internship-stat-number">20K+</div>
              <h5>Students Placed</h5>
              <p>Successful placements last year</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="internship-stat-card">
              <div className="internship-stat-number">75+</div>
              <h5>Cities Covered</h5>
              <p>Pan-India campus & virtual drives</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="internship-stat-card">
              <div className="internship-stat-number">95%</div>
              <h5>Conversion Rate</h5>
              <p>Interns to full-time roles</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Internship_Drives_Stats;