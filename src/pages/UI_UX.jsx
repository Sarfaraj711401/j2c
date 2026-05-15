import React from 'react';

import FloatingWhatsApp from '../components/FloatingWhatsApp';
import UI_UX_Hero from '../components/UI_UX_Hero';
import UI_UX_Review from '../components/UI_UX_Review';
import UI_UX_VideoTestimonial from '../components/UI_UX_VideoTestimonial';
import UI_UX_Company_Section from '../components/UI_UX_Company_Section';
import UI_UX_ProjectsSection from '../components/UI_UX_ProjectsSection';
import UI_UX_GetPlacement from '../components/UI_UX_GetPlacement';
import UI_UX_PlacementReady from '../components/UI_UX_PlacementReady';
import UI_UX_Benefits from '../components/UI_UX_Benefits';
import UI_UX_PlacedSlider from '../components/UI_UX_PlacedSlider';
import UI_UX_TopCareer from '../components/UI_UX_TopCareer';
import UI_UX_Certificate from '../components/UI_UX_Certificate';
import UI_UX_Skills from '../components/UI_UX_Skills';
import UI_UX_Fees from '../components/UI_UX_Fees';

const UI_UX = () => {

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


            <UI_UX_Hero />
            <UI_UX_Review />
            <UI_UX_VideoTestimonial />
            <UI_UX_Company_Section />
            <UI_UX_ProjectsSection />
            <UI_UX_GetPlacement />
            <UI_UX_PlacementReady />
            <UI_UX_Benefits />
            <UI_UX_PlacedSlider />
            <UI_UX_TopCareer />
            <UI_UX_Certificate />
            <UI_UX_Skills />
            <UI_UX_Fees />

            {/* <Footer /> */}
            <FloatingWhatsApp />


        </div>
    );
};

export default UI_UX;