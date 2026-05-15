import React from "react";
import "./Staffing_WhyJ2C.css";

const Staffing_WhyJ2C = () => {
  return (
    <section className="j2c-compare-section">
      <div className="j2c-compare-container">

        {/* Heading */}
        <div className="j2c-compare-header">
          <h2>Why J2C vs. Traditional Agencies</h2>
        </div>

        {/* Table */}
        <div className="j2c-table-wrapper">
          <table className="j2c-table">

            <thead>
              <tr>
                <th>Feature</th>
                <th className="highlight">J2C Staffing</th>
                <th>Others</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Time to Hire</td>
                <td className="highlight">5 - 7 Days</td>
                <td>30 - 45 Days</td>
              </tr>

              <tr>
                <td>Candidate Verification</td>
                <td className="highlight">AI + Human Vetted</td>
                <td>Resume Forwarding</td>
              </tr>

              <tr>
                <td>Cost Structure</td>
                <td className="highlight">Success Based</td>
                <td>Retainer Fees</td>
              </tr>

              <tr>
                <td>Replacement Guarantee</td>
                <td className="highlight">90 Days</td>
                <td>15 Days</td>
              </tr>
            </tbody>

          </table>
        </div>

        {/* Mobile Note */}
        <p className="mobile-note">Swipe left to view more →</p>

      </div>
    </section>
  );
};

export default Staffing_WhyJ2C;