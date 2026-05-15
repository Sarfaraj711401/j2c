import React, { useState } from "react";
import "./WorkshopForm.css";

const WorkshopForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    year: ""
  });

  const [errors, setErrors] = useState({});

  // HANDLE INPUT CHANGE (BLOCK INVALID INPUT)
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Only allow letters + space
    if (name === "name" || name === "college") {
      const regex = /^[A-Za-z\s]*$/;
      if (!regex.test(value)) return;
    }

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // BLOCK INVALID PASTE
  const handlePaste = (e, field) => {
    const pasteData = e.clipboardData.getData("text");

    if (field === "name" || field === "college") {
      if (!/^[A-Za-z\s]+$/.test(pasteData)) {
        e.preventDefault();
      }
    }
  };

  // VALIDATION
  const validate = () => {
    let newErrors = {};

    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!nameRegex.test(formData.name)) {
      newErrors.name = "Full name must contain only letters";
    }

    if (!nameRegex.test(formData.college)) {
      newErrors.college = "College name must contain only letters";
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter valid Gmail (example@gmail.com)";
    }

    if (!formData.year) {
      newErrors.year = "Please select your year";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Application Submitted Successfully ✅");
      console.log(formData);
    }
  };

  return (
    <section className="workshop-form-section" id="apply">
      <div className="workshop-form-container">
        <h2>How to Apply</h2>
        <p className="workshop-form-desc">
          Fill the registration form
        </p>

        <form className="workshop-form" onSubmit={handleSubmit}>
          
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            onPaste={(e) => handlePaste(e, "name")}
          />
          {errors.name && <span className="form-error">{errors.name}</span>}

          <input
            type="text"
            name="college"
            placeholder="College Name"
            value={formData.college}
            onChange={handleChange}
            onPaste={(e) => handlePaste(e, "college")}
          />
          {errors.college && <span className="form-error">{errors.college}</span>}

          <input
            type="email"
            name="email"
            placeholder="Email (only @gmail.com)"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="form-error">{errors.email}</span>}

          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
          >
            <option value="">Select Year</option>
            <option>1st Year</option>
            <option>2nd Year</option>
            <option>3rd Year</option>
            <option>4th Year</option>
          </select>
          {errors.year && <span className="form-error">{errors.year}</span>}

          <button type="submit">Submit Application</button>
        </form>
      </div>
    </section>
  );
};

export default WorkshopForm;