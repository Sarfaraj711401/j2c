import React from 'react';


import FloatingWhatsApp from '../components/FloatingWhatsApp';
import Autocad_Hero from '../components/Autocad_Hero';
import Autocad_Review from '../components/Autocad_Review';
import Autocad_WhySection from '../components/Autocad_WhySection';
import ML_PlacementSection from '../components/ML_PlacementSection';
import Autocad_AISection from '../components/Autocad_AISection';
import Autocad_Training from '../components/Autocad_Training';
import OtherTraining from '../components/OtherTraining';
import Certification from '../components/Certification';
import ComparisonTable from '../components/ComparisonTable';
import Autocad_Teachers from '../components/Autocad_Teachers';
import Autocad_OverviewSection from '../components/Autocad_OverviewSection';
import Autocad_SyllabusSection from '../components/Autocad_SyllabusSection';


const AutoCad = () => {

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
            <Autocad_Hero />
            <Autocad_Review />
            <Autocad_WhySection />
            <ML_PlacementSection />
            <Autocad_AISection />
            <Autocad_Training />
            <OtherTraining />
            <Certification />
            <ComparisonTable />
            <Autocad_Teachers />
            <Autocad_OverviewSection />
            <Autocad_SyllabusSection />



            {/* <Footer /> */}
            <FloatingWhatsApp />
        </div>
    );
};

export default AutoCad;