import React from 'react';


import FloatingWhatsApp from '../components/FloatingWhatsApp';
import HeroWebDev from '../components/HeroWebDev';
import Web_Reviews from '../components/Web_Reviews';
import WebWhySection from '../components/WebWhySection';
import WebPlacementSection from '../components/WebPlacementSection';
import WebAISection from '../components/WebAISection';
import Web_Training from '../components/Web_Training';
import OtherTraining from '../components/OtherTraining';
import Certification from '../components/Certification';
import ComparisonTable from '../components/ComparisonTable';
import WebTeacher from '../components/WebTeacher';
import WebOverview from '../components/WebOverview';
import WebSyllabus from '../components/WebSyllabus';


const Web_Development_AI = () => {

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

            <HeroWebDev />
            <Web_Reviews />
            <WebWhySection />
            <WebPlacementSection />
            <WebAISection />
            <Web_Training />
            <OtherTraining />
            <Certification />
            <ComparisonTable />
            <WebTeacher />
            <WebOverview />
            <WebSyllabus />



            
            {/* <Footer /> */}
            <FloatingWhatsApp />
        </div>
    );
};

export default Web_Development_AI;