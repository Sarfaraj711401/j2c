import { Link } from "react-router-dom";
import React, { useState } from "react";

const EmailRegister = () => {

  const params = new URLSearchParams(window.location.search);
  const typeParam = params.get("type") || "jobseeker";

  const getDisplayName = (type) => {
    switch (type.toLowerCase()) {
      case "intern":
        return "Intern";
      case "course":
        return "Course";
      case "careergap":
        return "Career Gap";
      default:
        return "Jobseeker";
    }
  };

  const [type] = useState(typeParam);
  const [displayName] = useState(getDisplayName(typeParam));

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirm_password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirm_password) {
      setError("Passwords do not match");
      return;
    }

    fetch("http://localhost:8080/sendOtp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...formData,
        type: type
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(() => {
        setError("Something went wrong");
      });
  };

  return (
    <>
      {/* Internal CSS */}
      <style>
        {`
          body {
            background: #f4f4f4;
          }
          .email-register-page {
            padding-top: 120px;
            min-height: 100vh;
          }
          .box {
            max-width: 450px;
            margin: auto;
            background: #fff;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          }
        `}
      </style>

      <div className="email-register-page">
        <div className="box">
          <h4 className="text-center mb-3">
            Register as {displayName} via Email
          </h4>

          {error && (
            <div className="alert alert-danger text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <input type="hidden" name="type" value={type} />

            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control mb-3"
              required
              onChange={handleChange}
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control mb-3"
              required
              onChange={handleChange}
            />

            <label>Confirm Password</label>
            <input
              type="password"
              name="confirm_password"
              className="form-control mb-3"
              required
              onChange={handleChange}
            />

            <button className="btn btn-primary w-100">
              Continue
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EmailRegister;