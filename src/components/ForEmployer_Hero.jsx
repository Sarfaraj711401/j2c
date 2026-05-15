import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./ForEmployer_Hero.css";

const ForEmployer_Hero = () => {

  const [formData, setFormData] = useState({
    emailId: "",
    password: "",
    firstName: "",
    mobileNumber: ""
  });

  const [errors, setErrors] = useState({});

  const clientId = "465339577351-p69vdttuusb9579ld9g4cna876kiae87.apps.googleusercontent.com";
  const redirectUri = "https://j2c.in/googleCallback";
  const type = "employer";

  const oauthURL =
    "https://accounts.google.com/o/oauth2/v2/auth" +
    "?scope=email%20profile" +
    "&access_type=offline" +
    "&include_granted_scopes=true" +
    "&response_type=code" +
    "&state=" + encodeURIComponent(type) +
    "&redirect_uri=" + encodeURIComponent(redirectUri) +
    "&client_id=" + clientId;

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Prevent invalid typing (live restriction)
    if (name === "firstName" && /[^a-zA-Z\s]/.test(value)) return;
    if (name === "mobileNumber" && /[^0-9]/.test(value)) return;

    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};

    // EMAIL VALIDATION
    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.emailId)) {
      newErrors.emailId = "Email must be a valid @gmail.com address";
    }

    // PASSWORD VALIDATION
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(
        formData.password
      )
    ) {
      newErrors.password =
        "Password must be 8+ chars with uppercase, lowercase, number & special character";
    }

    // NAME VALIDATION
    if (!/^[A-Za-z\s]+$/.test(formData.firstName)) {
      newErrors.firstName = "Name must contain only letters";
    }

    // MOBILE VALIDATION
    if (!/^[0-9]{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Mobile must be exactly 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted:", formData);
    }
  };

  return (
    <section className="femp-hero-wrap">
      <div className="femp-container">

        <div className="femp-hero-left">
          <div className="femp-hero-badge">
            AI-driven hiring platform for early talent
          </div>

          <h1 className="femp-hero-title">
            Hire interns & fresh talent <span>faster</span>
          </h1>

          <div className="femp-hero-info">
            <p>✔ Shorten hiring cycles with intelligent screening</p>
            <p>✔ Access candidates from leading institutions nationwide</p>
          </div>

          <div className="femp-hero-metrics">
            <div className="femp-metric">
              <div className="num">32M+</div>
              <div className="lbl">Candidate Profiles</div>
            </div>
            <div className="femp-metric">
              <div className="num">100K+</div>
              <div className="lbl">Hiring Partners</div>
            </div>
            <div className="femp-metric">
              <div className="num">900+</div>
              <div className="lbl">Cities Covered</div>
            </div>
          </div>
        </div>

        <aside className="femp-hero-right">
          <div className="femp-card">

            <a href={oauthURL}>
              <button className="femp-google-btn" type="button">
                <img src="https://www.svgrepo.com/show/355037/google.svg" alt="google" />
                Sign up with Google
              </button>
            </a>

            <div className="femp-divider">OR</div>

            <form onSubmit={handleSubmit}>

              <label>Official Email Id</label>
              <input
                type="email"
                name="emailId"
                value={formData.emailId}
                onChange={handleChange}
                placeholder="Enter your official email"
                required
              />
              {errors.emailId && <p className="femp-error-text">{errors.emailId}</p>}

              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
              {errors.password && <p className="femp-error-text">{errors.password}</p>}

              <label>Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter Your Name"
                required
              />
              {errors.firstName && <p className="femp-error-text">{errors.firstName}</p>}

              <label>Mobile Number</label>
              <div className="femp-mobile-box">
                <span>+91</span>
                <input
                  type="text"
                  name="mobileNumber"
                  maxLength="10"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  placeholder="Enter Mobile Number"
                  required
                />
              </div>
              {errors.mobileNumber && <p className="femp-error-text">{errors.mobileNumber}</p>}

              <p className="femp-small-muted">
                By clicking on <b>Post for Free</b>, you agree to our <a href="#">T&C</a>.
              </p>

              <button className="femp-submit-btn" type="submit">
                Post for Free
              </button>

              <p className="femp-login-note">
                Already registered? <Link to="/login-form">Login</Link>
              </p>

            </form>

          </div>
        </aside>

      </div>
    </section>
  );
};

export default ForEmployer_Hero;