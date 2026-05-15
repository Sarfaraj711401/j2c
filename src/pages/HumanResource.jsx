import React from 'react';

import FloatingWhatsApp from '../components/FloatingWhatsApp';
import HumanResource_Hero from '../components/HumanResource_Hero';
import HumanResource_Review from '../components/HumanResource_Review';
import HumanResource_VideoTestimonial from '../components/HumanResource_VideoTestimonial';
import HumanResource_Company from '../components/HumanResource_Company';
import HumanResource_Project from '../components/HumanResource_Project';
import UI_UX_GetPlacement from '../components/UI_UX_GetPlacement';
import UI_UX_PlacementReady from '../components/UI_UX_PlacementReady';
import UI_UX_Benefits from '../components/UI_UX_Benefits';
import UI_UX_PlacedSlider from '../components/UI_UX_PlacedSlider';
import HumanResource_TopCareer from '../components/HumanResource_TopCareer';
import HumanResource_Certificate from '../components/HumanResource_Certificate';
import HumanResource_Skills from '../components/HumanResource_Skills';
import HumanResource_Fees from '../components/HumanResource_Fees';


const HumanResource = () => {

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

            <HumanResource_Hero />
            <HumanResource_Review />
            <HumanResource_VideoTestimonial />
            <HumanResource_Company />
            <HumanResource_Project />
            <UI_UX_GetPlacement />
            <UI_UX_PlacementReady />
            <UI_UX_Benefits />
            <UI_UX_PlacedSlider />
            <HumanResource_TopCareer />
            <HumanResource_Certificate />
            <HumanResource_Skills />
            <HumanResource_Fees />


            {/* <Footer /> */}
            <FloatingWhatsApp />


        </div>
    );
};

export default HumanResource;