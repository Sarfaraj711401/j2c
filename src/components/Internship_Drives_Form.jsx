import React, { useState } from "react";
import "./Internship_Drives_Form.css";

const Internship_Drives_Form = () => {

  const [form, setForm] = useState({
    fullName: "",
    mobile: "",
    email: "",
    college: "",
    course: "",
    passingYear: "",
    domains: [],
    terms: false,
  });

  const [errors, setErrors] = useState({});

  // ================= HANDLE INPUT =================
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // ✅ FULL NAME & COLLEGE → ONLY LETTERS
    if (name === "fullName" || name === "college") {
      if (!/^[A-Za-z\s]*$/.test(value)) return;
    }

    // ✅ MOBILE → ONLY DIGITS
    if (name === "mobile") {
      if (!/^\d*$/.test(value)) return;
    }

    // ✅ DOMAIN CHECKBOX
    if (name === "domains") {
      let updatedDomains = [...form.domains];

      if (checked) {
        updatedDomains.push(value);
      } else {
        updatedDomains = updatedDomains.filter((d) => d !== value);
      }

      setForm({ ...form, domains: updatedDomains });
      return;
    }

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // ================= VALIDATIONS =================
  const isMobileValid = form.mobile.length === 10;
  const isEmailValid = form.email.endsWith("@gmail.com");
  const isFormValid =
    form.fullName &&
    form.college &&
    form.email &&
    isEmailValid &&
    isMobileValid &&
    form.terms;

  // ================= SUBMIT =================
  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!isMobileValid) {
      newErrors.mobile = "Mobile must be exactly 10 digits";
    }

    if (!isEmailValid) {
      newErrors.email = "Email must end with @gmail.com";
    }

    if (!form.fullName) {
      newErrors.fullName = "Full Name is required";
    }

    if (!form.college) {
      newErrors.college = "College is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    console.log(form);
    alert("Form Submitted Successfully 🚀");
  };

  return (
    <section className="cta-section" id="register">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">

            {/* HEADER */}
            <div className="cta-card text-center mb-5">
              <h2 className="display-5 fw-bold mb-4">
                Ready to Kickstart Your Career?
              </h2>
              <p className="lead mb-5 opacity-90">
                Join 20,000+ students who got placed through our internship drives
              </p>
            </div>

            {/* FORM CARD */}
            <div className="cta-card p-0">
              <div className="row g-0">

                {/* LEFT SIDE */}
                <div className="col-md-6 cta-left-panel d-none d-md-block">
                  <div className="text-center p-5">
                    <i className="fas fa-graduation-cap fa-4x mb-4 text-primary"></i>
                    <h3 className="fw-bold mb-3">Why Register Today?</h3>
                    <ul className="list-unstyled text-start">
                      <li className="mb-3">✔ Priority shortlisting</li>
                      <li className="mb-3">✔ Free preparation resources</li>
                      <li className="mb-3">✔ Personalized drive matching</li>
                      <li className="mb-3">✔ Guaranteed interview calls</li>
                    </ul>
                  </div>
                </div>

                {/* RIGHT SIDE FORM */}
                <div className="col-md-6 p-5">
                  <h4 className="fw-bold mb-4 text-center text-dark">
                    Complete Registration (2 mins)
                  </h4>

                  <form onSubmit={handleSubmit}>

                    {/* NAME + MOBILE */}
                    <div className="row g-3 mb-4">
                      <div className="col-md-6">
                        <label className="form-label">Full Name *</label>
                        <input
                          type="text"
                          className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
                          name="fullName"
                          value={form.fullName}
                          onChange={handleChange}
                          required
                        />
                        {errors.fullName && (
                          <small className="text-danger">{errors.fullName}</small>
                        )}
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">Mobile Number *</label>
                        <input
                          type="text"
                          className={`form-control ${form.mobile && !isMobileValid ? "is-invalid" : ""}`}
                          name="mobile"
                          value={form.mobile}
                          onChange={handleChange}
                          maxLength={10}
                          required
                        />
                        {form.mobile && !isMobileValid && (
                          <small className="text-danger">Enter exactly 10 digits</small>
                        )}
                      </div>
                    </div>

                    {/* EMAIL + COLLEGE */}
                    <div className="row g-3 mb-4">
                      <div className="col-md-6">
                        <label className="form-label">Email *</label>
                        <input
                          type="email"
                          className={`form-control ${errors.email ? "is-invalid" : ""}`}
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                        {errors.email && (
                          <small className="text-danger">{errors.email}</small>
                        )}
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">College *</label>
                        <input
                          type="text"
                          className={`form-control ${errors.college ? "is-invalid" : ""}`}
                          name="college"
                          value={form.college}
                          onChange={handleChange}
                          required
                        />
                        {errors.college && (
                          <small className="text-danger">{errors.college}</small>
                        )}
                      </div>
                    </div>

                    {/* COURSE + YEAR */}
                    <div className="row g-3 mb-4">
                      <div className="col-md-6">
                        <label className="form-label">Course *</label>
                        <select className="form-select" name="course" onChange={handleChange} required>
                          <option value="">Select</option>
                          <option>B.Tech</option>
                          <option>BCA</option>
                          <option>MBA</option>
                        </select>
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">Passing Year *</label>
                        <select className="form-select" name="passingYear" onChange={handleChange} required>
                          <option value="">Select</option>
                          <option>2026</option>
                          <option>2027</option>
                          <option>2028</option>
                        </select>
                      </div>
                    </div>

                    {/* DOMAINS */}
                    <div className="mb-4">
                      <label className="form-label">Preferred Domains *</label>
                      <div className="checkbox-group">
                        <div className="row">
                          <div className="col-6">
                            {["Digital Marketing", "HR Management"].map((d) => (
                              <div className="form-check" key={d}>
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="domains"
                                  value={d}
                                  onChange={handleChange}
                                />
                                <label className="form-check-label">{d}</label>
                              </div>
                            ))}
                          </div>

                          <div className="col-6">
                            {["Supply Chain", "IT/Software", "Others"].map((d) => (
                              <div className="form-check" key={d}>
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="domains"
                                  value={d}
                                  onChange={handleChange}
                                />
                                <label className="form-check-label">{d}</label>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* TERMS */}
                    <div className="mb-4 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name="terms"
                        onChange={handleChange}
                      />
                      <label className="form-check-label small">
                        I agree to receive updates via WhatsApp/Email/SMS
                      </label>
                    </div>

                    {/* BUTTON */}
                    <button
                      type="submit"
                      className="btn btn-gradient mb-4"
                      disabled={!isFormValid}
                    >
                      Register Now & Get Selected!
                    </button>
                  </form>

                  <div className="privacy-note">
                    <strong>100% Free & Secure:</strong> Your data is safe.
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship_Drives_Form;