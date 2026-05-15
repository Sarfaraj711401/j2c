import React, { useEffect } from "react";
import "./Leadership.css";

const Leadership = () => {

    useEffect(() => {
        const reveal = () => {
            document.querySelectorAll(
                ".leadership-page .profile-card, .leadership-page .stat-box, .leadership-page .timeline-item"
            ).forEach((el) => {
                const top = el.getBoundingClientRect().top;
                if (top < window.innerHeight - 100) {
                    el.classList.add("show");
                }
            });
        };

        window.addEventListener("scroll", reveal);
        window.addEventListener("load", reveal);

        return () => {
            window.removeEventListener("scroll", reveal);
            window.removeEventListener("load", reveal);
        };
    }, []);

    return (
        <div className="leadership-page">

            <div className="shape shape1"></div>
            <div className="shape shape2"></div>
            <div className="shape shape3"></div>

            {/* HERO */}
            <section className="hero">
                <h1>Leadership That Builds Futures 🚀</h1>
                <p>Innovation. Execution. Impact. Transforming education into opportunities.</p>
                <img src="/images/Sunit_Chaudhury_CEO.jpeg" alt="CEO" />
            </section>

            {/* PROFILE */}
            <div className="container">
                <div className="profile-card">
                    <h2 className="fw-bold">Sunit Chaudhuri</h2>
                    <p className="text-primary fw-semibold">Chief Executive Officer</p>
                    <p>
                        A visionary leader shaping the future of education-tech by connecting students with real-world careers, internships, and global opportunities.
                    </p>

                    <div className="contact-box">
                        <a href="tel:+918334001667" className="btnx call"><i className="fa fa-phone"></i> Call</a>
                        <a href="mailto:sunitchaudhuri@pcsgpl.com" className="btnx email"><i className="fa fa-envelope"></i> Email</a>
                        <a href="https://wa.me/918334001667" target="_blank" rel="noreferrer" className="btnx whatsapp"><i className="fa-brands fa-whatsapp"></i> WhatsApp</a>
                        <a href="https://www.linkedin.com/in/sunitchaudhuri" target="_blank" rel="noreferrer" className="btnx linkedin"><i className="fa-brands fa-linkedin"></i> LinkedIn</a>
                    </div>
                </div>
            </div>

            {/* STATS */}
            <div className="container stats">
                <div className="row g-4 justify-content-center text-center">

                    <div className="col-6 col-sm-6 col-md-3 d-flex justify-content-center">
                        <div className="stat-box">
                            <h2>10K+</h2>
                            <p>Students</p>
                        </div>
                    </div>

                    <div className="col-6 col-sm-6 col-md-3 d-flex justify-content-center">
                        <div className="stat-box">
                            <h2>500+</h2>
                            <p>Companies</p>
                        </div>
                    </div>

                    <div className="col-6 col-sm-6 col-md-3 d-flex justify-content-center">
                        <div className="stat-box">
                            <h2>1200+</h2>
                            <p>Internships</p>
                        </div>
                    </div>

                    <div className="col-6 col-sm-6 col-md-3 d-flex justify-content-center">
                        <div className="stat-box">
                            <h2>100+</h2>
                            <p>Courses</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* TIMELINE */}
            <div className="container">
                <h2 className="text-center fw-bold">Leadership Journey</h2>

                <div className="timeline">

                    <div className="timeline-item left">
                        <h5>Vision Started</h5>
                        <p>Started mission to connect students with industry.</p>
                    </div>

                    <div className="timeline-item right">
                        <h5>Industry Expansion</h5>
                        <p>Built strong corporate partnerships.</p>
                    </div>

                    <div className="timeline-item left">
                        <h5>Student Success</h5>
                        <p>Thousands placed in internships and jobs.</p>
                    </div>

                    <div className="timeline-item right">
                        <h5>AI Future</h5>
                        <p>Building AI-powered career guidance system.</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Leadership;