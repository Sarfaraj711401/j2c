import React from 'react';

import FloatingWhatsApp from '../components/FloatingWhatsApp';
import SoftwareTesting_Hero from '../components/SoftwareTesting_Hero';
import SoftwareTesting_Review from '../components/SoftwareTesting_Review';
import SoftwareTesting_VideoTestimonial from '../components/SoftwareTesting_VideoTestimonial';
import SoftwareTesting_Company from '../components/SoftwareTesting_Company';
import SoftwareTesting_Project from '../components/SoftwareTesting_Project';
import UI_UX_GetPlacement from '../components/UI_UX_GetPlacement';
import UI_UX_PlacementReady from '../components/UI_UX_PlacementReady';
import UI_UX_Benefits from '../components/UI_UX_Benefits';
import UI_UX_PlacedSlider from '../components/UI_UX_PlacedSlider';
import SoftwareTesting_TopCareer from '../components/SoftwareTesting_TopCareer';
import SoftwareTesting_Certificate from '../components/SoftwareTesting_Certicate';
import SoftwareTesting_Fees from '../components/SoftwareTesting_Fees';


const SoftwareTesting = () => {

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

            <SoftwareTesting_Hero />
            <SoftwareTesting_Review />
            <SoftwareTesting_VideoTestimonial />
            <SoftwareTesting_Company />
            <SoftwareTesting_Project />
            <UI_UX_GetPlacement />
            <UI_UX_PlacementReady />
            <UI_UX_Benefits />
            <UI_UX_PlacedSlider />
            <SoftwareTesting_TopCareer />
            <SoftwareTesting_Certificate />
            <SoftwareTesting_Fees />




            {/* <Footer /> */}
            <FloatingWhatsApp />


        </div>
    );
};

export default SoftwareTesting;