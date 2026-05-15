// src/Home.jsx
import React from 'react';
import HomeHeroSection from '../components/HomeHeroSection.jsx';
// import TopBar from '../components/TopBar.jsx';
// import NavBar from '../components/NavBar.jsx';
import SearchBar from '../components/SearchBar.jsx';
import FloatingWhatsApp from '../components/FloatingWhatsApp.jsx';
import ExploreOpportunities from '../components/ExploreOpportunities.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import TopCategories from '../components/TopCategories.jsx';
import FeaturedCompanies from '../components/FeaturedCompanies.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import SuccessStories from '../components/SuccessStories.jsx';
import PopularCourses from '../components/PopularCourses.jsx';
import FaqSection from '../components/FaqSection.jsx';
import CallToAction from '../components/CallToAction.jsx';
import ContactUs from '../components/ContactUs.jsx';
// import Footer from '../components/Footer.jsx';

const Home = () => {
    return (
        <div style={{ backgroundColor: '#fdfdfd', minHeight: '100vh', position: 'relative' }}>
            {/* <TopBar /> */}
            {/* <NavBar /> */}
            <SearchBar />
            <HomeHeroSection />

            {/* Other sections of the homepage would go here later (Trending Jobs, Categories, etc.) */}
            <ExploreOpportunities />
            <HowItWorks />
            <TopCategories />
            <FeaturedCompanies />
            <WhyChooseUs />
            <SuccessStories />
            <PopularCourses />
            <CallToAction />
            <FaqSection />
            <ContactUs />
            {/* <Footer /> */}

            <FloatingWhatsApp />
        </div>
    );
};

export default Home;