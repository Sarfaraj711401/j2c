import React from "react";
import "./AI_and_ML_Syllabus.css";

const AI_and_ML_Syllabus = () => {
  return (
    <section className="container my-5 syllabus-section">
      
      <h2 className="syllabus-title text-center mb-4">
        Artificial Intelligence & Machine Learning Course – Syllabus
      </h2>

      <div className="syllabus-grid">

        {/* Module 1 */}
        <div className="syllabus-card">
          <h5>Module 1: Introduction to AI & ML</h5>
          <ul>
            <li>Understanding Artificial Intelligence & Machine Learning</li>
            <li>Applications of AI in real-world industries</li>
            <li>Types of Machine Learning: Supervised, Unsupervised, Reinforcement Learning</li>
          </ul>
        </div>

        {/* Module 2 */}
        <div className="syllabus-card">
          <h5>Module 2: Python Programming & Libraries</h5>
          <ul>
            <li>Python fundamentals for AI/ML</li>
            <li>Libraries: NumPy, Pandas, Matplotlib, Seaborn</li>
            <li>Data preprocessing and cleaning techniques</li>
          </ul>
        </div>

        {/* Module 3 */}
        <div className="syllabus-card">
          <h5>Module 3: Data Analysis & Visualization</h5>
          <ul>
            <li>Exploratory Data Analysis (EDA)</li>
            <li>Data visualization with Matplotlib & Seaborn</li>
            <li>Feature selection and engineering</li>
          </ul>
        </div>

        {/* Module 4 */}
        <div className="syllabus-card">
          <h5>Module 4: Supervised & Unsupervised Learning</h5>
          <ul>
            <li>Regression: Linear and Polynomial</li>
            <li>Classification: Logistic Regression, Decision Trees, Random Forest</li>
            <li>Clustering: K-Means, Hierarchical Clustering</li>
          </ul>
        </div>

        {/* Module 5 */}
        <div className="syllabus-card">
          <h5>Module 5: Deep Learning</h5>
          <ul>
            <li>Introduction to Neural Networks</li>
            <li>Convolutional Neural Networks (CNN)</li>
            <li>Recurrent Neural Networks (RNN) and LSTM</li>
            <li>Frameworks: TensorFlow & PyTorch</li>
          </ul>
        </div>

        {/* Module 6 */}
        <div className="syllabus-card">
          <h5>Module 6: Natural Language Processing (NLP)</h5>
          <ul>
            <li>Text preprocessing and tokenization</li>
            <li>Sentiment analysis and chatbots</li>
            <li>Language models and transformer architecture</li>
          </ul>
        </div>

        {/* Module 7 */}
        <div className="syllabus-card">
          <h5>Module 7: Computer Vision</h5>
          <ul>
            <li>Image processing fundamentals</li>
            <li>Object detection with YOLO</li>
            <li>Image classification using CNN</li>
          </ul>
        </div>

        {/* Module 8 */}
        <div className="syllabus-card">
          <h5>Module 8: AI Projects & Applications</h5>
          <ul>
            <li>Capstone project to build a real-world AI solution</li>
            <li>Portfolio building and resume guidance</li>
            <li>Placement assistance and career mentorship</li>
          </ul>
        </div>

      </div>

    </section>
  );
};

export default AI_and_ML_Syllabus;