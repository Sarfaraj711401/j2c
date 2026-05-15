import React from "react";
import "./SoftwareTesting_TopCareer.css";

const SoftwareTesting_TopCareer = () => {
  return (
    <section className="career-section">
      <h2 className="career-title">
        Top career options in Software Testing Course
      </h2>

      <div className="career-container">
        <div className="career-card">
          <img src="/images/ManualTester.webp" alt="Manual Tester" className="career-icon" />
          <h3>Manual Tester</h3>
          <p>
            Executes Test Cases Manually to identify bugs ensure software quality.
          </p>
        </div>

        <div className="career-card">
          <img src="/images/pythonAutomation.webp" alt="Python Automation Tester" className="career-icon" />
          <h3>Python Automation Tester</h3>
          <p>
            Develops and runs automated test scripts using Python to validate
            software functionality and performance.
          </p>
        </div>

        <div className="career-card">
          <img src="/images/JavaAuto.webp" alt="Java Automation Engineer" className="career-icon" />
          <h3>Java Automation Engineer</h3>
          <p>
            Uses Java-based frameworks to create automated test for detecting
            defects and verifying application behavior.
          </p>
        </div>

        <div className="career-card">
          <img src="/images/Selenium.webp" alt="Selenium Automation Engineer" className="career-icon" />
          <h3>Selenium Automation Engineer</h3>
          <p>
            Builds and maintains test scripts using Selenium to automate web
            application testing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SoftwareTesting_TopCareer;