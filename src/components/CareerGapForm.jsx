import React, { useState } from "react";
import {
    FaUser, FaEnvelope, FaPhone, FaVenusMars,
    FaClock, FaQuestionCircle, FaAlignLeft,
    FaTools, FaBriefcase, FaBuilding, FaIdBadge,
    FaFileUpload
} from "react-icons/fa";

import "bootstrap/dist/css/bootstrap.min.css";

const CareerGapForm = () => {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        mobile: "",
        declaration: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        // ✅ FULL NAME (ONLY CHARACTERS + SPACE)
        if (name === "fullName") {
            if (!/^[a-zA-Z\s]*$/.test(value)) return;
        }

        // ✅ EMAIL VALIDATION (basic format)
        if (name === "email") {
            setFormData({
                ...formData,
                [name]: value
            });
            return;
        }

        // ✅ MOBILE VALIDATION (ONLY 10 DIGITS)
        if (name === "mobile") {
            if (!/^\d{0,10}$/.test(value)) return;
        }

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // ✅ NAME VALIDATION
        if (!/^[a-zA-Z\s]+$/.test(formData.fullName)) {
            alert("Full Name should contain only letters");
            return;
        }

        // ✅ EMAIL VALIDATION (ONLY GMAIL ALLOWED)
        if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.email)) {
            alert("Email must be a valid Gmail address (example@gmail.com)");
            return;
        }

        // ✅ MOBILE VALIDATION
        if (formData.mobile.length !== 10) {
            alert("Mobile number must be exactly 10 digits");
            return;
        }

        // ✅ DECLARATION CHECK
        if (!formData.declaration) {
            alert("Please accept declaration");
            return;
        }

        alert("Form submitted successfully!");
    };

    return (
        <div className="container py-5">

            <div className="registration-container">

                <div className="text-center mb-4">
                    <h3 className="main-title">Career Gap Registration</h3>
                </div>

                <form onSubmit={handleSubmit}>

                    {/* PERSONAL DETAILS */}
                    <div className="form-section">
                        <h5>Personal Details</h5>

                        <div className="row g-3">
                            <div className="col-md-6">
                                <label><FaUser /> Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>

                            <div className="col-md-6">
                                <label><FaEnvelope /> Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>

                            <div className="col-md-6">
                                <label><FaPhone /> Mobile Number</label>
                                <input
                                    type="text"
                                    name="mobile"
                                    value={formData.mobile}
                                    className="form-control"
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="col-md-6">
                                <label><FaVenusMars /> Gender</label>
                                <select className="form-control">
                                    <option>Select</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* GAP INFO */}
                    <div className="form-section">
                        <h5>Career Gap Information</h5>

                        <div className="row g-3">
                            <div className="col-md-6">
                                <label><FaClock /> Gap Duration</label>
                                <select className="form-control" required>
                                    <option value="">Select</option>
                                    {[...Array(11).keys()].map(i => (
                                        <option key={i}>{i} Year{i > 1 && "s"}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label><FaQuestionCircle /> Reason for Gap</label>
                                <select className="form-control" required>
                                    <option>Select</option>
                                    <option>Higher Studies</option>
                                    <option>Health Issues</option>
                                    <option>Family Responsibilities</option>
                                    <option>Career Break</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="col-12">
                                <label><FaAlignLeft /> Brief Explanation</label>
                                <textarea className="form-control" rows="3"></textarea>
                            </div>
                        </div>
                    </div>

                    {/* SKILLS */}
                    <div className="form-section">
                        <h5>Skills & Experience</h5>

                        <div className="row g-3">
                            <div className="col-md-6">
                                <label><FaTools /> Primary Skills</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="col-md-6">
                                <label><FaBriefcase /> Experience</label>
                                <input type="number" className="form-control" />
                            </div>

                            <div className="col-md-6">
                                <label><FaBuilding /> Last Organization</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="col-md-6">
                                <label><FaIdBadge /> Last Designation</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                    </div>

                    {/* RESUME */}
                    <div className="form-section">
                        <h5>Resume Upload</h5>

                        <div className="row">
                            <div className="col-12">
                                <label><FaFileUpload /> Upload Resume (PDF only)</label>
                                <input type="file" accept=".pdf" className="form-control" required />
                            </div>
                        </div>
                    </div>

                    {/* DECLARATION */}
                    <div className="form-section">
                        <h5>Declaration</h5>

                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="declaration"
                                onChange={handleChange}
                            />
                            <label className="form-check-label">
                                I hereby declare that all the details provided above are true to the best of my knowledge. I understand that providing any false information may lead to disqualification from the hiring process. I further agree to provide any necessary documentation to verify the details mentioned in this portal.
                            </label>
                        </div>
                    </div>

                    <div className="text-center mt-4">
                        <button
                            className="btn btn-primary px-4 py-2"
                            disabled={!formData.declaration}
                        >
                            Submit Registration
                        </button>
                    </div>

                </form>
            </div>

            {/* CSS */}
            <style>{`
        body {
          background-color: #f8f9fa;
        }

        .registration-container {
          background: #fff;
          border-radius: 15px;
          padding: 30px 40px;
          box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
          max-width: 900px;
          margin: auto;
        }

        .main-title {
          background: #000;
          color: #fff;
          padding: 10px 20px;
          border-radius: 6px;
          display: inline-block;
        }

        .form-section {
          margin-bottom: 30px;
        }

        .form-section h5 {
          color: #00A5EC;
          border-bottom: 2px solid #00A5EC;
          padding-bottom: 6px;
          margin-bottom: 15px;
          font-weight: 600;
        }

        label {
          font-weight: 500;
          margin-bottom: 5px;
          display: block;
        }

        label svg {
          margin-right: 6px;
          color: #00A5EC;
        }

        .form-control {
          border-radius: 8px;
        }

        @media (max-width: 576px) {
          .registration-container {
            padding: 20px;
          }
        }

        @media (min-width: 1200px) {
          .registration-container {
            max-width: 1000px;
          }
        }
      `}</style>

        </div>
    );
};

export default CareerGapForm;