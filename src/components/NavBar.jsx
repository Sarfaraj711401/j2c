import React, { useState, useEffect } from 'react';
// Import the logo image from the assets folder
import logoImage from '../assets/logo.png';
// If you are using React Router, uncomment the line below and change <a> tags to <Link to="..."> tags
import { Link } from 'react-router-dom';

const NavBar = () => {
    // State for Navbar scroll shrink effect
    const [isShrunk, setIsShrunk] = useState(false);

    // State for Jobs Mega Menu active tabs
    const [activeJobTab, setActiveJobTab] = useState('content-locations');

    // State for Internships Mega Menu active tabs
    const [activeInternTab, setActiveInternTab] = useState('content-intern-locations');

    // State for Mobile Dropdown Toggles
    const [openDropdown, setOpenDropdown] = useState(null);

    // Handle Scroll event for the shrink effect
    useEffect(() => {
        const handleScroll = () => {
            setIsShrunk(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
    }, []);

    // Handlers for Jobs Hover (Desktop) & Click (Mobile)
    const handleJobHover = (tab) => setActiveJobTab(tab);
    const resetJobHover = () => setActiveJobTab('content-locations');

    // Handlers for Internships Hover (Desktop) & Click (Mobile)
    const handleInternHover = (tab) => setActiveInternTab(tab);
    const resetInternHover = () => setActiveInternTab('content-intern-locations');

    // Toggle handler for Mobile Menus
    const toggleMobileDropdown = (menuName, e) => {
        // Updated to 992px to ensure tablet devices use the mobile hamburger menu behavior
        if (window.innerWidth < 992) {
            e.preventDefault();
            setOpenDropdown(openDropdown === menuName ? null : menuName);
        }
    };

    // Full list for Internships by Category
    const internshipsByCategoryList = [
        "Accountant internship", "AI Engineer internship", "Backend Developer internship",
        "Brand Manager internship", "Business Analyst internship", "Cloud Architect internship",
        "Consultant internship", "Content Writer internship", "Copywriter internship",
        "Customer Relationship Manager internship", "Customer Service Executive internship",
        "Cybersecurity Analyst internship", "Data Analyst internship", "Data Scientist internship",
        "Database Administrator internship", "DevOps Engineer internship", "Dietician internship",
        "Doctor internship", "Education Counselor internship", "Event Manager internship",
        "Finance Manager internship", "Financial Analyst internship", "Frontend Developer internship",
        "Full Stack Developer internship", "Graphic Designer internship", "HR Executive internship",
        "HR Manager internship", "Lab Technician internship", "Legal Advisor internship",
        "Logistics Executive internship", "Machine Learning Engineer internship",
        "Marketing Manager internship", "Medical Representative internship",
        "Mobile App Developer internship", "Network Engineer internship", "Nurse internship",
        "Operations Manager internship", "Pharmacist internship", "Physiotherapist internship",
        "Product Manager internship", "Professor internship", "Project Manager internship",
        "QA Tester internship", "Recruitment Specialist internship", "Retail Sales Associate internship",
        "Sales Executive internship", "Sales Manager internship", "Social Media Manager internship",
        "Software Engineer internship", "Store Manager internship", "Supply Chain Manager internship",
        "System Administrator internship", "Teacher internship", "Technical Support Engineer internship",
        "Trainer internship", "Training & Development Manager internship", "UI/UX Designer internship",
        "Web Developer internship", "Internship for Women", "WFH internship for Women",
        "View all internships"
    ];

    const navLinkStyle = {
        color: '#2b2b2b',
        fontWeight: '600',
        fontSize: '0.98rem',
        textDecoration: 'none',
        marginRight: '1.2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
    };

    return (
        <>
            {/* INJECTED COMPONENT CSS - Highly Optimized & Fully Responsive */}
            <style>{`
                /* ================= GLOBAL FIXES ================= */
                /* This completely prevents the white space issue on the right side */
                html, body {
                    overflow-x: hidden !important;
                    width: 100%;
                    margin: 0;
                    padding: 0;
                }

                /* ================= GLOBAL NAVBAR ================= */
                .navbar {
                    background-color: rgba(255, 255, 255, 0.98) !important;
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid rgba(0, 165, 236, 0.15);
                    padding: 0.8rem 0;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    width: 100%;
                }
                .navbar.fixed-top { top: 30px; }
                .navbar.shrink { 
                    padding: 0.4rem 0; 
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08) !important;
                    border-bottom: 2px solid #00A5EC;
                }
                .navbar-brand img { height: 60px; width: auto; transition: height 0.3s ease; }
                .navbar.shrink .navbar-brand img { height: 50px; }
                
                /* Nav Links */
                .nav-link { outline: none; }
                .nav-link:hover, .dropdown-item:hover { color: #00A5EC !important; transform: translateY(-1px); }
                
                /* Badges */
                .badge { font-weight: 600; padding: 0.4em 0.6em; border-radius: 6px; }
                .bg-warning { background-color: #FFD700 !important; color: #333 !important; }

                /* Buttons */
                .btn-outline-info { transition: all 0.3s ease; }
                .btn-outline-info:hover { background-color: #00A5EC !important; color: #fff !important; box-shadow: 0 5px 15px rgba(0, 165, 236, 0.3); }
                .btn-primary, .btn[style*="backgroundColor: '#00A5EC'"] { transition: all 0.3s ease; border: none; }
                .btn-primary:hover, .btn[style*="backgroundColor: '#00A5EC'"]:hover { background-color: #0088c9 !important; box-shadow: 0 5px 15px rgba(0, 165, 236, 0.4); transform: translateY(-2px); }

                /* ================= DESKTOP STYLES (992px and UP) ================= */
                @keyframes fadeSlideUp {
                    0% { opacity: 0; transform: translateY(15px); }
                    100% { opacity: 1; transform: translateY(0); }
                }

                /* Adjusted to 992px to ensure mega menus show on tablets horizontally only when above 992px */
                @media (min-width: 992px) {
                    .dropdown:hover > .dropdown-menu { 
                        display: block; 
                        animation: fadeSlideUp 0.3s ease forwards; 
                    }
                    .dropdown-menu {
                        border-radius: 12px;
                        border: 1px solid #f0f0f0;
                        box-shadow: 0 15px 35px rgba(0,0,0,0.06);
                        padding: 10px 0;
                        margin-top: 0;
                    }

                    /* Mega Dropdown Core - Aligned DIRECTLY UNDER the parent link */
                    .nav-item.dropdown-mega { position: relative; } 
                    
                    .dropdown-mega .dropdown-menu-mega {
                        position: absolute;
                        left: 0 !important;
                        right: auto !important;
                        transform: none !important;
                        display: none;
                        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
                        border: 1px solid #eaeaea;
                        border-radius: 16px;
                        overflow: hidden;
                        background: #fff;
                        padding: 0;
                        max-width: 90vw;
                    }
                    
                    /* Dynamic Widths (Default Large Desktop) */
                    .jobs-mega-dropdown .dropdown-menu-mega { width: 750px; }
                    .internship-mega-dropdown .dropdown-menu-mega { width: 800px; }
                    .courses-mega-dropdown .dropdown-menu-mega { width: 800px; }
                    
                    /* Left Column Tabs */
                    .job-mega-link, .intern-mega-link { margin: 0; padding: 4px 10px; transition: all 0.2s ease; border-radius: 8px 0 0 8px; cursor: pointer; }
                    .job-mega-link a.job-mega-category, .intern-mega-link a.intern-mega-category {
                        padding: 0.6rem 1rem; font-weight: 500; font-size: 0.95rem; display: block; color: #444 !important; text-decoration: none; transition: all 0.2s ease;
                    }
                    .job-mega-link:hover, .intern-mega-link:hover { background-color: #f8f9fa; }
                    
                    .job-mega-link.is-active, .intern-mega-link.is-active {
                        background-color: #eef8ff; border-left: 4px solid #00A5EC;
                    }
                    .job-mega-link.is-active a.job-mega-category, .intern-mega-link.is-active a.intern-mega-category {
                        color: #00A5EC !important; font-weight: 700; padding-left: calc(1rem - 4px);
                    }
                    
                    /* Custom Scrollbars for long lists */
                    #job-mega-content-holder, .intern-mega-content-holder { 
                        max-height: 450px; overflow-y: auto; padding-right: 10px;
                    }
                    #job-mega-content-holder::-webkit-scrollbar, .intern-mega-content-holder::-webkit-scrollbar { width: 6px; }
                    #job-mega-content-holder::-webkit-scrollbar-track, .intern-mega-content-holder::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
                    #job-mega-content-holder::-webkit-scrollbar-thumb, .intern-mega-content-holder::-webkit-scrollbar-thumb { background: #c1c1c1; border-radius: 10px; }
                }

                /* ================= COMPACT DESKTOP (992px to 1440px) ================= */
                /* This forces items to become compact so they fit perfectly in the navbar */
                @media (min-width: 992px) and (max-width: 1440px) {
                    .nav-link {
                        margin-right: 0.35rem !important;
                        font-size: 0.85rem !important;
                        padding-left: 0.2rem !important;
                        padding-right: 0.2rem !important;
                    }
                    .navbar-brand img { height: 40px !important; }
                    .navbar.shrink .navbar-brand img { height: 35px !important; }
                    
                    /* Compact Right Side Buttons */
                    .d-flex.align-items-center.gap-2 { gap: 0.4rem !important; }
                    .d-flex.align-items-center.gap-2 .btn {
                        padding: 0.4rem 0.6rem !important;
                        font-size: 0.8rem !important;
                    }

                    /* Compact Mega Menu Widths */
                    .jobs-mega-dropdown .dropdown-menu-mega { width: 550px !important; }
                    .internship-mega-dropdown .dropdown-menu-mega { width: 600px !important; }
                    .courses-mega-dropdown .dropdown-menu-mega { width: 600px !important; }

                    /* FIXED: Ensure dropdowns align directly under the parent item as requested */
                    .dropdown-mega .dropdown-menu-mega {
                        left: 0 !important;
                        transform: none !important;
                    }

                    /* Make internal text tighter */
                    .job-mega-link a.job-mega-category, .intern-mega-link a.intern-mega-category {
                        padding: 0.4rem 0.6rem !important;
                        font-size: 0.85rem !important;
                    }
                    .job-mega-content-block h5, .intern-mega-content-block h5, .dropdown-menu-mega h5 {
                        font-size: 0.95rem !important;
                        margin-bottom: 10px !important;
                        padding-bottom: 5px !important;
                    }
                    .job-locations-list .dropdown-item {
                        font-size: 0.82rem !important;
                        padding: 0.3rem 0.4rem !important;
                    }
                    #job-mega-content-holder, .intern-mega-content-holder { max-height: 380px !important; }
                }

                /* ================= 📱 MOBILE & TABLET STYLES (Under 992px) ================= */
                /* Updated to 991.98px to allow iPad, Surface Pro, and Zenbook Fold to use the mobile hamburger view */
                @media (max-width: 991.98px) {
                    .navbar { padding: 0.5rem 1rem; width: 100vw; box-sizing: border-box; }
                    
                    .navbar-collapse { 
                        background: #fff; padding: 15px 0; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); margin-top: 10px; max-height: 85vh; overflow-y: auto; overflow-x: hidden;
                    }
                    
                    .navbar-nav { padding: 0 15px; }

                    /* Force Dropdown Menus to Stack inside Mobile View */
                    .dropdown-menu {
                        position: static !important; width: 100% !important; float: none !important; transform: none !important;
                        box-shadow: none !important; border: 1px solid #f0f0f0 !important; border-radius: 12px; margin-top: 5px !important;
                        display: none; /* Hidden by default */
                    }
                    
                    /* The State Control for Mobile */
                    .dropdown-menu.show-mobile {
                        display: block !important;
                    }

                    /* Mega Menu Mobile Structure - Stack Left column ON TOP of Right column */
                    .dropdown-menu-mega .row { display: flex; flex-direction: column; }
                    .dropdown-menu-mega .col-md-5, .dropdown-menu-mega .col-md-6 { width: 100%; border-right: none !important; border-bottom: 1px solid #eaeaea; }
                    .dropdown-menu-mega .col-md-7 { width: 100%; }

                    /* Mega Menu Left Column Tabs (Mobile) - Stack vertically */
                    .job-mega-link, .intern-mega-link {
                        margin: 0 0 5px 0 !important; border-radius: 8px !important; border: 1px solid #eee; background: #fafafa; display: block; width: 100%;
                    }
                    .job-mega-link a.job-mega-category, .intern-mega-link a.intern-mega-category {
                        padding: 12px 16px !important; font-size: 0.95rem; text-align: left;
                    }
                    .job-mega-link.is-active, .intern-mega-link.is-active {
                        border-left: 4px solid #00A5EC !important; background-color: #eef8ff !important;
                    }
                    .job-mega-link.is-active a.job-mega-category, .intern-mega-link.is-active a.intern-mega-category {
                        color: #00A5EC !important; font-weight: 700;
                    }
                    
                    /* Mega Menu Right Column Content (Mobile) - Show full height */
                    #job-mega-content-holder, .intern-mega-content-holder { 
                        max-height: none !important; height: auto !important; overflow-y: visible !important; padding: 15px 10px !important;
                    }
                    
                    /* Stack action buttons cleanly */
                    .d-flex.align-items-center.gap-2 { flex-direction: column; width: 100%; align-items: stretch !important; margin-top: 20px !important; padding: 0 15px; }
                    .d-flex.align-items-center.gap-2 .btn { width: 100%; margin-bottom: 10px; padding: 12px !important; }
                }

                /* Shared Content Styling */
                .job-mega-content-block h5, .intern-mega-content-block h5 {
                    border-bottom: 2px solid #f0f0f0; margin-bottom: 15px; color: #001f3f; padding-bottom: 8px; font-weight: 700; font-size: 1.1rem;
                }
                .job-locations-list .dropdown-item { 
                    font-size: 0.95rem; padding: 0.5rem 0.8rem; display: block; color: #555; border-radius: 6px; margin-bottom: 2px; transition: all 0.2s ease; white-space: normal;
                }
                .job-locations-list .dropdown-item:hover { background-color: #f4faff; color: #00A5EC !important; transform: translateX(3px); }
            `}</style>

            {/* Changed from navbar-expand-md to navbar-expand-lg so the desktop layout kicks in at 992px */}
            <nav className={`navbar navbar-expand-lg sticky-top ${isShrunk ? 'shrink' : ''}`}>
                <div className="container-fluid px-lg-2 px-xl-4">

                    {/* Brand Logo */}
                    <a className="navbar-brand d-flex align-items-center" href="/">
                        <img src={logoImage} alt="JourneyToCareer Logo" />
                    </a>

                    <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        {/* Changed margins and alignments to support lg (992px) upwards */}
                        <ul className="navbar-nav me-auto ms-lg-1 ms-xl-3 mb-2 mb-lg-0 align-items-lg-center">

                            {/* ================= JOBS MEGA MENU ================= */}
                            <li className="nav-item dropdown dropdown-mega jobs-mega-dropdown" onMouseLeave={resetJobHover}>
                                <a className="nav-link" href="#" onClick={(e) => toggleMobileDropdown('jobs', e)} style={navLinkStyle}>
                                    Jobs <i className="fas fa-caret-down fa-xs ms-1 text-muted"></i>
                                </a>

                                <div className={`dropdown-menu dropdown-menu-mega p-0 ${openDropdown === 'jobs' ? 'show-mobile' : ''}`}>
                                    <div className="row g-0">
                                        {/* Left Column (Categories) */}
                                        <div className="col-md-5 py-3 px-4 bg-light">
                                            <div className={`job-mega-link ${activeJobTab === 'content-locations' ? 'is-active' : ''}`} onClick={() => setActiveJobTab('content-locations')} onMouseEnter={() => handleJobHover('content-locations')}>
                                                <a className="dropdown-item job-mega-category" href="#">Top Locations</a>
                                            </div>
                                            <div className={`job-mega-link ${activeJobTab === 'content-categories' ? 'is-active' : ''}`} onClick={() => setActiveJobTab('content-categories')} onMouseEnter={() => handleJobHover('content-categories')}>
                                                <a className="dropdown-item job-mega-category" href="#">Top Categories</a>
                                            </div>
                                            <div className={`job-mega-link ${activeJobTab === 'content-freshers' ? 'is-active' : ''}`} onClick={() => setActiveJobTab('content-freshers')} onMouseEnter={() => handleJobHover('content-freshers')}>
                                                <a className="dropdown-item job-mega-category" href="#">Fresher Jobs</a>
                                            </div>
                                            <div className={`job-mega-link ${activeJobTab === 'content-explore' ? 'is-active' : ''}`} onClick={() => setActiveJobTab('content-explore')} onMouseEnter={() => handleJobHover('content-explore')}>
                                                <a className="dropdown-item job-mega-category" href="#">Explore More Jobs</a>
                                            </div>
                                            <div className={`job-mega-link ${activeJobTab === 'content-courses' ? 'is-active' : ''}`} onClick={() => setActiveJobTab('content-courses')} onMouseEnter={() => handleJobHover('content-courses')}>
                                                <a className="dropdown-item job-mega-category" href="#">
                                                    Placement Courses <span className="badge text-dark ms-2" style={{ backgroundColor: '#FFD700' }}>NEW</span>
                                                </a>
                                            </div>
                                        </div>

                                        {/* Right Column (Dynamic Content) */}
                                        <div className="col-md-7 py-4 px-4" id="job-mega-content-holder">
                                            <div style={{ display: activeJobTab === 'content-locations' ? 'block' : 'none' }}>
                                                <h5>Jobs by Location</h5>
                                                <ul className="list-unstyled job-locations-list">
                                                    <li><a className="dropdown-item" href="#">Work from home</a></li>
                                                    <li><a className="dropdown-item" href="#">Jobs in Bangalore</a></li>
                                                    <li><a className="dropdown-item" href="#">Jobs in Delhi</a></li>
                                                    <li><a className="dropdown-item" href="#">Jobs in Hyderabad</a></li>
                                                    <li><a className="dropdown-item" href="#">Jobs in Gurgaon</a></li>
                                                    <li><a className="dropdown-item" href="#">Jobs in Kolkata</a></li>
                                                    <li><a className="dropdown-item" href="#">Jobs in Mumbai</a></li>
                                                    <li><a className="dropdown-item" href="#">Jobs in Pune</a></li>
                                                    <li><a className="dropdown-item" href="#">Jobs in Chennai</a></li>
                                                    <li><a className="dropdown-item" href="#">Jobs in Noida</a></li>
                                                    <li><a className="dropdown-item" href="#">Jobs in Jaipur</a></li>
                                                    <li><a className="dropdown-item" href="#">Jobs in Coimbatore</a></li>
                                                    <li><a className="dropdown-item fw-bold text-info" href="#">View all jobs <i className="fas fa-arrow-right fa-sm ms-1"></i></a></li>
                                                </ul>
                                            </div>

                                            <div style={{ display: activeJobTab === 'content-categories' ? 'block' : 'none' }}>
                                                <h5>Jobs by Category</h5>
                                                <ul className="list-unstyled job-locations-list">
                                                    <li><a className="dropdown-item" href="#">Data Entry Jobs</a></li>
                                                    <li><a className="dropdown-item" href="#">Java Developer</a></li>
                                                    <li><a className="dropdown-item" href="#">Digital Marketing Jobs</a></li>
                                                    <li><a className="dropdown-item" href="#">Data Science Jobs</a></li>
                                                    <li><a className="dropdown-item" href="#">Cyber Security Jobs</a></li>
                                                    <li><a className="dropdown-item" href="#">Pharma Jobs</a></li>
                                                    <li><a className="dropdown-item" href="#">Teaching Jobs</a></li>
                                                    <li><a className="dropdown-item" href="#">HR Jobs</a></li>
                                                    <li><a className="dropdown-item" href="#">MBA Jobs</a></li>
                                                    <li><a className="dropdown-item" href="#">Graphic Design Jobs</a></li>
                                                    <li><a className="dropdown-item" href="#">Part Time Jobs</a></li>
                                                    <li><a className="dropdown-item" href="#">Jobs for Women</a></li>
                                                    <li><a className="dropdown-item" href="#">WFH Jobs for Women</a></li>
                                                    <li><a className="dropdown-item" href="#">Part Time Jobs for Women</a></li>
                                                    <li><a className="dropdown-item fw-bold text-info" href="#">View all jobs <i className="fas fa-arrow-right fa-sm ms-1"></i></a></li>
                                                </ul>
                                            </div>

                                            <div style={{ display: activeJobTab === 'content-freshers' ? 'block' : 'none' }}>
                                                <h5>Freshers & Entry-Level</h5>
                                                <ul className="list-unstyled job-locations-list">
                                                    <li><a className="dropdown-item" href="#">Work from Home</a></li>
                                                    <li><a className="dropdown-item" href="#">Fresher Jobs in Bangalore</a></li>
                                                    <li><a className="dropdown-item" href="#">Fresher Jobs in Delhi</a></li>
                                                    <li><a className="dropdown-item" href="#">Fresher Jobs in Hyderabad</a></li>
                                                    <li><a className="dropdown-item" href="#">Fresher Jobs in Kolkata</a></li>
                                                    <li><a className="dropdown-item" href="#">Fresher Jobs in Chennai</a></li>
                                                    <li><a className="dropdown-item" href="#">Fresher Jobs in Pune</a></li>
                                                    <li><a className="dropdown-item" href="#">MBA Fresher Jobs</a></li>
                                                    <li><a className="dropdown-item" href="#">HR Fresher Jobs</a></li>
                                                    <li><a className="dropdown-item" href="#">Civil Fresher Jobs</a></li>
                                                    <li><a className="dropdown-item" href="#">Digital Marketing Fresher Jobs</a></li>
                                                    <li><a className="dropdown-item" href="#">Part Time Fresher Jobs</a></li>
                                                    <li><a className="dropdown-item fw-bold text-info" href="#">View all fresher jobs <i className="fas fa-arrow-right fa-sm ms-1"></i></a></li>
                                                </ul>
                                            </div>

                                            <div style={{ display: activeJobTab === 'content-explore' ? 'block' : 'none' }}>
                                                <h5>Other Job Links</h5>
                                                <ul className="list-unstyled job-locations-list">
                                                    <li><a className="dropdown-item" href="#">Jobs by Category</a></li>
                                                    <li><a className="dropdown-item" href="#">Jobs by Location</a></li>
                                                    <li><a className="dropdown-item" href="#">Jobs by Designation</a></li>
                                                    <li><a className="dropdown-item" href="#">Jobs by Skill</a></li>
                                                    <li><a className="dropdown-item" href="#">Jobs by Company</a></li>
                                                    <li><a className="dropdown-item" href="#">WFH Job Types</a></li>
                                                </ul>
                                            </div>

                                            <div style={{ display: activeJobTab === 'content-courses' ? 'block' : 'none' }}>
                                                <h5>Courses & Training</h5>
                                                <ul className="list-unstyled job-locations-list">
                                                    <li><a className="dropdown-item" href="#">Full Stack Development Course</a></li>
                                                    <li><a className="dropdown-item" href="#">Data Science Course</a></li>
                                                    <li><a className="dropdown-item" href="#">Digital Marketing Course</a></li>
                                                    <li><a className="dropdown-item" href="#">Human Resource Management Course</a></li>
                                                    <li><a className="dropdown-item" href="#">UI/UX Design Course</a></li>
                                                    <li><a className="dropdown-item" href="#">Product Management Course</a></li>
                                                    <li><a className="dropdown-item" href="#">Financial Modeling Course</a></li>
                                                    <li><a className="dropdown-item" href="#">Supply Chain Logistics Course</a></li>
                                                    <li><a className="dropdown-item" href="#">Software Testing Course</a></li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </li>

                            {/* ================= INTERNSHIPS MEGA MENU ================= */}
                            <li className="nav-item dropdown dropdown-mega internship-mega-dropdown" onMouseLeave={resetInternHover}>
                                <a className="nav-link" href="#" onClick={(e) => toggleMobileDropdown('intern', e)} style={navLinkStyle}>
                                    Internships <i className="fas fa-caret-down fa-xs ms-1 text-muted"></i>
                                </a>

                                <div className={`dropdown-menu dropdown-menu-mega p-0 ${openDropdown === 'intern' ? 'show-mobile' : ''}`}>
                                    <div className="row g-0">

                                        {/* Left side */}
                                        <div className="col-md-5 py-3 px-4 bg-light">
                                            <div className={`intern-mega-link ${activeInternTab === 'content-intern-locations' ? 'is-active' : ''}`} onClick={() => setActiveInternTab('content-intern-locations')} onMouseEnter={() => handleInternHover('content-intern-locations')}>
                                                <a className="dropdown-item intern-mega-category" href="#">By Locations</a>
                                            </div>
                                            <div className={`intern-mega-link ${activeInternTab === 'content-intern-explore' ? 'is-active' : ''}`} onClick={() => setActiveInternTab('content-intern-explore')} onMouseEnter={() => handleInternHover('content-intern-explore')}>
                                                <a className="dropdown-item intern-mega-category" href="#">Register as Intern</a>
                                            </div>
                                            <div className={`intern-mega-link ${activeInternTab === 'content-intern-profile' ? 'is-active' : ''}`} onClick={() => setActiveInternTab('content-intern-profile')} onMouseEnter={() => handleInternHover('content-intern-profile')}>
                                                <a className="dropdown-item intern-mega-category" href="#">By Category</a>
                                            </div>
                                            <div className={`intern-mega-link ${activeInternTab === 'content-intern-categories' ? 'is-active' : ''}`} onClick={() => setActiveInternTab('content-intern-categories')} onMouseEnter={() => handleInternHover('content-intern-categories')}>
                                                <a className="dropdown-item intern-mega-category" href="#">Work From Home Internships</a>
                                            </div>
                                        </div>

                                        {/* Right Side */}
                                        <div className="col-md-7 py-4 px-4 intern-mega-content-holder">

                                            <div style={{ display: activeInternTab === 'content-intern-locations' ? 'block' : 'none' }}>
                                                <h5>Internships by Location</h5>
                                                <ul className="list-unstyled job-locations-list">
                                                    <li><a className="dropdown-item" href="#">Work from Home</a></li>
                                                    <li><a className="dropdown-item" href="#">Internship in Bangalore</a></li>
                                                    <li><a className="dropdown-item" href="#">Internship in Delhi</a></li>
                                                    <li><a className="dropdown-item" href="#">Internship in Hyderabad</a></li>
                                                    <li><a className="dropdown-item" href="#">Internship in Mumbai</a></li>
                                                    <li><a className="dropdown-item" href="#">Internship in Chennai</a></li>
                                                    <li><a className="dropdown-item" href="#">Internship in Pune</a></li>
                                                    <li><a className="dropdown-item" href="#">Internship in Kolkata</a></li>
                                                    <li><a className="dropdown-item" href="#">Internship in Jaipur</a></li>
                                                    <li><a className="dropdown-item" href="#">International Internship</a></li>
                                                    <li><a className="dropdown-item fw-bold text-info" href="#">View all internships <i className="fas fa-arrow-right fa-sm ms-1"></i></a></li>
                                                </ul>
                                            </div>

                                            <div style={{ display: activeInternTab === 'content-intern-explore' ? 'block' : 'none' }}>
                                                <h5>Register by Internship Category</h5>
                                                <ul className="list-unstyled job-locations-list">
                                                    <li><a className="dropdown-item" href="#">Engineering Internships</a></li>
                                                    <li><a className="dropdown-item" href="#">MBA/Management Internships</a></li>
                                                    <li><a className="dropdown-item" href="#">Design & Creative Internships</a></li>
                                                    <li><a className="dropdown-item" href="#">Media & Journalism Internships</a></li>
                                                    <li><a className="dropdown-item" href="#">Finance & Law Internships</a></li>
                                                    <li><a className="dropdown-item" href="#">Healthcare & Science Internships</a></li>
                                                    <li><a className="dropdown-item" href="#">NGO/Social Work Internships</a></li>
                                                    <li><a className="dropdown-item fw-bold text-info" href="#">View all Registration Categories <i className="fas fa-arrow-right fa-sm ms-1"></i></a></li>
                                                </ul>
                                            </div>

                                            <div style={{ display: activeInternTab === 'content-intern-profile' ? 'block' : 'none' }}>
                                                <h5>Internships by Category</h5>
                                                <ul className="list-unstyled job-locations-list">
                                                    {internshipsByCategoryList.map((category, index) => (
                                                        <li key={index}><a className="dropdown-item" href="#">{category}</a></li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div style={{ display: activeInternTab === 'content-intern-categories' ? 'block' : 'none' }}>
                                                <h5>Work From Home Internships</h5>
                                                <ul className="list-unstyled job-locations-list">
                                                    <li><a className="dropdown-item" href="#">WFH Data Entry Internships</a></li>
                                                    <li><a className="dropdown-item" href="#">WFH Web Development Internships</a></li>
                                                    <li><a className="dropdown-item" href="#">WFH Digital Marketing Internships</a></li>
                                                    <li><a className="dropdown-item" href="#">WFH Content Writing Internships</a></li>
                                                    <li><a className="dropdown-item" href="#">WFH Graphic Design Internships</a></li>
                                                    <li><a className="dropdown-item" href="#">WFH Social Media Management</a></li>
                                                    <li><a className="dropdown-item" href="#">WFH Human Resources (HR)</a></li>
                                                    <li><a className="dropdown-item" href="#">WFH Customer Support</a></li>
                                                    <li><a className="dropdown-item fw-bold text-info" href="#">View all WFH Internships <i className="fas fa-arrow-right fa-sm ms-1"></i></a></li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </li>

                            {/* ================= COURSES MEGA MENU ================= */}
                            <li className="nav-item dropdown dropdown-mega courses-mega-dropdown">
                                <a className="nav-link" href="#" onClick={(e) => toggleMobileDropdown('courses', e)} style={navLinkStyle}>
                                    Courses <span className="badge rounded-pill ms-1" style={{ backgroundColor: '#FFD700', color: '#856404', fontSize: '0.65rem' }}>OFFER</span> <i className="fas fa-caret-down fa-xs ms-1 text-muted"></i>
                                </a>
                                <div className={`dropdown-menu dropdown-menu-mega p-0 ${openDropdown === 'courses' ? 'show-mobile' : ''}`}>
                                    <div className="row g-0">
                                        <div className="col-md-6 border-end py-4 px-4">
                                            <h5 className="fw-bold mb-3 pb-2" style={{ borderBottom: '2px solid #f0f0f0', color: '#001f3f' }}>Certification Courses</h5>
                                            <ul className="list-unstyled job-locations-list">
                                                <li>
                                                    <Link
                                                        className="dropdown-item"
                                                        to="/ai-ml-course" >
                                                        Artificial Intelligence and Machine Learning
                                                        <span className="badge bg-primary bg-opacity-10 text-primary ms-2">
                                                            Trending
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li><Link className="dropdown-item" to="/web-development-ai">
                                                    Web Development with AI
                                                </Link></li>
                                                <li>
                                                    <Link className="dropdown-item" to="/programming-with-python">
                                                        Programming with Python with AI
                                                    </Link>
                                                </li>
                                                <li><Link className="dropdown-item" to="/digital-AI">
                                                    Digital Marketing with AI
                                                </Link></li>
                                                <li><Link className="dropdown-item" to="/machine-Learning">
                                                    Machine Learning with AI
                                                </Link></li>
                                                <li><Link className="dropdown-item" to="/advanced-excel">
                                                    Advanced Excel With AI
                                                </Link></li>
                                                <li><Link className="dropdown-item" to="/autocad">
                                                    AutoCAD
                                                </Link></li>
                                                <li><Link className="dropdown-item" to="/data-science-ai">
                                                    Data Science with AI
                                                </Link></li>
                                                <li><a className="dropdown-item fw-bold text-info mt-2" href="#">View 70+ more courses <i className="fas fa-arrow-right fa-sm ms-1"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6 py-4 px-4 bg-light">
                                            <h5 className="fw-bold mb-3 pb-2" style={{ borderBottom: '2px solid #f0f0f0', color: '#001f3f' }}>Placement Courses</h5>
                                            <ul className="list-unstyled job-locations-list">
                                                <li><Link className="dropdown-item" to="/full-stack-development">
                                                    Full Stack Development
                                                </Link></li>
                                                <li><Link className="dropdown-item" to="/data-science">
                                                    Data Science
                                                </Link></li>
                                                <li><Link className="dropdown-item" to="/human-resource-mng">
                                                    Human Resource Management
                                                </Link></li>
                                                <li><Link className="dropdown-item" to="/digital-marketing">
                                                    Digital Marketing
                                                </Link></li>
                                                <li><Link className="dropdown-item" to="/ui-ux">
                                                    UI/UX Design
                                                </Link></li>
                                                <li><Link className="dropdown-item" to="/product-management">
                                                    Product Management
                                                </Link></li>
                                                <li><Link className="dropdown-item" to="/financial modeling">
                                                    Financial Modeling
                                                </Link></li>
                                                <li><Link className="dropdown-item" to="/supply-chain-logistics">
                                                    Supply Chain Logistics
                                                </Link></li>
                                                <li><Link className="dropdown-item" to="/software-testing">
                                                    Software Testing
                                                </Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            {/* Standard Dropdowns */}
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#" onClick={(e) => toggleMobileDropdown('campus', e)} style={navLinkStyle}>
                                    Campus <i className="fas fa-caret-down fa-xs ms-1 text-muted"></i>
                                </a>
                                <ul className={`dropdown-menu border-0 shadow-sm ${openDropdown === 'campus' ? 'show-mobile' : ''}`}>
                                    <li><Link className="dropdown-item" to="/campus-ambassador-program">
                                        Campus Ambassador Program
                                    </Link></li>
                                    <li><Link className="dropdown-item" to="/placement-partner">
                                        Placement Partner Registration
                                    </Link></li>
                                    <li><Link className="dropdown-item" to="/clg-training-workshops">
                                        College Training Workshops
                                    </Link></li>
                                    <li><Link className="dropdown-item" to="/internship-drives">
                                        Internship Drives
                                    </Link></li>
                                    <li><Link className="dropdown-item" to="/career_webinars">
                                        Career Guidance Webinars
                                    </Link></li>
                                    <li><Link className="dropdown-item" to="/campus-hiring-solution">
                                        Campus Hiring Solutions
                                    </Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#" onClick={(e) => toggleMobileDropdown('gap', e)} style={navLinkStyle}>
                                    Career Gap? <i className="fas fa-caret-down fa-xs ms-1 text-muted"></i>
                                </a>
                                <ul className={`dropdown-menu border-0 shadow-sm ${openDropdown === 'gap' ? 'show-mobile' : ''}`}>
                                    <li><Link className="dropdown-item" to="/career-gap">
                                        Career Gap Registration
                                    </Link></li>
                                    <li><a className="dropdown-item py-2" href="#">Returnship Program</a></li>
                                    <li><a className="dropdown-item py-2" href="#">Career Guidance</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#" onClick={(e) => toggleMobileDropdown('staffing', e)} style={navLinkStyle}>
                                    Staffing <i className="fas fa-caret-down fa-xs ms-1 text-muted"></i>
                                </a>
                                <ul className={`dropdown-menu border-0 shadow-sm ${openDropdown === 'staffing' ? 'show-mobile' : ''}`}>
                                    <li><Link className="dropdown-item" to="/staffing-solution">
                                        Staffing Solutions
                                    </Link></li>
                                    <li><a className="dropdown-item py-2" href="#">Recruitment Services</a></li>
                                    <li><a className="dropdown-item py-2" href="#">Employer Solutions</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#" onClick={(e) => toggleMobileDropdown('about', e)} style={navLinkStyle}>
                                    About Us <i className="fas fa-caret-down fa-xs ms-1 text-muted"></i>
                                </a>
                                <ul className={`dropdown-menu border-0 shadow-sm ${openDropdown === 'about' ? 'show-mobile' : ''}`}>
                                    {/* Notice we changed <a> to <Link> and href to "to" */}
                                    <li><Link className="dropdown-item py-2" to="/about">About JourneyToCareer</Link></li>
                                    <li><Link className="dropdown-item py-2" to="/leaderships">Leaderships 🤴</Link></li>
                                    <li><Link className="dropdown-item py-2" to="/j2c-pro">J2C Pro 👑</Link></li>
                                </ul>
                            </li>

                        </ul>

                        {/* Right Side Buttons - Adjusted margins for 992px behavior */}
                        <div className="d-flex align-items-center gap-2 mt-3 mt-lg-0 pb-3 pb-lg-0">
                            <Link to="/login-form">
                                <button
                                    className="btn btn-outline-info rounded px-4"
                                    style={{
                                        color: '#00A5EC',
                                        borderColor: '#00A5EC',
                                        fontWeight: '600',
                                        borderWidth: '2px'
                                    }}
                                >
                                    Login
                                </button>
                            </Link>
                            <Link to="/register">
                                <button
                                    className="btn btn-outline-info rounded px-4"
                                    style={{
                                        color: '#00A5EC',
                                        borderColor: '#00A5EC',
                                        fontWeight: '600',
                                        borderWidth: '2px'
                                    }}
                                >
                                    Register
                                </button>
                            </Link>
                            <Link to="/for-employers">
                                <button className="btn rounded px-4 text-white" style={{ backgroundColor: '#00A5EC', fontWeight: '600' }}>
                                    For Employers
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;