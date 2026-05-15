import React from 'react';

import FloatingWhatsApp from '../components/FloatingWhatsApp';
import Data_Science_Hero from '../components/Data_Science_Hero';
import Data_Science_Review from '../components/Data_Science_Review';
import Data_Science_VideoTestimonial from '../components/Data_Science_VideoTestimonials';
import Data_Science_Company from '../components/Data_Science_Company';
import Data_Science_ProjectSection from '../components/Data_Science_ProjectSection';
import UI_UX_GetPlacement from '../components/UI_UX_GetPlacement';
import UI_UX_PlacementReady from '../components/UI_UX_PlacementReady';
import UI_UX_Benefits from '../components/UI_UX_Benefits';
import UI_UX_PlacedSlider from '../components/UI_UX_PlacedSlider';
import Data_Science_TopCareer from '../components/Data_Science_TopCareer';
import Data_Science_Certificate from '../components/Data_Science_Certificate';
import Data_Science_Skills from '../components/Data_Science_Skills';
import Data_Science_Fees from '../components/Data_Science_Fees';



const DataScience = () => {

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

            <Data_Science_Hero />
            <Data_Science_Review />
            <Data_Science_VideoTestimonial />
            <Data_Science_Company />
            <Data_Science_ProjectSection />
            <UI_UX_GetPlacement />
            <UI_UX_PlacementReady />
            <UI_UX_Benefits />
            <UI_UX_PlacedSlider />
            <Data_Science_TopCareer />
            <Data_Science_Certificate />
            <Data_Science_Skills />
            <Data_Science_Fees />




            {/* <Footer /> */}
            <FloatingWhatsApp />
        </div>
    );
};

export default DataScience;