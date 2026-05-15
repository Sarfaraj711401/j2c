import React from 'react';

import FloatingWhatsApp from '../components/FloatingWhatsApp';
import Digital_AI_Hero from '../components/Digital_AI_Hero';
import Digital_AI_Review from '../components/Digital_AI_Review';
import Digital_WhySection from '../components/Digital_WhySection';
import Digital_PlacementSection from '../components/Digital_PlacementSection';
import Digital_AISection from '../components/Digital_AISection';
import TrainingSection from '../components/TrainingSection';
import OtherTraining from '../components/OtherTraining';
import Certification from '../components/Certification';
import ComparisonTable from '../components/ComparisonTable';
import Digital_TeachersSection from '../components/Digital_TeachersSection';
import Digital_OverviewSection from '../components/Digital_OverviewSection';
import Digital_SyllabusSection from '../components/Digital_SyllabusSection';



const Digital_AI = () => {

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

            <Digital_AI_Hero />
            <Digital_AI_Review />
            <Digital_WhySection />
            <Digital_PlacementSection />
            <Digital_AISection />
            <TrainingSection />
            <OtherTraining />
            <Certification />
            <ComparisonTable />
            <Digital_TeachersSection />
            <Digital_OverviewSection />
            <Digital_SyllabusSection />


             
            {/* <Footer /> */}
            <FloatingWhatsApp />
        </div>
    );
};

export default Digital_AI;