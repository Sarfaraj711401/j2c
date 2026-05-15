import React from "react";
import "./CampusFAQ.css";

const CampusFAQ = () => {
  return (
    <section className="campus-faq">
      <div className="campus-faq__container">

        {/* HEADER */}
        <div className="campus-faq__header">
          <h2>Frequently Asked Questions</h2>
          <p>
            Everything you need to know about the J2C Campus Ambassador Program.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="campus-faq__list">

          <details className="campus-faq__item">
            <summary>
              <span>Who is eligible to apply?</span>
              <span className="arrow">⌄</span>
            </summary>
            <div className="campus-faq__content">
              We are looking for college students from <strong>any stream or year</strong>
              (Arts, Engineering, Management, Science, etc.) who are currently enrolled
              in a university. You just need a valid College ID card and a passion for leadership!
            </div>
          </details>

          <details className="campus-faq__item">
            <summary>
              <span>What is the selection procedure?</span>
              <span className="arrow">⌄</span>
            </summary>
            <div className="campus-faq__content">
              <ol>
                <li>Fill out the application form.</li>
                <li>Our team reviews your profile.</li>
                <li>Shortlisted candidates receive onboarding within 48 hours.</li>
              </ol>
            </div>
          </details>

          <details className="campus-faq__item">
            <summary>
              <span>Will this affect my college studies?</span>
              <span className="arrow">⌄</span>
            </summary>
            <div className="campus-faq__content">
              Not at all. This is a <strong>work-from-home</strong> role requiring
              only <strong>3–4 hours per week</strong>. Fully flexible.
            </div>
          </details>

          <details className="campus-faq__item">
            <summary>
              <span>Is this a paid program?</span>
              <span className="arrow">⌄</span>
            </summary>
            <div className="campus-faq__content">
              Yes! It is <strong>performance-based</strong>. You can earn stipends,
              vouchers, and rewards.
            </div>
          </details>

          <details className="campus-faq__item">
            <summary>
              <span>Is there any registration fee?</span>
              <span className="arrow">⌄</span>
            </summary>
            <div className="campus-faq__content">
              No. The program is <strong>completely free</strong>.
            </div>
          </details>

        </div>
      </div>
    </section>
  );
};

export default CampusFAQ;