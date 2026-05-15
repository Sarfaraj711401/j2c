import React from 'react';

import FloatingWhatsApp from '../components/FloatingWhatsApp';
import J2CPro from '../components/J2CPro';


const J2C_Pro = () => {

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
            
            
            <J2CPro />


            {/* <Footer /> */}
            <FloatingWhatsApp />


        </div>
    );
};

export default J2C_Pro;