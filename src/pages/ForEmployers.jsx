import React from 'react';

import FloatingWhatsApp from '../components/FloatingWhatsApp';
import ForEmployerNavbar from '../components/ForEmployerNavbar';
import ForEmployer_Hero from '../components/ForEmployer_Hero';
import ForEmployer_TrustBrand from '../components/ForEmployer_TrustBrand';
import ForEmployer_Features from '../components/ForEmployer_Features';
import ForEmployer_Testimonials from '../components/ForEmployer_Testimonials';
import EmployerProfile from '../components/EmployerProfile';
import EmployerStats from '../components/EmployerStats';
import EmployerPanIndia from '../components/EmployerPanIndia';
import EmployerFAQ from '../components/EmployerFAQ';




const ForEmployers = () => {

    const pageStyle = {
        fontFamily: "'Roboto', sans-serif",
        background: '#f8fbff',
        color: '#333',
        minHeight: '100vh',
        position: 'relative'
    };


      return (
        <div style={pageStyle}>
            


        <ForEmployerNavbar />
        <ForEmployer_Hero />
        <ForEmployer_TrustBrand />
        <ForEmployer_Features />
        <ForEmployer_Testimonials />
        <EmployerProfile />
        <EmployerStats />
        <EmployerPanIndia />
        <EmployerFAQ />
        


        
            
            <FloatingWhatsApp />


        </div>
    );
};

export default ForEmployers;