import React from "react";

const ML_SyllabusSection = () => {
  return (
    <section className="container syllabus-section my-5">

      <h2 className="syllabus-title text-center mb-5">
        Machine Learning Course with AI – Syllabus
      </h2>

      <div className="row g-4">

        {/* Module 1 */}
        <div className="col-md-6">
          <div className="syllabus-card">
            <h5><i className="bi bi-book"></i> Introduction to AI & Machine Learning</h5>
            <ul>
              <li>Overview of Artificial Intelligence</li>
              <li>Machine Learning vs AI vs Data Science</li>
              <li>Types of Machine Learning</li>
              <li>Real-world applications</li>
            </ul>
          </div>
        </div>

        {/* Module 2 */}
        <div className="col-md-6">
          <div className="syllabus-card">
            <h5><i className="bi bi-book"></i> Python for Machine Learning</h5>
            <ul>
              <li>Python basics</li>
              <li>NumPy & Pandas</li>
              <li>Data visualization</li>
              <li>Working with datasets</li>
            </ul>
          </div>
        </div>

        {/* Module 3 */}
        <div className="col-md-6">
          <div className="syllabus-card">
            <h5><i className="bi bi-book"></i> Data Preprocessing & Feature Engineering</h5>
            <ul>
              <li>Data cleaning</li>
              <li>Encoding categorical data</li>
              <li>Feature scaling</li>
              <li>Train-test split</li>
            </ul>
          </div>
        </div>

        {/* Module 4 */}
        <div className="col-md-6">
          <div className="syllabus-card">
            <h5><i className="bi bi-book"></i> Supervised Learning</h5>
            <ul>
              <li>Linear Regression</li>
              <li>Logistic Regression</li>
              <li>K-Nearest Neighbors (KNN)</li>
              <li>Decision Trees</li>
            </ul>
          </div>
        </div>

        {/* Module 5 */}
        <div className="col-md-6">
          <div className="syllabus-card">
            <h5><i className="bi bi-book"></i> Unsupervised Learning</h5>
            <ul>
              <li>Clustering concepts</li>
              <li>K-Means</li>
              <li>Hierarchical clustering</li>
              <li>Principal Component Analysis (PCA)</li>
            </ul>
          </div>
        </div>

        {/* Module 6 */}
        <div className="col-md-6">
          <div className="syllabus-card">
            <h5><i className="bi bi-book"></i> Model Evaluation & Optimization</h5>
            <ul>
              <li>Performance metrics</li>
              <li>Confusion matrix</li>
              <li>Overfitting & underfitting</li>
              <li>Cross-validation</li>
            </ul>
          </div>
        </div>

        {/* Module 7 */}
        <div className="col-md-6">
          <div className="syllabus-card">
            <h5><i className="bi bi-book"></i> Neural Networks & Deep Learning Basics</h5>
            <ul>
              <li>Introduction to neural networks</li>
              <li>Activation functions</li>
              <li>Deep learning overview</li>
              <li>TensorFlow / PyTorch introduction</li>
            </ul>
          </div>
        </div>

        {/* Module 8 */}
        <div className="col-md-6">
          <div className="syllabus-card">
            <h5><i className="bi bi-book"></i> AI Applications</h5>
            <ul>
              <li>Natural Language Processing (NLP) basics</li>
              <li>Computer Vision overview</li>
              <li>Recommendation systems</li>
              <li>Chatbots introduction</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ML_SyllabusSection;