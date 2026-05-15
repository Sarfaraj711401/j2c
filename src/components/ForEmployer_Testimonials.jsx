import React from "react";
import "./ForEmployer_Testimonials.css";

const ForEmployer_Testimonials = () => {
  return (
    <section className="ForEmployer_Testimonials">
      <div className="femp-test-container">

        <h3 className="femp-test-title">What employers say</h3>

        <div className="femp-test-grid">

          <div className="femp-test-card">
            <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Manish" />
            <strong>Manish N.</strong>
            <p>Quick responses and reliable candidates.</p>
          </div>

          <div className="femp-test-card">
            <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Harikrushna" />
            <strong>Harikrushna</strong>
            <p>Smooth hiring experience.</p>
          </div>

          <div className="femp-test-card">
            <img src="https://randomuser.me/api/portraits/men/23.jpg" alt="Anshul" />
            <strong>Anshul S.</strong>
            <p>Quality applicants in days.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ForEmployer_Testimonials;