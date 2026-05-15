import React from 'react';

import FloatingWhatsApp from '../components/FloatingWhatsApp';
import AI_ML_Hero from '../components/AI_ML_Hero';
import AI_and_ML_Review from '../components/AI_and_ML_Review';
import AI_and_ML_Why from '../components/AI_and_ML_Why';
import AI_and_ML_Training from '../components/AI_and_ML_Training';
import OtherTraining from '../components/OtherTraining';
import Certification from '../components/Certification';
import ComparisonTable from '../components/ComparisonTable';
import AI_and_ML_Teachers from '../components/AI_and_ML_Teachers';
import AI_and_ML_Overview from '../components/AI_and_ML_Overview';
import AI_and_ML_Syllabus from '../components/AI_and_ML_Syllabus';





const AI_and_Machine_Learning = () => {

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

            <AI_ML_Hero />
            <AI_and_ML_Review />
            <AI_and_ML_Why />
            <AI_and_ML_Training />
            <OtherTraining />
            <Certification />
            <ComparisonTable />
            <AI_and_ML_Teachers />
            <AI_and_ML_Overview />
            <AI_and_ML_Syllabus />



             {/* <Footer /> */}
            <FloatingWhatsApp />
        </div>
    );
};

export default AI_and_Machine_Learning;