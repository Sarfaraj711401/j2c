import React from "react";
import "./OtherTraining.css";

const OtherTraining = () => {
  return (
    <div className="main-container">
      <div className="container">
        
        <h1 className="section-title">Other In-Demand Trainings</h1>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 card-container">

          {/* Card 1 */}
          <div className="col">
            <div className="training-card position-relative">
              <div className="new-badge">NEW</div>

              <div className="card-icon">
                <i className="fas fa-globe"></i>
              </div>

              <h3 className="card-title">Web Development with AI</h3>

              <div className="card-price">
                ₹1,290 <span className="price-highlight">was ₹2,590</span>
              </div>

              <div className="rating-section">
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <span className="rating-text">(4.9) 2.3K Reviews</span>
              </div>

              <a href="#" className="btn-explore">
                <i className="fas fa-arrow-right me-2"></i> Explore More
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col">
            <div className="training-card position-relative">
              <div className="new-badge">NEW</div>

              <div className="card-icon">
                <i className="fas fa-code"></i>
              </div>

              <h3 className="card-title">
                Programming with Python with AI
              </h3>

              <div className="card-price">
                ₹1,340 <span className="price-highlight">was ₹2,680</span>
              </div>

              <div className="rating-section">
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <span className="rating-text">(4.8) 1.9K Reviews</span>
              </div>

              <a href="#" className="btn-explore">
                <i className="fas fa-arrow-right me-2"></i> Explore More
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col">
            <div className="training-card">

              <div className="card-icon">
                <i className="fas fa-table"></i>
              </div>

              <h3 className="card-title">Advanced Excel with AI</h3>

              <div className="card-price">
                ₹1,340 <span className="price-highlight">was ₹2,680</span>
              </div>

              <div className="rating-section">
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <span className="rating-text">(5.0) 3.1K Reviews</span>
              </div>

              <a href="#" className="btn-explore">
                <i className="fas fa-arrow-right me-2"></i> Explore More
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col">
            <div className="training-card">

              <div className="card-icon">
                <i className="fas fa-drafting-compass"></i>
              </div>

              <h3 className="card-title">AutoCAD Designs</h3>

              <div className="card-price">
                ₹1,480 <span className="price-highlight">was ₹2,960</span>
              </div>

              <div className="rating-section">
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <span className="rating-text">(4.9) 1.7K Reviews</span>
              </div>

              <a href="#" className="btn-explore">
                <i className="fas fa-arrow-right me-2"></i> Explore More
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OtherTraining;