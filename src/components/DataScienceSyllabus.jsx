import React from "react";

const DataScienceSyllabus = () => {
  return (
    <section className="container syllabus-section my-5">

      <h2 className="syllabus-title text-center mb-5">
        Data Science Course with AI – Syllabus
      </h2>

      <div className="row g-4">

        {/* Module 1 */}
        <div className="col-md-6">
          <div className="syllabus-card">
            <h5>
              <i className="bi bi-bar-chart-line-fill text-primary"></i> Introduction to Data Science
            </h5>
            <ul>
              <li>Overview of Data Science & AI</li>
              <li>Data Science Lifecycle</li>
              <li>Types of Data & Data Sources</li>
              <li>Tools & Technologies Overview</li>
              <li>Career Scope & Opportunities</li>
            </ul>
          </div>
        </div>

        {/* Module 2 */}
        <div className="col-md-6">
          <div className="syllabus-card">
            <h5>
              <i className="bi bi-code-slash text-primary"></i> Python for Data Analysis
            </h5>
            <ul>
              <li>Python Basics & Syntax</li>
              <li>NumPy for Numerical Computing</li>
              <li>Pandas for Data Manipulation</li>
              <li>Data Cleaning & Pre-processing</li>
            </ul>
          </div>
        </div>

        {/* Module 3 */}
        <div className="col-md-6">
          <div className="syllabus-card">
            <h5>
              <i className="bi bi-calculator-fill text-primary"></i> Statistics & Probability
            </h5>
            <ul>
              <li>Descriptive & Inferential Statistics</li>
              <li>Probability & Distributions</li>
              <li>Hypothesis Testing</li>
              <li>Correlation & Regression Analysis</li>
            </ul>
          </div>
        </div>

        {/* Module 4 */}
        <div className="col-md-6">
          <div className="syllabus-card">
            <h5>
              <i className="bi bi-database-fill text-primary"></i> SQL for Data Science
            </h5>
            <ul>
              <li>Database Fundamentals</li>
              <li>SQL Queries & Joins</li>
              <li>Subqueries & Views</li>
              <li>Real-World Business Queries</li>
            </ul>
          </div>
        </div>

        {/* Module 5 */}
        <div className="col-md-6">
          <div className="syllabus-card">
            <h5>
              <i className="bi bi-sliders text-primary"></i> Machine Learning Fundamentals
            </h5>
            <ul>
              <li>Supervised & Unsupervised Learning</li>
              <li>Linear & Logistic Regression</li>
              <li>Decision Trees & Random Forest</li>
              <li>K-Means Clustering</li>
            </ul>
          </div>
        </div>

        {/* Module 6 */}
        <div className="col-md-6">
          <div className="syllabus-card">
            <h5>
              <i className="bi bi-cpu-fill text-primary"></i> AI Tools in Data Science
            </h5>
            <ul>
              <li>Neural Networks Basics</li>
              <li>TensorFlow / Keras Introduction</li>
              <li>AutoML Concepts</li>
              <li>AI-Based Model Optimization</li>
              <li>Automation of Data Pipelines</li>
            </ul>
          </div>
        </div>

      </div>

    </section>
  );
};

export default DataScienceSyllabus;