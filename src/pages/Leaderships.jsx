import React from 'react';

import FloatingWhatsApp from '../components/FloatingWhatsApp';
import Leadership from '../components/Leadership';



const Leaderships = () => {

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

            <Leadership />


            {/* <Footer /> */}
            <FloatingWhatsApp />


        </div>
    );
};

export default Leaderships;