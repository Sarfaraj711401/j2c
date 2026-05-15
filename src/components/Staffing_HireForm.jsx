import React, { useState } from "react";
import "./Staffing_HireForm.css";

const Staffing_HireForm = () => {

  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const handleMobileChange = (e) => {
    const value = e.target.value;

    // Allow only numbers
    if (/^\d*$/.test(value)) {
      setMobile(value);

      // Validate length
      if (value.length > 0 && value.length !== 10) {
        setError("Mobile number must be exactly 10 digits");
      } else {
        setError("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mobile.length !== 10) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }

    setError("");
    alert("Form submitted successfully ✅");
  };

  return (
    <section id="hire-now" className="j2c-hire-section">
      <div className="j2c-container">

        <div className="j2c-hire-card">

          {/* LEFT PANEL */}
          <div className="j2c-hire-left">

            <div>
              <h3>Let's Build Your Dream Team</h3>
              <p>
                Fill the details and our Relationship Manager will call you within 2 hours.
              </p>
            </div>

            <div className="j2c-contact-info">

              <div className="j2c-contact-item">
                <div className="j2c-icon-box">📞</div>
                <span>+91 98765 00000</span>
              </div>

              <div className="j2c-contact-item">
                <div className="j2c-icon-box">✉️</div>
                <span>hiring@j2c.in</span>
              </div>

            </div>

          </div>

          {/* RIGHT PANEL */}
          <div className="j2c-hire-right">

            <form className="j2c-form" onSubmit={handleSubmit}>

              <div className="j2c-grid">

                <div className="j2c-form-group">
                  <label>Company Name</label>
                  <input type="text" placeholder="e.g. Acme Corp" required />
                </div>

                <div className="j2c-form-group">
                  <label>Work Email</label>
                  <input type="email" placeholder="hr@company.com" required />
                </div>

                <div className="j2c-form-group">
                  <label>Contact Person</label>
                  <input type="text" placeholder="Name" required />
                </div>

                <div className="j2c-form-group">
                  <label>Mobile</label>
                  <input
                    type="tel"
                    placeholder="Enter 10 digit number"
                    value={mobile}
                    onChange={handleMobileChange}
                    maxLength="10"
                    required
                  />
                  {error && <span className="j2c-error">{error}</span>}
                </div>

                <div className="j2c-form-group full">
                  <label>Hiring Requirement</label>
                  <select required>
                    <option value="">Select Hiring Need</option>
                    <option>Technical Staff</option>
                    <option>Sales & Marketing</option>
                    <option>Campus/Freshers</option>
                    <option>Executive/Leadership</option>
                  </select>
                </div>

                <div className="full">
                  <button className="j2c-hire-btn">
                    Get a Callback
                  </button>
                </div>

              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Staffing_HireForm;