import React from "react";
import "./HumanResource_Project.css";

const HumanResource_Project = () => {
  return (
    <section className="dm-projects">
      <h2 className="dm-projects__title">Build real-world projects</h2>
      <p className="dm-projects__sub">
        Designed to help you gain industry-relevant skills
      </p>

      <div className="dm-projects__container">

        {/* Card 1 */}
        <div className="dm-projects__card dm-projects__card--active">
          <div className="dm-projects__header">
            <img src="/images/HumanResource_Project1.jpg" alt="project" width="80" />
          </div>

          <h3>
            Built the perfect role as Talent Acquisition Trainee, thanks to the
            course's comprehensive support and skill-building
          </h3>

          <p>
            In HR Recruiting role, executed job analysis, developed job
            descriptions and specs, profiled ideal candidates, and created
            targeted questions to combat company-wide high attrition.
          </p>
        </div>

        {/* Card 2 */}
        <div className="dm-projects__card">
          <div className="dm-projects__header">
            <img src="/images/HumanResource_Project2.png" alt="project" width="90" />
          </div>

          <h3>
            Generated Excel-based HR insights to track metrics, forecast needs,
            and enhance organizational efficiency
          </h3>

          <p>
            Streamlined employee lifecycle tracking in Excel, from onboarding
            through performance management, into a single, insightful dashboard
            for better HR decisions.
          </p>
        </div>

      </div>

      <p className="dm-projects__disclaimer">
        <b>Disclaimer:</b> Projects have been built leveraging real publicly
        available data sets from organisations.
      </p>

      <div className="dm-projects__dots">
        <span className="dm-projects__dot dm-projects__dot--active"></span>
        <span className="dm-projects__dot"></span>
        <span className="dm-projects__dot"></span>
        <span className="dm-projects__dot"></span>
        <span className="dm-projects__dot"></span>
      </div>
    </section>
  );
};

export default HumanResource_Project;