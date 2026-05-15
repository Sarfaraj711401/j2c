import React from 'react';

import FloatingWhatsApp from '../components/FloatingWhatsApp';
import Supply_Chain_Logistics_Hero from '../components/Supply_Chain_mng_Hero';
import Supply_Chain_mng_Review from '../components/Supply_Chain_mng_Review';
import Supply_Chain_mng_VideoTestimal from '../components/Supply_Chain_mng_VideoTestimal';
import Supply_Chain_mng_Company from '../components/Supply_Chain_mng_Company';
import Supply_Chain_mng_Project from '../components/Supply_Chain_mng_Project';
import UI_UX_GetPlacement from '../components/UI_UX_GetPlacement';
import UI_UX_PlacementReady from '../components/UI_UX_PlacementReady';
import UI_UX_Benefits from '../components/UI_UX_Benefits';
import UI_UX_PlacedSlider from '../components/UI_UX_PlacedSlider';
import Supply_Chain_mng_TopCareer from '../components/Supply_Chain_mng_TopCareer';
import Supply_Chain_mng_Certificate from '../components/Supply_Chain_mng_Certificate';
import Supply_Chain_mng_Skills from '../components/Supply_Chain_mng_Skills';
import Supply_Chain_mng_Fees from '../components/Supply_Chain_mng_Fees';

const Supply_Chain_mng = () => {

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

            <Supply_Chain_Logistics_Hero />
            <Supply_Chain_mng_Review />
            <Supply_Chain_mng_VideoTestimal />
            <Supply_Chain_mng_Company />
            <Supply_Chain_mng_Project />
            <UI_UX_GetPlacement />
            <UI_UX_PlacementReady />
            <UI_UX_Benefits />
            <UI_UX_PlacedSlider />
            <Supply_Chain_mng_TopCareer />
            <Supply_Chain_mng_Certificate />
            <Supply_Chain_mng_Skills />  
            <Supply_Chain_mng_Fees />



             {/* <Footer /> */}
            <FloatingWhatsApp />


        </div>
    );
};

export default Supply_Chain_mng;