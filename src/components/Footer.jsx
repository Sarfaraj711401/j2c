import { Link } from 'react-router-dom';
import React from 'react';
// If using React Router for navigation, uncomment the line below:
// import { Link } from 'react-router-dom';

const Footer = () => {
    // Prevent default form submission (React best practice)
    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        alert('✅ Thank you for subscribing! Check your email for welcome tips.');
    };

    return (
        <>
            {/* INJECTED COMPONENT CSS - Keeps styling 100% modular without external files */}
            <style>{`
                .footer-section {
                    background: linear-gradient(135deg, #001f3f 0%, #003366 50%, #004080 100%);
                    color: #e0e7ff;
                    padding: 80px 0 0;
                    position: relative;
                    overflow: hidden;
                }

                .footer-section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: linear-gradient(90deg, #00A5EC, #FFD700, #00A5EC);
                    animation: shimmer 3s infinite;
                }

                @keyframes shimmer {
                    0%, 100% { opacity: 1; transform: scaleX(1); }
                    50% { opacity: 0.7; transform: scaleX(1.05); }
                }

                .footer-logo {
                    font-size: 2rem;
                    font-weight: 700;
                    background: linear-gradient(135deg, #00A5EC, #ffffff);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    margin-bottom: 1rem;
                    display: inline-block;
                    text-decoration: none;
                }

                .footer-desc {
                    color: #b8c6dc;
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                }

                .footer-link {
                    color: #e0e7ff;
                    text-decoration: none;
                    font-weight: 500;
                    transition: all 0.3s ease;
                    display: block;
                    margin-bottom: 0.75rem;
                }

                .footer-link:hover {
                    color: #00A5EC;
                    transform: translateX(5px);
                    text-decoration: none;
                }

                .footer-social {
                    display: flex;
                    gap: 15px;
                    margin-top: 1rem;
                }

                .footer-social a {
                    width: 45px;
                    height: 45px;
                    background: rgba(255,255,255,0.1);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #e0e7ff;
                    font-size: 1.1rem;
                    transition: all 0.3s ease;
                    backdrop-filter: blur(10px);
                    text-decoration: none;
                }

                .footer-social a:hover {
                    background: linear-gradient(135deg, #00A5EC, #0088c9);
                    transform: translateY(-3px) scale(1.1);
                    color: white;
                }

                .newsletter-form {
                    background: rgba(255,255,255,0.05);
                    border-radius: 15px;
                    padding: 20px;
                    border: 1px solid rgba(255,255,255,0.1);
                    backdrop-filter: blur(10px);
                }

                .newsletter-input {
                    background: rgba(255,255,255,0.9);
                    border: none;
                    border-radius: 10px;
                    padding: 12px 20px;
                    color: #333;
                    width: 100%;
                    outline: none;
                }
                
                .newsletter-input:focus {
                    box-shadow: 0 0 0 2px #00A5EC;
                }

                .newsletter-btn {
                    background: linear-gradient(135deg, #00A5EC, #0088c9);
                    border: none;
                    border-radius: 10px;
                    padding: 12px 20px;
                    color: white;
                    font-weight: 600;
                    width: 100%;
                    margin-top: 10px;
                    transition: all 0.3s ease;
                    cursor: pointer;
                }

                .newsletter-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 25px rgba(0,165,236,0.4);
                }

                .footer-bottom {
                    background: rgba(0,0,0,0.2);
                    margin-top: 60px;
                    padding: 20px 0;
                    border-top: 1px solid rgba(255,255,255,0.1);
                }

                .footer-bottom p {
                    margin: 0;
                    color: #a8b2d1;
                    font-size: 0.95rem;
                }

                @media (max-width: 768px) {
                    .footer-section { padding: 60px 0 0; text-align: center; }
                    .footer-social { justify-content: center; }
                    .footer-bottom { text-align: center; }
                    .footer-bottom .text-md-end { text-align: center !important; margin-top: 15px; }
                    .footer-logo { margin: 0 auto 1rem; }
                    .footer-link:hover { transform: translateX(0) scale(1.05); } /* Prevents awkward sliding on mobile */
                }
            `}</style>

            <footer className="footer-section">
                <div className="container">
                    <div className="row g-4 pb-5">

                        {/* Column 1: Brand & Social */}
                        <div className="col-lg-4 col-md-6">
                            <a href="/" className="footer-logo mb-3">
                                <i className="fas fa-rocket me-2 text-info"></i>JourneyToCareer
                            </a>
                            <p className="footer-desc">
                                Connecting students with top companies through internship drives.
                                Your gateway to Digital Marketing, HR, Supply Chain & IT careers.
                            </p>
                            <div className="footer-social">
                                <a href="#"><i className="fab fa-linkedin"></i></a>
                                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-whatsapp"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fas fa-envelope"></i></a>
                            </div>
                        </div>

                        {/* Column 2: Quick Links */}
                        <div className="col-lg-2 col-md-6">
                            <h6 className="fw-bold mb-3" style={{ color: '#ffffff' }}>Quick Links</h6>
                            <a href="#" className="footer-link"><i className="fas fa-arrow-right me-2 opacity-75"></i>Home</a>
                            <a href="#" className="footer-link"><i className="fas fa-arrow-right me-2 opacity-75"></i>About Us</a>
                            <a href="#" className="footer-link"><i className="fas fa-arrow-right me-2 opacity-75"></i>Data Science</a>
                            <a href="#" className="footer-link"><i className="fas fa-arrow-right me-2 opacity-75"></i>Web Development</a>
                            <a href="#" className="footer-link"><i className="fas fa-arrow-right me-2 opacity-75"></i>Internship Drives</a>
                            <Link to="/job-hire-ready" className="footer-link">
                                <i className="fas fa-arrow-right me-2 opacity-75"></i>
                                Job Hire Ready
                            </Link>
                        </div>

                        {/* Column 3: Domains */}
                        <div className="col-lg-3 col-md-6">
                            <h6 className="fw-bold mb-3" style={{ color: '#ffffff' }}>Domains</h6>
                            <a href="#" className="footer-link"><i className="fas fa-briefcase me-2 opacity-75"></i>Digital Marketing</a>
                            <a href="#" className="footer-link"><i className="fas fa-users me-2 opacity-75"></i>UI/UX Design</a>
                            <a href="#" className="footer-link"><i className="fas fa-truck me-2 opacity-75"></i>Supply Chain</a>
                            <a href="#" className="footer-link"><i className="fas fa-code me-2 opacity-75"></i>Software Testing</a>
                            <a href="#" className="footer-link"><i className="fas fa-chart-line me-2 opacity-75"></i>Financial Modeling</a>
                        </div>

                        {/* Column 4: Newsletter */}
                        <div className="col-lg-3 col-md-6">
                            <h6 className="fw-bold mb-3" style={{ color: '#ffffff' }}>Stay Updated</h6>
                            <p className="small mb-3" style={{ color: '#b8c6dc' }}>Get latest drive notifications & career tips</p>
                            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                                <input
                                    type="email"
                                    className="newsletter-input mb-2"
                                    placeholder="Enter your email"
                                    required
                                />
                                <button type="submit" className="newsletter-btn">
                                    <i className="fas fa-paper-plane me-2"></i>Subscribe
                                </button>
                            </form>
                        </div>

                    </div>
                </div>

                {/* Footer Bottom Bar */}
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 text-center text-md-start">
                                <p>&copy; {new Date().getFullYear()} JourneyToCareer. All rights reserved | Serving 75+ cities across India</p>
                            </div>
                            <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
                                <a href="#" className="footer-link d-inline-block me-3 mb-0" style={{ display: 'inline-block' }}>Privacy Policy</a>
                                <a href="#" className="footer-link d-inline-block me-3 mb-0" style={{ display: 'inline-block' }}>Terms of Service</a>
                                <a href="#" className="footer-link d-inline-block mb-0" style={{ display: 'inline-block' }}>Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;