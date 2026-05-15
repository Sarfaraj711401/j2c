import React, { useState } from "react";
import "./WebinarBottom.css";

const BottomSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    interest: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    let { name, value } = e.target;

    // NAME & COLLEGE → ONLY LETTERS
    if (name === "name") {
      value = value.replace(/[^A-Za-z\s]/g, "");
    }

    // MOBILE → ONLY NUMBERS, MAX 10
    if (name === "mobile") {
      value = value.replace(/[^0-9]/g, "").slice(0, 10);
    }

    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let newErrors = {};

    if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Name must contain only letters";
    }

    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.email)) {
      newErrors.email = "Enter valid Gmail (example@gmail.com)";
    }

    if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter valid 10-digit mobile number";
    }

    if (!formData.interest) {
      newErrors.interest = "Please select your interest";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Registered Successfully ✅");
      console.log(formData);
    }
  };

  return (
    <section className="webinar-bottom">
      <div className="webinar-bottom-wrap">

        {/* LEFT SIDE */}
        <div className="webinar-testimonial">
          <div className="webinar-image-center">
            <img src="/Career_Guidance_Form.png" alt="Webinar" />
          </div>

          <p>
            “This webinar gave me clear direction on whether I should choose
            UI/UX, Data Science, or Full Stack. The roadmap and guidance were
            extremely practical.”
          </p>
          <h4>— Previous Webinar Attendee</h4>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="webinar-form-box">
          <h3>Register Now (Free)</h3>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="webinar-error">{errors.name}</span>}

            <input
              type="email"
              name="email"
              placeholder="Email (only @gmail.com)"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="webinar-error">{errors.email}</span>}

            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
            />
            {errors.mobile && <span className="webinar-error">{errors.mobile}</span>}

            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
            >
              <option value="">Select Your Interest</option>
              <option>UI/UX Design</option>
              <option>Data Science</option>
              <option>Full Stack Development</option>
            </select>
            {errors.interest && <span className="webinar-error">{errors.interest}</span>}

            <button type="submit">Reserve My Seat</button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default BottomSection;