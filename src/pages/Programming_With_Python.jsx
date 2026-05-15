import React from 'react';

import Python_Hero from '../components/Python_Hero';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import Reviews from '../components/Reviews';
import WhySection from '../components/WhySection';
import PlacementSection from '../components/PlacementSection';
import AISection from '../components/AISection';
import Python_Training from '../components/Python_Training';
import OtherTraining from '../components/OtherTraining';
import Certification from '../components/Certification';
import ComparisonTable from '../components/ComparisonTable';
import Teachers from '../components/Teachers';
import Overview from '../components/Overview';
import SyllabusSection from '../components/SyllabusSection';



const Programming_With_Python = () => {

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

            <Python_Hero />
            <Reviews />
            <WhySection />
            <PlacementSection />
            <AISection />
            <Python_Training />
            <OtherTraining />
            <Certification />
            <ComparisonTable />
            <Teachers />
            <Overview />
            <SyllabusSection />

           

            {/* <Footer /> */}
            <FloatingWhatsApp />
        </div>
    );
};

export default Programming_With_Python;