import React, { useEffect } from "react";
import "./ForEmployerNavbar.css";

const ForEmployerNavbar = () => {

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".fem-navbar");
      if (!navbar) return;

      if (window.scrollY > 50) {
        navbar.classList.add("fem-shrink");
      } else {
        navbar.classList.remove("fem-shrink");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ===== Topbar ===== */}
      <div className="fem-topbar fixed-top d-flex justify-content-between align-items-center px-4">
        <div className="fem-contact-info">
          <i className="bi bi-telephone-fill"></i>
          <a href="tel:+918697741611">+91 86977 41611</a> /
          <a href="tel:+918334001667">+91 83340 01667</a>
          &nbsp; | &nbsp;
          <i className="bi bi-envelope-fill"></i>
          <a href="mailto:contact@j2c.in">contact@j2c.in</a>
        </div>

        <div className="fem-social-icons">
          <a href="#"><i className="bi bi-facebook"></i></a>
          <a href="#"><i className="bi bi-twitter"></i></a>
          <a href="#"><i className="bi bi-linkedin"></i></a>
          <a href="#"><i className="bi bi-instagram"></i></a>
        </div>
      </div>

      {/* ===== Navbar ===== */}
      <nav className="fem-navbar navbar navbar-expand-lg navbar-light fixed-top shadow-sm">
        <a className="navbar-brand" href="/">
          <img src="/images/logo.png" alt="JourneyToCareer Logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#femNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="femNavbar">

          <ul className="navbar-nav me-auto ms-3">

            {/* Dropdown 1 */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                Hire for Top Profiles
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Fresher Jobs</a></li>
                <li><a className="dropdown-item" href="#">IT Jobs</a></li>
                <li><a className="dropdown-item" href="#">Marketing</a></li>
              </ul>
            </li>

            {/* Dropdown 2 */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                Hire for Top Locations
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">By Location</a></li>
                <li><a className="dropdown-item" href="#">By Category</a></li>
                <li><a className="dropdown-item" href="#">Work from Home</a></li>
              </ul>
            </li>

          </ul>

          {/* Right side */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="btn btn-outline-primary me-2" href="/">
                <i className="bi bi-house-door"></i> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="btn btn-outline-primary" href="/login-form">
                <i className="bi bi-box-arrow-right"></i> Login
              </a>
            </li>
          </ul>

        </div>
      </nav>
    </>
  );
};

export default ForEmployerNavbar;