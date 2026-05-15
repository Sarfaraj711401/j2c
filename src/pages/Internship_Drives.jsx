import React from 'react';

import FloatingWhatsApp from '../components/FloatingWhatsApp';
import Internship_Drives_Hero from '../components/Internship_Drives_Hero';
import Internship_Drives_Stats from '../components/Internship_Drives_Stats';
import Internship_Drives_Why from '../components/Internship_Drives_Why';
import Internship_Drives_Features from '../components/Internship_Drives_Features';
import Internship_Drives_Timeline from '../components/Internship_Drives_Timeline';
import Internship_Drives_Form from '../components/Internship_Drives_Form';


const Internship_Drives = () => {

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

            <Internship_Drives_Hero />
            <Internship_Drives_Stats />
            <Internship_Drives_Why />
            <Internship_Drives_Features />
            <Internship_Drives_Timeline />
            <Internship_Drives_Form />



            {/* <Footer /> */}
            <FloatingWhatsApp />


        </div>
    );
};

export default Internship_Drives;