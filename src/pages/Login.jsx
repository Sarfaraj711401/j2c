import { Link } from "react-router-dom";
import React, { useState } from 'react';

const Login = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePassword = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <>
            <div style={{
                fontFamily: "'Poppins', sans-serif",
                background: 'linear-gradient(135deg, #E3F2FD, #FDFBFB)',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
            }}>

                {/* CSS */}
                <style>{`
                    .login-wrapper {
                        width: 100%;
                        max-width: 450px; /* 🔥 increased width */
                        background: #ffffff;
                        padding: 45px 40px; /* slightly increased padding */
                        border-radius: 18px;
                        box-shadow: 0 8px 20px rgba(0,0,0,0.08);
                        animation: fadeInUp 0.8s ease;
                    }

                    @keyframes fadeInUp {
                        from { opacity: 0; transform: translateY(30px); }
                        to { opacity: 1; transform: translateY(0); }
                    }

                    .brand {
                        text-align: center;
                        margin-bottom: 25px;
                    }

                    .brand h2 {
                        color: #0078D7;
                        font-weight: 700;
                        letter-spacing: 0.5px;
                    }

                    .brand span {
                        color: #00B4D8;
                    }

                    .login-title {
                        text-align: center;
                        font-weight: 600;
                        margin-bottom: 20px;
                        color: #333;
                    }

                    .form-control {
                        border-radius: 10px;
                        padding: 12px 16px; /* 🔥 slightly bigger inputs */
                        border: 1px solid #d0d0d0;
                    }

                    .form-control:focus {
                        border-color: #00B4D8;
                        box-shadow: 0 0 0 3px rgba(0,180,216,0.2);
                    }

                    .btn-login {
                        background: linear-gradient(90deg, #0078D7, #00B4D8);
                        color: #fff;
                        border: none;
                        border-radius: 10px;
                        padding: 12px;
                        font-weight: 500;
                        font-size: 1rem;
                    }

                    .btn-login:hover {
                        background: linear-gradient(90deg, #0062B3, #0097C2);
                    }

                    .password-wrapper {
                        position: relative;
                    }

                    .toggle-eye {
                        position: absolute;
                        top: 50%;
                        right: 14px;
                        transform: translateY(-50%);
                        cursor: pointer;
                        color: #888;
                    }

                    .forgot-link {
                        display: block;
                        margin-top: 6px;
                        font-size: 0.85rem;
                        text-align: right;
                        color: #0078D7;
                        text-decoration: none;
                        font-weight: 500;
                    }

                    .forgot-link:hover {
                        color: #0056b3;
                    }

                    .register-text a {
                        color: #0078D7;
                        text-decoration: none;
                    }

                    .register-text a:hover {
                        text-decoration: underline;
                    }

                    .footer-text {
                        position: absolute;
                        bottom: 15px;
                        width: 100%;
                        text-align: center;
                        font-size: 0.85rem;
                        color: #555;
                    }
                `}</style>

                {/* LOGIN CARD */}
                <div className="login-wrapper">

                    <div className="brand">
                        <h2>Journey<span>toCareer</span></h2>
                    </div>

                    <h4 className="login-title">
                        <i className="fa-solid fa-right-to-bracket"></i> Sign In
                    </h4>

                    <form>

                        {/* ROLE */}
                        <div className="mb-3">
                            <label className="form-label fw-semibold">Login as</label>
                            <select className="form-control">
                                <option>-- Select Role --</option>
                                <option>Candidate</option>
                                <option>Employer</option>
                            </select>
                        </div>

                        {/* EMAIL */}
                        <div className="mb-3">
                            <label className="form-label fw-semibold">Email Address</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* PASSWORD */}
                        <div className="mb-3 password-wrapper">
                            <label className="form-label fw-semibold">Password</label>

                            <input
                                type={passwordVisible ? "text" : "password"}
                                className="form-control"
                                placeholder="Enter your password"
                                style={{ paddingRight: "45px" }}
                            />

                            <i
                                className={`fa-solid ${passwordVisible ? "fa-eye-slash" : "fa-eye"} toggle-eye`}
                                onClick={togglePassword}
                            ></i>

                            <a href="#" className="forgot-link">Forgot password?</a>
                        </div>

                        {/* BUTTON */}
                        <div className="d-grid mt-3">
                            <button className="btn btn-login">Login</button>
                        </div>

                        {/* REGISTER */}
                        <div className="text-center mt-3 text-muted register-text">
                            Don't have an account?<br />
                            <Link to="/register">Register as Jobseeker</Link> |{" "}
                            <Link to="/for-employers">Register as Employer</Link>
                        </div>

                    </form>
                </div>

                {/* FOOTER */}
                <div className="footer-text">
                    © 2025 JourneyToCareer. All rights reserved.
                </div>

            </div>
        </>
    );
};

export default Login;