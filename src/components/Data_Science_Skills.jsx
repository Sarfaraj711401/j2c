import React from "react";
import "./Data_Science_Skills.css";

const Data_Science_Skills = () => {
  return (
    <section className="skills-section py-5">
      <div className="container-fluid px-4 px-lg-5">

        <h2 className="skills-title mb-4">
          Skills and tools you will learn
        </h2>

        <div className="row g-4">

          {/* Card 1 */}
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <div className="skill-card d-flex align-items-center">
              <div className="skill-icon me-3">
                <i className="fa-brands fa-python"></i>
              </div>
              <div className="skill-text">Python</div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <div className="skill-card d-flex align-items-center">
              <div className="skill-icon me-3">
                <i className="bi bi-bar-chart-fill"></i>
              </div>
              <div className="skill-text">Power BI</div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <div className="skill-card d-flex align-items-center">
              <div className="skill-icon me-3">
                <i className="fa-solid fa-database"></i>
              </div>
              <div className="skill-text">MySQL</div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <div className="skill-card d-flex align-items-center">
              <div className="skill-icon me-3">
                <i className="bi bi-graph-up"></i>
              </div>
              <div className="skill-text">Data Analysis</div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <div className="skill-card d-flex align-items-center">
              <div className="skill-icon me-3">
                <i className="fa-solid fa-robot"></i>
              </div>
              <div className="skill-text">Machine Learning</div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <div className="skill-card d-flex align-items-center">
              <div className="skill-icon me-3">
                <i className="bi bi-file-earmark-excel-fill"></i>
              </div>
              <div className="skill-text">Excel</div>
            </div>
          </div>

          {/* Card 7 */}
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <div className="skill-card d-flex align-items-center">
              <div className="skill-icon me-3">
                <i className="fa-solid fa-microchip"></i>
              </div>
              <div className="skill-text">Latest gen AI tools</div>
            </div>
          </div>

          {/* Card 8 */}
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <div className="skill-card d-flex align-items-center">
              <div className="skill-icon me-3">
                <i className="fa-brands fa-rocketchat"></i>
              </div>
              <div className="skill-text">ChatGPT</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Data_Science_Skills;