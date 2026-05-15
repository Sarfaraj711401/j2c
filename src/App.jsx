import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

// Global Components
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import ForEmployerNavbar from './components/ForEmployerNavbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Programming_With_Python from './pages/Programming_With_Python';
import Web_Development_AI from './pages/Web_Development_AI';
import Digital_AI from './pages/Digital_AI';
import MLwithAI from './pages/MLwithAI';
import AdvanceExcel from './pages/AdvanceExcel';
import AutoCad from './pages/AutoCad';
import DataScience_With_AI from './pages/DataScience_With_AI';
import AI_and_Machine_Learning from './pages/AI_and_Machine_Learning';
import UI_UX from './pages/UI_UX';
import DataScience from './pages/DataScience';
import Product_Management from './pages/Product_Management';
import FinancialModeling from './pages/FinancialModeling';
import Supply_Chain_mng from './pages/Supply_Chain_mng';
import SoftwareTesting from './pages/SoftwareTesting';
import DigitalMarketing from './pages/DigitalMarketing';
import HumanResource from './pages/HumanResource';
import Full_Stack_Development from './pages/Full_Stack_Development';
import CareerGapRegistration from './pages/CareerGapRegistration';
import Staffing_Solutions from './pages/Staffing_Solutions';
import Internship_Drives from './pages/Internship_Drives';
import J2C_Placement_Partner from './pages/J2C_Placement_Partner';
import College_Training_Workshops from './pages/College_Training_Workshops';
import Career_Guidance_Webinars from './pages/Career_Guidance_Webinars';
import Campus_Hiring_Solutions from './pages/Campus_Hiring_Solutions';
import Campus_Ambassador_Program from './pages/Campus_Ambassador_Program';
import Leaderships from './pages/Leaderships';
import J2C_Pro from './pages/J2C_Pro';
import ForEmployers from './pages/ForEmployers';
import Login from './pages/Login';
import Register from './pages/Register';
import EmailRegister from './pages/EmailRegister';
import JobHireReady from './pages/JobHireReady';

function Layout() {
  const location = useLocation();

  // Conditions
  const isEmployerPage = location.pathname.startsWith("/for-employers");
  const isLoginPage = location.pathname === "/login-form";
  const isRegisterPage = location.pathname === "/register";
  const isEmailRegisterPage = location.pathname === "/emailRegister";

  return (
    <>
      <ScrollToTop />

      {/* Header Control */}
      {!isEmployerPage && !isLoginPage && !isRegisterPage && !isEmailRegisterPage &&<TopBar />}
      {!isLoginPage && !isRegisterPage && !isEmailRegisterPage && (isEmployerPage ? <ForEmployerNavbar /> : <NavBar />)}

      {/* Main Content */}
      <div style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/programming-with-python" element={<Programming_With_Python />} />
          <Route path="/web-development-ai" element={<Web_Development_AI />} />
          <Route path="/digital-ai" element={<Digital_AI />} />
          <Route path="/machine-learning" element={<MLwithAI />} />
          <Route path="/advanced-excel" element={<AdvanceExcel />} />
          <Route path="/autocad" element={<AutoCad />} />
          <Route path="/data-science-ai" element={<DataScience_With_AI />} />
          <Route path="/ai-ml-course" element={<AI_and_Machine_Learning />} />
          <Route path="/ui-ux" element={<UI_UX />} />
          <Route path="/data-science" element={<DataScience />} />
          <Route path="/product-management" element={<Product_Management />} />
          <Route path="/financial modeling" element={<FinancialModeling />} />
          <Route path="/supply-chain-logistics" element={<Supply_Chain_mng />} />
          <Route path="/software-testing" element={<SoftwareTesting />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/human-resource-mng" element={<HumanResource />} />
          <Route path="/full-stack-development" element={<Full_Stack_Development />} />
          <Route path="/career-gap" element={<CareerGapRegistration />} />
          <Route path="/staffing-solution" element={<Staffing_Solutions />} />
          <Route path="/internship-drives" element={<Internship_Drives />} />
          <Route path="/placement-partner" element={<J2C_Placement_Partner />} />
          <Route path="/clg-training-workshops" element={<College_Training_Workshops />} />
          <Route path="/career_webinars" element={<Career_Guidance_Webinars />} />
          <Route path="/campus-hiring-solution" element={<Campus_Hiring_Solutions />} />
          <Route path="/campus-ambassador-program" element={<Campus_Ambassador_Program />} />
          <Route path="/leaderships" element={<Leaderships />} />
          <Route path="/j2c-pro" element={<J2C_Pro />} />
          <Route path="/for-employers" element={<ForEmployers />} />
          <Route path="/login-form" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/emailRegister" element={<EmailRegister />} />
          <Route path="/job-hire-ready" element={<JobHireReady />} />
        </Routes>
      </div>

      {/* Footer Control */}
      {!isLoginPage && !isRegisterPage && !isEmailRegisterPage && <Footer />}
      {!isEmployerPage && !isLoginPage && !isRegisterPage && !isEmailRegisterPage &&<FloatingWhatsApp />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;