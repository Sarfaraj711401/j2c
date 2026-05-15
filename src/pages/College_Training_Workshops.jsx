import React from 'react';

import FloatingWhatsApp from '../components/FloatingWhatsApp';
import Workshop_Hero from '../components/Workshop_Hero';
import WorkshopFeatures from '../components/WorkshopFeatures';
import WorkshopExtra from '../components/WorkshopExtra';
import WorkshopForm from '../components/WorkshopForm';


const College_Training_Workshops = () => {

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

            <Workshop_Hero />
            <WorkshopFeatures />
            <WorkshopExtra />
            <WorkshopForm />




            {/* <Footer /> */}
            <FloatingWhatsApp />


        </div>
    );
};

export default College_Training_Workshops;