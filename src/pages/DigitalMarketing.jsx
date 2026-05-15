import React from 'react';

import FloatingWhatsApp from '../components/FloatingWhatsApp';
import DigitalMarketing_Hero from '../components/DigitalMarketing_Hero';
import DigitalMarketing_Review from '../components/DigitalMarketing_Review';
import DigitalMarketing_VideoTestimonial from '../components/DigitalMarketing_VideoTestimonial';
import DigitalMarketing_Company from '../components/DigitalMarketing_Company';
import DigitalMarketing_Project from '../components/DigitalMarketing_Project';
import UI_UX_GetPlacement from '../components/UI_UX_GetPlacement';
import UI_UX_PlacementReady from '../components/UI_UX_PlacementReady';
import UI_UX_Benefits from '../components/UI_UX_Benefits';
import UI_UX_PlacedSlider from '../components/UI_UX_PlacedSlider';
import DigitalMarketing_TopCareer from '../components/DigitalMarketing_TopCareer';
import DigitalMarketing_Certificate from '../components/DigitalMarketing_Certificate';
import DigitalMarketing_Skills from '../components/DigitalMarketing_Skills';
import DigitalMarketing_Fees from '../components/DigitalMarketing_Fees';


const DigitalMarketing = () => {

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

            <DigitalMarketing_Hero />
            <DigitalMarketing_Review />
            <DigitalMarketing_VideoTestimonial />
            <DigitalMarketing_Company />
            <DigitalMarketing_Project />
            <UI_UX_GetPlacement />
            <UI_UX_PlacementReady />
            <UI_UX_Benefits />
            <UI_UX_PlacedSlider />
            <DigitalMarketing_TopCareer />
            <DigitalMarketing_Certificate />
            <DigitalMarketing_Skills />
            <DigitalMarketing_Fees />


             {/* <Footer /> */}
            <FloatingWhatsApp />
        </div>
    );
};

export default DigitalMarketing;