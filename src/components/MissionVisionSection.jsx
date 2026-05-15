import React from 'react';

const MissionVisionSection = () => {
    return (
        <>
            <style>{`
        .section-padding { padding: 80px 0; }
        .section-title { font-weight: 700; font-size: 2.3rem; margin-bottom: 20px; }
        .section-desc { max-width: 800px; margin: 0 auto 50px; color: #555; font-size: 1.05rem; }
        
        .info-card {
            background: #ffffff;
            border-radius: 18px;
            padding: 35px;
            height: 100%;
            box-shadow: 0 10px 30px rgba(0,0,0,0.08);
            transition: all 0.3s ease;
        }
        .info-card:hover { transform: translateY(-8px); }
        .info-card i { font-size: 2.5rem; color: #00A5EC; margin-bottom: 15px; }
      `}</style>

            <section className="section-padding bg-light">
                <div className="container text-center">
                    <h2 className="section-title">Our Mission & Vision</h2>
                    <p className="section-desc">
                        To become India’s most trusted career ecosystem by enabling every student
                        to discover opportunities, gain experience, and build a successful future.
                    </p>

                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="info-card">
                                <i className="fas fa-bullseye"></i>
                                <h5 className="fw-bold mt-3">Our Mission</h5>
                                <p>
                                    To simplify career discovery by providing access to internships,
                                    jobs, and skill-building resources under one platform.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="info-card">
                                <i className="fas fa-eye"></i>
                                <h5 className="fw-bold mt-3">Our Vision</h5>
                                <p>
                                    A future where talent meets opportunity without barriers,
                                    regardless of background or location.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MissionVisionSection;