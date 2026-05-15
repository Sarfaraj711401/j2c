import React from "react";
import "./WorkshopExtra.css";

const WorkshopExtra = () => {
  return (
    <>
      {/* HOW IT WORKS */}
      <section className="workshop-extra-section">
        <div className="workshop-extra-container">
          <h2>How It Works</h2>
          <p className="workshop-extra-desc">
            Simple step-by-step process
          </p>

          <div className="workshop-timeline">
            <div className="workshop-step">1️⃣ Apply online</div>
            <div className="workshop-step">2️⃣ Attend live training</div>
            <div className="workshop-step">3️⃣ Complete projects</div>
            <div className="workshop-step">4️⃣ Get certified</div>
          </div>
        </div>
      </section>

      {/* RECOGNITION */}
      <section className="workshop-extra-section">
        <div className="workshop-extra-container">
          <div className="workshop-highlight">
            <h2>Join the Best. Be Recognized.</h2>
            <p>Top performers get internships & rewards.</p>

            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Recognition"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="workshop-extra-section workshop-extra-light">
        <div className="workshop-extra-container">
          <h2>Frequently Asked Questions</h2>

          <details className="workshop-faq">
            <summary>Who can apply?</summary>
            <p>Any college student from any stream.</p>
          </details>

          <details className="workshop-faq">
            <summary>Is it online?</summary>
            <p>Yes, fully online with live & recorded sessions.</p>
          </details>

          <details className="workshop-faq">
            <summary>Will I get a certificate?</summary>
            <p>Yes, after successful completion.</p>
          </details>
        </div>
      </section>
    </>
  );
};

export default WorkshopExtra;