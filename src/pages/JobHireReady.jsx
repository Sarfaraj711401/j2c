import React from 'react';

import FloatingWhatsApp from '../components/FloatingWhatsApp';
import JobHireReady_Hero from '../components/JobHireReady_Hero';
import JobHireReady_Stats from '../components/JobHireReady_Stats';
import JoinBestSection from '../components/JoinBestSection';
import JobHireReady_Trust from '../components/JobHireReady_Trust';
import JobHireReady_Featured from '../components/JobHireReady_Featured';
import JobHireReady_Skills from '../components/JobHireReady_Skills';
import JobHireReady_Testimonials from '../components/JobHireReady_Testimonials';
import JobHireReady_Categories from '../components/JobHireReady_Categories';
import JobHireReady_Extras from '../components/JobHireReady_Extras';
import JobHireReady_AppCTA from '../components/JobHireReady_AppCTA';



const JobHireReady = () => {

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
          <JobHireReady_Hero />
          <JobHireReady_Stats />
          <JobHireReady_Trust />
          <JobHireReady_Featured />
          <JobHireReady_Skills />
          <JobHireReady_Testimonials />
          <JobHireReady_Categories />
          <JobHireReady_Extras />
          <JobHireReady_AppCTA />
            


            {/* <Footer /> */}
            <FloatingWhatsApp />


        </div>
    );
};

export default JobHireReady;