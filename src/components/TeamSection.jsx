import React from 'react';
import TeamCard from './TeamCard';
// Import the image directly from the assets folder
import sunitImage from '../assets/Sunit_Chaudhury_CEO.jpeg';

const TeamSection = () => {
    const teamMembers = [
        {
            image: sunitImage, // Use the imported variable here instead of a string
            icon: null,
            name: "Sunit Chaudhuri",
            role: "Chief Executive Officer (CEO)",
            description: "The mind behind JourneyToCareer. Building a career platform from scratch takes courage, patience, and persistence — and that’s exactly what drives our founder. With a clear focus on student success, he leads the vision and strategy to make career opportunities accessible to every learner."
        },
        {
            image: null,
            icon: "fas fa-laptop-code",
            name: "", // Left blank to match the original HTML design
            role: "Technology Lead",
            description: "The problem solver of the team. Once the headphones are on, the world fades away. From platform performance to seamless user experience, he ensures JourneyToCareer runs smoothly behind the scenes."
        },
        {
            image: null,
            icon: "fas fa-code",
            name: "",
            role: "Product Engineer",
            description: "Always smiling and always building. Whether it’s improving features, testing new ideas, or solving bugs, he brings energy and creativity to the tech team every single day."
        },
        {
            image: null,
            icon: "fas fa-brain",
            name: "",
            role: "Systems & Operations",
            description: "Calm, focused, and detail-oriented. Handles complex workflows and operational challenges with precision. Soft-spoken by nature, sharp when it comes to solving real-world problems."
        },
        {
            image: null,
            icon: "fas fa-users",
            name: "",
            role: "Talent & HR Partner",
            description: "The connector between candidates and companies. From student outreach to recruiter coordination, she ensures the right talent meets the right opportunity at the right time."
        }
    ];

    return (
        <section style={{ padding: '80px 0', background: '#ffffff' }}>
            <div className="container">
                <h2 style={{ fontSize: '2.6rem', fontWeight: '700', color: '#1f4fd8', textAlign: 'center', marginBottom: '50px' }}>
                    Meet the Team
                </h2>

                {/* Using Bootstrap's row-cols classes from your original HTML for perfect responsiveness */}
                <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center">
                    {teamMembers.map((member, index) => (
                        <div className="col" key={index}>
                            <TeamCard
                                image={member.image}
                                icon={member.icon}
                                name={member.name}
                                role={member.role}
                                description={member.description}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;