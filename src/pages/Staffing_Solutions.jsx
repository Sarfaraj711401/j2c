import React from 'react';

import FloatingWhatsApp from '../components/FloatingWhatsApp';
import Staffing_Hero from '../components/Staffing_Hero';
import Staffing_BrandTrusted from '../components/Staffing_BrandTrusted';
import Staffing_Hiring from '../components/Staffing_Hiring';
import Staffing_Service from '../components/Staffing_Service';
import Staffing_WhyJ2C from '../components/Staffing_WhyJ2C';
import Staffing_Success from '../components/Staffing_Success';
import Staffing_HireForm from '../components/Staffing_HireForm';


const Staffing_Solutions = () => {

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

            <Staffing_Hero />
            <Staffing_BrandTrusted />
            <Staffing_Hiring />
            <Staffing_Service />
            <Staffing_WhyJ2C />
            <Staffing_Success />
            <Staffing_HireForm />



            {/* <Footer /> */}
            <FloatingWhatsApp />


        </div>
    );
};

export default Staffing_Solutions;