import React from 'react';


import FloatingWhatsApp from '../components/FloatingWhatsApp';
import Product_Management_Hero from '../components/Product_Management_Hero';
import Product_Mng_Review from '../components/Product_Mng_Review';
import Product_Mng_VideoTestimonials from '../components/Product_Mng_VideoTestimonials';
import Product_Mng_Company from '../components/Product_Mng_Company';
import Product_Mng_Project from '../components/Product_Mng_Project';
import UI_UX_GetPlacement from '../components/UI_UX_GetPlacement';
import UI_UX_PlacementReady from '../components/UI_UX_PlacementReady';
import UI_UX_Benefits from '../components/UI_UX_Benefits';
import UI_UX_PlacedSlider from '../components/UI_UX_PlacedSlider';
import Product_Mng_TopCareer from '../components/Product_Mng_TopCareer';
import Product_Mng_Certificate from '../components/Product_Mng_Certificate';
import Product_Mng_SkillsData from '../components/Product_Mng_SkillsData';
import Product_Mng_Fees from '../components/Product_Mng_Fees';



const Product_Management = () => {

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

            <Product_Management_Hero />
            <Product_Mng_Review />
            <Product_Mng_VideoTestimonials />
            <Product_Mng_Company />
            <Product_Mng_Project />
            <UI_UX_GetPlacement />
            <UI_UX_PlacementReady />
            <UI_UX_Benefits />
            <UI_UX_PlacedSlider />
            <Product_Mng_TopCareer />
            <Product_Mng_Certificate />
            <Product_Mng_SkillsData />
            <Product_Mng_Fees />



            {/* <Footer /> */}
            <FloatingWhatsApp />
            </div>
    );
};

export default Product_Management;