import React from 'react';

import FloatingWhatsApp from '../components/FloatingWhatsApp';
import Campus_Hiring_Hero from '../components/Campus_Hiring_Hero';
import CampusHiringSections from '../components/CampusHiringSections';
import Campus_Hiring_Company from '../components/Campus_Hiring_Company';
import Campus_Hiring_Apply from '../components/Campus_Hiring_Apply';


const Campus_Hiring_Solutions = () => {

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

            <Campus_Hiring_Hero />
            <CampusHiringSections />
            <Campus_Hiring_Company />
            <Campus_Hiring_Apply />

           


            {/* <Footer /> */}
            <FloatingWhatsApp />


        </div>
    );
};

export default Campus_Hiring_Solutions;