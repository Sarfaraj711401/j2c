import React from 'react';

import FloatingWhatsApp from '../components/FloatingWhatsApp';
import CareerGapForm from '../components/CareerGapForm';


const CareerGapRegistration = () => {

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
            
            <CareerGapForm />



            {/* <Footer /> */}
            <FloatingWhatsApp />


        </div>
    );
};

export default CareerGapRegistration;