import React from 'react';
import AboutHeroSection from '../components/AboutHeroSection';
import WhoWeAreSection from '../components/WhoWeAreSection';
import StatsSection from '../components/StatsSection';
import TeamSection from '../components/TeamSection';
// import TopBar from '../components/TopBar';
// import NavBar from '../components/NavBar';
import MissionVisionSection from '../components/MissionVisionSection';
// import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const AboutUs = () => {
    const pageStyle = {
        fontFamily: "'Roboto', sans-serif",
        background: '#f8fbff',
        color: '#333',
        minHeight: '100vh',
        position: 'relative'
    };

    return (
        <div style={pageStyle}>
            {/* <TopBar /> */}
            {/* <NavBar /> */}

            <AboutHeroSection />
            <WhoWeAreSection />
            <StatsSection />
            <MissionVisionSection />
            {/* If you ever need to remove a section, just comment it out! */}
            <TeamSection />

            {/* <Footer /> */}
            <FloatingWhatsApp />
        </div>
    );
};

export default AboutUs;