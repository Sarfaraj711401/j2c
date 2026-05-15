import React, { useState } from "react";
import "./UI_UX_Hero.css";

const Product_Management_Hero = () => {
  const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const form = e.target;
      const fullName = form.fullName.value.trim();
      const email = form.email.value.trim();
      const mobile = form.mobile.value.trim();
  
      // Full Name validation (no numbers)
      if (!/^[A-Za-z\s]+$/.test(fullName)) {
        setMessage("Full Name should contain only letters");
        setMessageType("error");
        return;
      }
  
      // Phone validation (exactly 10 digits)
      if (!/^\d{10}$/.test(mobile)) {
        setMessage("Phone number must be exactly 10 digits");
        setMessageType("error");
        return;
      }
  
      // Email validation (must be @gmail.com)
      if (email && !/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
        setMessage("Email must be a valid @gmail.com address");
        setMessageType("error");
        return;
      }
  
      // Success
      setMessage("Form submitted successfully!");
      setMessageType("success");
  
      setTimeout(() => {
        setMessage("");
      }, 3000);
  
      form.reset();
    };

  return (
    <section className="uiux-page">

      <section className="hero-section">

        {/* LEFT CONTENT */}
        <div className="hero-left">
          <div className="badges">
            <span>Government-certified</span>
            <span>★ 5</span>
          </div>

          <h1>
            Product Management Placement Course with AI
            <span className="update-tag">Updated in May’ 25</span>
          </h1>

          <ul>
            <li>Get placed with ₹3-10 LPA salary</li>
            <li>Course fee refund if not placed</li>
          </ul>

          <div className="hero-card">
            <h3>6 months online course with LIVE sessions</h3>

            <div className="hero-card-box">
              <div className="hero-col">
                <p>Batch starts on</p>
                <h2>29th Dec</h2>
                <span className="tag yellow">Limited seats</span>
              </div>

              <div className="hero-col">
                <p>Course Fee</p>
                <h2>
                  ₹35,999 <span className="strike">₹40,000</span>
                </h2>
                <span className="tag green">Save ₹ 4,001</span>
              </div>
            </div>
          </div>

          <div className="partner-box">
            <p>Our learners get placed at</p>
            <span className="logo-pill">SAMSUNG</span>
            <span className="logo-pill">XTO10X</span>
            <span className="logo-pill">Haptik</span>
            <span className="logo-pill">+250 more hiring partners</span>
          </div>
        </div>

         {/* RIGHT FORM */}
        <div className="hero-form">

          {/* ALERT */}
          {message && (
            <div
              className={`alert ${
                messageType === "success"
                  ? "alert-success"
                  : "alert-danger"
              }`}
            >
              {message}
              <button
                type="button"
                className="btn-close"
                onClick={() => setMessage("")}
              >
                ×
              </button>
            </div>
          )}

          <h3>Interested? Apply Now</h3>

          <form onSubmit={handleSubmit}>
            <input type="hidden" name="courseName" value="UI/UX" />

            {/* Full Name */}
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter Full name"
              required
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, "");
              }}
            />

            {/* Email */}
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Gmail address"
            />

            {/* Phone */}
            <label>Phone number</label>
            <input
              type="text"
              name="mobile"
              placeholder="Enter 10 digit number"
              maxLength="10"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              }}
              required
            />

            {/* Education */}
            <label>Education</label>
            <select name="branch" required>
              <option value="">Select degree</option>
              <option>B.Tech</option>
              <option>B.Sc</option>
              <option>BCA</option>
              <option>MCA</option>
              <option>M.Tech</option>
            </select>

            {/* Year */}
            <label>Graduation Year</label>
            <select name="graduationYear" required>
              <option value="">Select year</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
              <option>2027</option>
              <option>2028</option>
            </select>

            <button className="apply-btn">Apply now</button>
          </form>
        </div>

      </section>
    </section>
  );
};

export default Product_Management_Hero;