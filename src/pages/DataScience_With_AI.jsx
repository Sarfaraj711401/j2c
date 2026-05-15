import React from 'react';

import FloatingWhatsApp from '../components/FloatingWhatsApp';
import DataScience_Hero from '../components/DataScience_Hero';
import DataScience_Review from '../components/DataScience_Review';
import DataScience_WhySection from '../components/DataScience_WhySection';
import ML_PlacementSection from '../components/ML_PlacementSection';
import Advanced_AI_Section from '../components/Advanced_AI_Section';
import DataScience_Training from '../components/DataScience_Training';
import OtherTraining from '../components/OtherTraining';
import Certification from '../components/Certification';
import ComparisonTable from '../components/ComparisonTable';
import DataScience_Teachers from '../components/DataScience_Teachers';
import DataScienceOverview from '../components/DataScienceOverview';
import DataScienceSyllabus from '../components/DataScienceSyllabus';


const DataScience_With_AI = () => {

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

            <DataScience_Hero />
            <DataScience_Review />
            <DataScience_WhySection />
            <ML_PlacementSection />
            <Advanced_AI_Section />
            <DataScience_Training />
            <OtherTraining />
            <Certification />
            <ComparisonTable />
            <DataScience_Teachers />
            <DataScienceOverview />
            <DataScienceSyllabus />


             {/* <Footer /> */}
            <FloatingWhatsApp />
        </div>
    );
};

export default DataScience_With_AI;