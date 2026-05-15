import React from 'react';

import FloatingWhatsApp from '../components/FloatingWhatsApp';
import Placement_Partner_Hero from '../components/Placement_Partner_Hero';
import PlacementPartnerStats from '../components/PlacementPartnerStats';
import Placement_Partner_Trusted from '../components/Placement_Partner_Trusted';
import JoinBestSection from '../components/JoinBestSection';
import Placement_Partner_Prepare from '../components/Placement_Partner_Prepare';
import TpoRegistration from '../components/TpoRegistration';


const J2C_Placement_Partner = () => {

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

            <Placement_Partner_Hero />
            <PlacementPartnerStats />
            <Placement_Partner_Trusted />
            <JoinBestSection />
            <Placement_Partner_Prepare />
            <TpoRegistration />
            
           



            {/* <Footer /> */}
            <FloatingWhatsApp />


        </div>
    );
};

export default J2C_Placement_Partner;