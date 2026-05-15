import React from 'react';

const StatsSection = () => {
    const statsStyle = {
        background: 'linear-gradient(135deg, #00A5EC, #0088c9)',
        color: '#ffffff',
        padding: '80px 0'
    };

    const stats = [
        { number: "20K+", label: "Students Registered" },
        { number: "500+", label: "Hiring Partners" },
        { number: "75+", label: "Cities Covered" },
        { number: "1000+", label: "Internship Drives" }
    ];

    return (
        <section style={statsStyle}>
            <div className="container">
                <div className="row text-center g-4">
                    {stats.map((stat, index) => (
                        <div className="col-md-3 col-6" key={index}>
                            <h3 style={{ fontSize: '2.5rem', fontWeight: '700' }}>{stat.number}</h3>
                            <p style={{ margin: '0', opacity: '0.9' }}>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;