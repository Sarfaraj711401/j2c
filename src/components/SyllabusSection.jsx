import React from "react";

import "./SyllabusSection.css";

const SyllabusSection = () => {
  return (
    <section className="container syllabus-section my-5">

      <h2 className="syllabus-title text-center mb-5">
        Python Course with AI – Syllabus
      </h2>

      <div className="row g-4">

        {/* Module 1 */}
        <div className="col-md-6">
          <div className="syllabus-card">
            <h5><i className="bi bi-globe"></i> Python Fundamentals</h5>
            <ul>
              <li>Variables, data types, operators</li>
              <li>Control flow (if/else, loops)</li>
              <li>Functions and lambda expressions</li>
              <li>Lists, tuples, dictionaries, sets</li>
            </ul>
          </div>
        </div>

        {/* Module 2 */}
        <div className="col-md-6">
          <div className="syllabus-card">
            <h5><i className="bi bi-search"></i> Advanced Python</h5>
            <ul>
              <li>Object-oriented programming (classes, inheritance)</li>
              <li>Exception handling</li>
              <li>File I/O and modules</li>
              <li>List comprehensions and generators</li>
            </ul>
          </div>
        </div>

        {/* Module 3 */}
        <div className="col-md-6">
          <div className="syllabus-card">
            <h5><i className="bi bi-megaphone"></i> Data Analysis with Python</h5>
            <ul>
              <li>NumPy for numerical computing</li>
              <li>Pandas for data manipulation</li>
              <li>Matplotlib and Seaborn for visualization</li>
              <li>Data cleaning and preprocessing</li>
            </ul>
          </div>
        </div>

        {/* Module 4 */}
        <div className="col-md-6">
          <div className="syllabus-card">
            <h5><i className="bi bi-cash-stack"></i> Web Development</h5>
            <ul>
              <li>Flask/Django basics</li>
              <li>RESTful API development</li>
              <li>Database integration (SQLAlchemy)</li>
              <li>Authentication and authorization</li>
            </ul>
          </div>
        </div>

        {/* Module 5 */}
        <div className="col-md-6">
          <div className="syllabus-card">
            <h5><i className="bi bi-envelope-paper"></i> AI & Machine Learning</h5>
            <ul>
              <li>Scikit-learn fundamentals</li>
              <li>TensorFlow/PyTorch basics</li>
              <li>Supervised learning (regression, classification)</li>
              <li>Unsupervised learning (clustering)</li>
            </ul>
          </div>
        </div>

        {/* Module 6 */}
        <div className="col-md-6">
          <div className="syllabus-card">
            <h5><i className="bi bi-graph-up-arrow"></i> Advanced AI Tools</h5>
            <ul>
              <li>OpenAI API integration</li>
              <li>LangChain for AI applications</li>
              <li>Streamlit for AI dashboards</li>
              <li>Hugging Face transformers</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SyllabusSection;