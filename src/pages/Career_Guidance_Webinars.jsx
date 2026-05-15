import React from 'react';

import FloatingWhatsApp from '../components/FloatingWhatsApp';
import Webinar from '../components/Webinar';
import BottomSection from '../components/BottomSection';


const Career_Guidance_Webinars = () => {

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

            <Webinar />
            <BottomSection />


            {/* <Footer /> */}
            <FloatingWhatsApp />


        </div>
    );
};

export default Career_Guidance_Webinars;