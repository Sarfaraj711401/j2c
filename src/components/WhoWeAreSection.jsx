import React from 'react';
import InfoCard from './InfoCard';

const WhoWeAreSection = () => {
    const sectionData = [
        {
            icon: "fas fa-rocket",
            title: "Career Launchpad",
            description: "We help students kickstart their careers with internships and entry-level roles aligned to real industry needs."
        },
        {
            icon: "fas fa-building",
            title: "Industry Connections",
            description: "Partnered with companies and recruiters to bring genuine, verified opportunities directly to candidates."
        },
        {
            icon: "fas fa-graduation-cap",
            title: "Skill-Focused Growth",
            description: "Our platform promotes learning, practical exposure, and career readiness beyond just job listings."
        }
    ];

    return (
        <section style={{ padding: '80px 0' }}>
            <div className="container text-center">
                <h2 style={{ fontWeight: '700', fontSize: '2.3rem', marginBottom: '20px' }}>Who We Are</h2>
                <p style={{ maxWidth: '800px', margin: '0 auto 50px', color: '#555', fontSize: '1.05rem' }}>
                    JourneyToCareers is a next-generation job portal dedicated to bridging the gap
                    between education and employment. We connect students, freshers, and early
                    professionals with verified internship drives, job opportunities, and
                    career-focused skill programs across India.
                </p>

                <div className="row g-4">
                    {sectionData.map((item, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <InfoCard icon={item.icon} title={item.title} description={item.description} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhoWeAreSection;