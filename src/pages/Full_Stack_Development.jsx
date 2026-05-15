import React from 'react';

import FloatingWhatsApp from '../components/FloatingWhatsApp';
import Full_Stack_Hero from '../components/Full_Stack_Hero';
import Full_Stack_Review from '../components/Full_Stack_Review';
import Full_Stack_VideoTestimal from '../components/Full_Stack_VideoTestimal';
import Full_Stack_Comapny from '../components/Full_Stack_Company';
import Full_Stack_Project from '../components/Full_Stack_Project';
import UI_UX_GetPlacement from '../components/UI_UX_GetPlacement';
import UI_UX_PlacementReady from '../components/UI_UX_PlacementReady';
import UI_UX_Benefits from '../components/UI_UX_Benefits';
import UI_UX_PlacedSlider from '../components/UI_UX_PlacedSlider';
import Full_Stack_TopCareer from '../components/Full_Stack_TopCareer';
import Full_Stack_Certificate from '../components/Full_Stack_Certificate';
import Full_Stack_Fees from '../components/Full_Stack_Fees';


const Full_Stack_Development = () => {

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

            <Full_Stack_Hero />
            <Full_Stack_Review />
            <Full_Stack_VideoTestimal />
            <Full_Stack_Comapny />
            <Full_Stack_Project />
            <UI_UX_GetPlacement />
            <UI_UX_PlacementReady />
            <UI_UX_Benefits />
            <UI_UX_PlacedSlider />
            <Full_Stack_TopCareer />
            <Full_Stack_Certificate />
            <Full_Stack_Fees />



            {/* <Footer /> */}
            <FloatingWhatsApp />


        </div>
    );
};

export default Full_Stack_Development;