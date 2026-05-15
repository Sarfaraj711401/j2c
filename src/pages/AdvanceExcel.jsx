import React from 'react';

import FloatingWhatsApp from '../components/FloatingWhatsApp';
import AdvancedHeroSection from '../components/AdvancedHeroSection';
import Advanced_Review from '../components/Advanced_Review';
import Advanced_WhySection from '../components/Advanced_WhySection';
import ML_PlacementSection from '../components/ML_PlacementSection';
import Advanced_AI_Section from '../components/Advanced_AI_Section';
import Advanced_Training from '../components/Advanced_Training';
import OtherTraining from '../components/OtherTraining';
import Certification from '../components/Certification';
import ComparisonTable from '../components/ComparisonTable';
import Advanced_TeachersSection from '../components/Advanced_TeachersSection';
import Advanced_Overview from '../components/Advanced_Overview';
import Advanced_SyllabusSection from '../components/Advanced_SyllabusSection';




const AdvanceExcel = () => {

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


            <AdvancedHeroSection />
            <Advanced_Review />
            <Advanced_WhySection />
            <ML_PlacementSection />
            <Advanced_AI_Section />
            <Advanced_Training />
            <OtherTraining />
            <Certification />
            <ComparisonTable />
            <Advanced_TeachersSection />
            <Advanced_Overview />
            <Advanced_SyllabusSection />





            {/* <Footer /> */}
            <FloatingWhatsApp />
        </div>
    );
};

export default AdvanceExcel;