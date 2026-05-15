import React, { useState } from "react";
import "./TpoRegistration.css";

const TpoRegistration = () => {

  const [form, setForm] = useState({
    college: "",
    tpoName: "",
    email: "",
    mobile: "",
    designation: "Training & Placement Officer",
    state: "",
    city: "",
    address: "",
    password: "",
    confirmPassword: ""
  });

  // Handle input
  const handleChange = (e) => {
    const { name, value } = e.target;

    // NAME VALIDATION (only letters & spaces)
    if (name === "college" || name === "tpoName") {
      if (!/^[a-zA-Z\s]*$/.test(value)) return;
    }

    // MOBILE VALIDATION (only digits, max 10)
    if (name === "mobile") {
      if (!/^[0-9]*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setForm({ ...form, [name]: value });
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.mobile.length !== 10) {
      alert("Mobile number must be exactly 10 digits");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("TPO Registered Successfully!");
  };

  return (
    <section className="pp-tpo-registration">
      <div className="pp-tpo-card">

        <h2>College TPO Registration</h2>
        <p>Register your Training & Placement Officer</p>

        <form onSubmit={handleSubmit}>

          <div className="pp-tpo-form-grid">

            <div className="pp-tpo-group">
              <label>College Name</label>
              <input
                type="text"
                name="college"
                placeholder="Enter College Name"
                value={form.college}
                onChange={handleChange}
                required
              />
            </div>

            <div className="pp-tpo-group">
              <label>TPO Name</label>
              <input
                type="text"
                name="tpoName"
                placeholder="Enter TPO Full Name"
                value={form.tpoName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="pp-tpo-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="pp-tpo-group">
              <label>Mobile</label>
              <input
                type="tel"
                name="mobile"
                placeholder="Enter Mobile Number"
                value={form.mobile}
                onChange={handleChange}
                required
              />
            </div>

            <div className="pp-tpo-group">
              <label>Designation</label>
              <input
                type="text"
                name="designation"
                value={form.designation}
                readOnly
              />
            </div>

            <div className="pp-tpo-group">
              <label>State</label>
              <input
                type="text"
                name="state"
                placeholder="State"
                value={form.state}
                onChange={handleChange}
                required
              />
            </div>

            <div className="pp-tpo-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className="pp-tpo-group pp-full-width">
              <label>College Address</label>
              <textarea
                name="address"
                placeholder="Enter College Address"
                value={form.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="pp-tpo-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Create Password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="pp-tpo-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <button type="submit" className="pp-tpo-btn">
            Register TPO
          </button>

          <div className="pp-tpo-login">
            Already registered? <a href="#">Login here</a>
          </div>

        </form>

      </div>
    </section>
  );
};

export default TpoRegistration;