import React, { useState } from "react";
import "./Campus_Hiring_Apply.css";

const Campus_Hiring_Apply = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    college: "",
    year: "",
    agree: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    let { name, value, type, checked } = e.target;

    // NAME & COLLEGE → ONLY LETTERS
    if (name === "name" || name === "college") {
      value = value.replace(/[^A-Za-z\s]/g, "");
    }

    // MOBILE → ONLY NUMBERS (MAX 10)
    if (name === "mobile") {
      value = value.replace(/[^0-9]/g, "").slice(0, 10);
    }

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Name must contain only letters";
    }

    if (!/^[A-Za-z\s]+$/.test(formData.college)) {
      newErrors.college = "College name must contain only letters";
    }

    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.email)) {
      newErrors.email = "Only valid Gmail allowed (example@gmail.com)";
    }

    if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter valid 10-digit mobile number";
    }

    if (!formData.year) {
      newErrors.year = "Select graduation year";
    }

    if (!formData.agree) {
      newErrors.agree = "You must accept terms";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Application Submitted Successfully 🚀");
      console.log(formData);
    }
  };

  return (
    <section className="j2c-apply-section" id="apply">
      <div className="j2c-container j2c-apply-grid">

        {/* LEFT SIDE */}
        <div className="j2c-apply-info">
          <h2>Apply for Campus Hiring 2026</h2>
          <p>
            Register once and get access to <strong>100+ hiring partners</strong>,
            multiple job roles and fast-track interviews.
          </p>

          <ul className="j2c-apply-points">
            <li>✔ Free Registration</li>
            <li>✔ Online Hiring Process</li>
            <li>✔ Fresher Friendly Roles</li>
            <li>✔ Offer Letters up to ₹12 LPA</li>
          </ul>
        </div>

        {/* FORM */}
        <div className="j2c-apply-card">
          <h3>Quick Application Form</h3>

          <form onSubmit={handleSubmit}>

            {/* NAME */}
            <div className="j2c-input-group">
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              <label>Full Name</label>
            </div>
            {errors.name && <span className="j2c-error">{errors.name}</span>}

            {/* EMAIL */}
            <div className="j2c-input-group">
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              <label>Email Address</label>
            </div>
            {errors.email && <span className="j2c-error">{errors.email}</span>}

            {/* MOBILE */}
            <div className="j2c-input-group">
              <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required />
              <label>Mobile Number</label>
            </div>
            {errors.mobile && <span className="j2c-error">{errors.mobile}</span>}

            {/* COLLEGE */}
            <div className="j2c-input-group">
              <input type="text" name="college" value={formData.college} onChange={handleChange} required />
              <label>College Name</label>
            </div>
            {errors.college && <span className="j2c-error">{errors.college}</span>}

            {/* YEAR */}
            <div className="j2c-input-group">
              <select name="year" value={formData.year} onChange={handleChange} required>
                <option value=""></option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
              </select>
              <label>Graduation Year</label>
            </div>
            {errors.year && <span className="j2c-error">{errors.year}</span>}

            {/* CHECKBOX */}
            <div className="j2c-checkbox">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />
              <p>
                I agree to the terms & conditions and allow J2C to contact me regarding job opportunities.
              </p>
            </div>
            {errors.agree && <span className="j2c-error">{errors.agree}</span>}

            {/* BUTTON */}
            <button type="submit" className="j2c-btn-primary full">
              Submit Application 🚀
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Campus_Hiring_Apply;