import React from 'react';

import FloatingWhatsApp from '../components/FloatingWhatsApp';
import FinancialModeling_Hero from '../components/FinancialModeling_Hero';
import FinancialModeling_Review from '../components/FinancialModeling_Review';
import FinancialModeling_VideoTestimonial from '../components/FinancialModeling_VideoTestimonial';
import FinancialModeling_Company from '../components/FinancialModeling_Company';
import FinancialModeling_Project from '../components/FinancialModeling_Project';
import UI_UX_GetPlacement from '../components/UI_UX_GetPlacement';
import UI_UX_PlacementReady from '../components/UI_UX_PlacementReady';
import UI_UX_Benefits from '../components/UI_UX_Benefits';
import UI_UX_PlacedSlider from '../components/UI_UX_PlacedSlider';
import FinancialModeling_Career from '../components/FinancialModeling_Career';
import FinancialModeling_Certificate from '../components/FinancialModeling_Certificate';
import FinancialModeling_Fees from '../components/FinancialModeling_Fees';

const FinancialModeling = () => {

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
            
            <FinancialModeling_Hero />
            <FinancialModeling_Review />
            <FinancialModeling_VideoTestimonial />
            <FinancialModeling_Company />
            <FinancialModeling_Project />
            <UI_UX_GetPlacement />
            <UI_UX_PlacementReady />
            <UI_UX_Benefits />
            <UI_UX_PlacedSlider />
            <FinancialModeling_Career />
            <FinancialModeling_Certificate />
            <FinancialModeling_Fees />


            {/* <Footer /> */}
            <FloatingWhatsApp />


        </div>
    );
};

export default FinancialModeling;