import React from 'react';

import FloatingWhatsApp from '../components/FloatingWhatsApp';
import Campus_Amp_Hero from '../components/Campus_Amp_Hero';
import CampusWho from '../components/CampusWho';
import CampusBenefits from '../components/CampusBenefits';
import CampusImpact from '../components/CampusImpact';
import CampusSteps from '../components/CampusSteps';
import CampusRecognition from '../components/CampusRecognition';
import CampusFAQ from '../components/CampusFAQ';
import CampusForm from '../components/CampusForm';



const Campus_Ambassador_Program = () => {

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

            <Campus_Amp_Hero />
            <CampusWho />
            <CampusBenefits />
            <CampusImpact />
            <CampusSteps />
            <CampusRecognition />
            <CampusFAQ />
            <CampusForm />


            {/* <Footer /> */}
            <FloatingWhatsApp />


        </div>
    );
};

export default Campus_Ambassador_Program;