import React, { useState } from "react";
import "./CampusForm.css";

const CampusForm = () => {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        college: "",
        year: "",
        stream: "",
        reason: "",
        agree: false,
    });

    const [errors, setErrors] = useState({});

    // HANDLE CHANGE
    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;

        // NAME & COLLEGE → only characters
        if (id === "name" || id === "college") {
            const filteredValue = value.replace(/[^A-Za-z\s.'()-]/g, "");
            setForm({ ...form, [id]: filteredValue });
            return;
        }

        // PHONE → only numbers + max 10 digits
        if (id === "phone") {
            const onlyNumbers = value.replace(/[^0-9]/g, "");
            const limitedNumber = onlyNumbers.slice(0, 10);
            setForm({ ...form, phone: limitedNumber });
            return;
        }

        // CHECKBOX
        if (type === "checkbox") {
            setForm({ ...form, [id]: checked });
        } else {
            setForm({ ...form, [id]: value });
        }
    };

    // VALIDATION
    const validate = () => {
        let err = {};

        const nameRegex = /^[A-Za-z\s.'()-]+$/;
        const phoneRegex = /^[0-9]{10}$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

        if (!nameRegex.test(form.name)) {
            err.name = "Only alphabets allowed";
        }

        if (!phoneRegex.test(form.phone)) {
            err.phone = "Enter valid 10 digit number";
        }

        if (!emailRegex.test(form.email)) {
            err.email = "Only Gmail allowed";
        }

        if (!nameRegex.test(form.college)) {
            err.college = "Only alphabets allowed";
        }

        if (!form.year) {
            err.year = "Select year";
        }

        if (!form.stream) {
            err.stream = "Select stream";
        }

        if (!form.reason) {
            err.reason = "This field is required";
        }

        if (!form.agree) {
            err.agree = "You must accept terms";
        }

        setErrors(err);
        return Object.keys(err).length === 0;
    };

    // SUBMIT
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Form Submitted Successfully ✅");
        }
    };

    return (
        <section className="af-section">
            <div className="af-container">

                {/* HEADER */}
                <div className="af-header">
                    <h2>Ready to Lead? Apply Now.</h2>
                    <p>Fill in your details below to join the 2026 Campus Ambassador Squad.</p>
                </div>

                {/* FORM CARD */}
                <div className="af-card">
                    <form onSubmit={handleSubmit} className="af-form">

                        {/* ROW 1 */}
                        <div className="af-grid">
                            <div>
                                <label>Full Name</label>
                                <input
                                    id="name"
                                    value={form.name}
                                    placeholder="e.g. Rahul Sharma"
                                    onChange={handleChange}
                                />
                                <span className="af-error">{errors.name}</span>
                            </div>

                            <div>
                                <label>Phone Number</label>
                                <input
                                    id="phone"
                                    value={form.phone}
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    placeholder="9876543210"
                                    onChange={handleChange}
                                />
                                <span className="af-error">{errors.phone}</span>
                            </div>
                        </div>

                        {/* ROW 2 */}
                        <div className="af-grid">
                            <div>
                                <label>Email Address</label>
                                <input
                                    id="email"
                                    value={form.email}
                                    placeholder="rahul@gmail.com"
                                    onChange={handleChange}
                                />
                                <span className="af-error">{errors.email}</span>
                            </div>

                            <div>
                                <label>College Name</label>
                                <input
                                    id="college"
                                    value={form.college}
                                    placeholder="e.g. IIT Delhi"
                                    onChange={handleChange}
                                />
                                <span className="af-error">{errors.college}</span>
                            </div>
                        </div>

                        {/* ROW 3 */}
                        <div className="af-grid">
                            <div>
                                <label>Year of Study</label>
                                <select id="year" value={form.year} onChange={handleChange}>
                                    <option value="">Select Year</option>
                                    <option>1st Year</option>
                                    <option>2nd Year</option>
                                    <option>3rd Year</option>
                                    <option>4th Year</option>
                                </select>
                                <span className="af-error">{errors.year}</span>
                            </div>

                            <div>
                                <label>Stream</label>
                                <select id="stream" value={form.stream} onChange={handleChange}>
                                    <option value="">Select Stream</option>
                                    <option>Engineering</option>
                                    <option>Management</option>
                                    <option>Arts</option>
                                    <option>Science</option>
                                </select>
                                <span className="af-error">{errors.stream}</span>
                            </div>
                        </div>

                        {/* TEXTAREA */}
                        <div>
                            <label>Why do you want to be a Campus Ambassador?</label>
                            <textarea
                                id="reason"
                                value={form.reason}
                                placeholder="Tell us why you are a good fit..."
                                onChange={handleChange}
                            ></textarea>
                            <span className="af-error">{errors.reason}</span>
                        </div>

                        {/* CHECKBOX */}
                        <div className="af-checkbox">
                            <label className="checkbox-wrapper">
                                <input
                                    type="checkbox"
                                    id="agree"
                                    checked={form.agree}
                                    onChange={handleChange}
                                />
                                <span className="custom-check"></span>
                                I agree to Terms & Conditions
                            </label>
                        </div>
                        <span className="af-error">{errors.agree}</span>

                        {/* BUTTON */}
                        <button
                            type="submit"
                            disabled={!form.agree}
                            className={`af-btn ${!form.agree ? "af-disabled" : ""}`}
                        >
                            Submit Application
                        </button>

                    </form>
                </div>
            </div>
        </section>
    );
};

export default CampusForm;