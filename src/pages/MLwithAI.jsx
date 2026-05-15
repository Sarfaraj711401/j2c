import React from 'react';

import FloatingWhatsApp from '../components/FloatingWhatsApp';
import ML_HeroSection from '../components/ML_HeroSection';
import ML_Review_Section from '../components/ML_Review_Section';
import ML_WhySection from '../components/ML_WhySection';
import ML_PlacementSection from '../components/ML_PlacementSection';
import ML_AISection from '../components/ML_AISection';
import ML_Training_Section from '../components/ML_Training_Section';
import OtherTraining from '../components/OtherTraining';
import Certification from '../components/Certification';
import ComparisonTable from '../components/ComparisonTable';
import ML_TeachersSection from '../components/ML_TeachersSection';
import ML_OverviewSection from '../components/ML_OverviewSection';
import ML_SyllabusSection from '../components/ML_SyllabusSection';




const MLwithAI = () => {

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

            <ML_HeroSection />
            <ML_Review_Section />
            <ML_WhySection />
            <ML_PlacementSection />
            <ML_AISection />
            <ML_Training_Section />
            <OtherTraining />
            <Certification />
            <ComparisonTable />
            <ML_TeachersSection />
            <ML_OverviewSection />
            <ML_SyllabusSection />




            
            {/* <Footer /> */}
            <FloatingWhatsApp />
        </div>
    );
};

export default MLwithAI;