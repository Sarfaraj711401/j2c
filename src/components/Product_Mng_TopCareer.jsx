import React from "react";
import "./Product_Mng_TopCareer.css";

const Product_Mng_TopCareer = () => {
  return (
    <section className="cr-career-section">
      <h2 className="cr-career-title">
        Top career options in Product Management Placement Course
      </h2>

      <div className="cr-career-container">

        <div className="cr-career-card">
          <img src="/images/GrowthProduct.webp" alt="Growth Manager" className="cr-career-icon" />
          <h3>Growth Manager</h3>
          <p>
            Enhance every phase of the customer journey, from acquisition to retention.
          </p>
        </div>

        <div className="cr-career-card">
          <img src="/images/Product_Manager.webp" alt="Valuation Analyst" className="cr-career-icon" />
          <h3>Valuation Analyst</h3>
          <p>
            Perform valuations for mergers, acquisitions, and key financial reporting needs.
          </p>
        </div>

        <div className="cr-career-card">
          <img src="/images/ProductMarketing.webp" alt="Product Marketing" className="cr-career-icon" />
          <h3>Product Marketing</h3>
          <p>
            Combine product management and marketing to define and execute a product's strategy.
          </p>
        </div>

        <div className="cr-career-card">
          <img src="/images/Product_Manager.webp" alt="Product Manager" className="cr-career-icon" />
          <h3>Product Manager</h3>
          <p>
            Known as 'mini CEOs,' they align customer needs with business goals and execute product vision.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Product_Mng_TopCareer;