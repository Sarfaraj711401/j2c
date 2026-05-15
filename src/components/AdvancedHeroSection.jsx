import React, { useState } from "react";
import "./HeroWebDev.css";
import PCSImage from "../assets/PCS_GLOBAL.jpg";

function AdvancedHeroSection() {

 
   const [formData, setFormData] = useState({
     fullName: "",
     email: "",
     mobile: "",
     branch: "",
     graduationYear: ""
   });
 
   const [message, setMessage] = useState("");
   const [messageType, setMessageType] = useState("");
 
   // Handle input
   const handleChange = (e) => {
     setFormData({
       ...formData,
       [e.target.name]: e.target.value
     });
   };
 
   // Handle submit
   const handleSubmit = async (e) => {
     e.preventDefault();
 
     try {
       // 👉 Replace with your backend API
       console.log(formData);
 
       setMessage("Application submitted successfully!");
       setMessageType("success");
 
     } catch (error) {
       setMessage("Something went wrong!");
       setMessageType("danger");
     }
   };
 
   return (
     <section className="hero-section d-flex align-items-center">
       <div className="container">
         <div className="row align-items-center">
 
           {/* LEFT SIDE */}
           <div className="col-lg-7 text-white py-5 hero-left">
 
             <div className="badges">
               <span className="badge bg-warning text-dark px-3 py-2 fw-bold">
                 Govt-certified
               </span>
 
               <span className="badge bg-dark-purple px-3 py-2">
                 ⭐ 5 | 20,336 Enrolled
               </span>
             </div>
 
             <h1 className="display-4 fw-bold mb-4">
               Advanced Excel course with AI
             </h1>
 
             <ul className="list-unstyled mb-5 fs-5">
               <li>Develop AI/ML solutions for automation and data analysis</li>
               <li>Includes placement assistance</li>
             </ul>
 
             {/* INFO CARD */}
             <div className="info-card mb-4">
               <div className="info-card-header">
                 8 weeks online course, 1 hour/day
               </div>
 
               <div className="info-card-body d-flex align-items-center justify-content-between bg-white text-dark p-3 rounded-bottom">
                 <span className="text-muted small">
                   Certifications from
                 </span>
 
                 <img
                   src={PCSImage}
                   alt="PCS GLOBAL"
                   style={{ height: "50px" }}
                 />
 
                 <span className="text-muted">|</span>
                 <span className="fw-bold text-primary">
                   JourneyToCareer
                 </span>
               </div>
             </div>
 
             {/* OFFER */}
             <div className="offer-banner d-flex align-items-center p-3 bg-white text-dark rounded shadow-sm">
               <div className="offer-icon me-3">1+1</div>
               <p className="mb-0 small fw-medium">
                 1+1 Offer: Get Internship & Job Prep FREE!
               </p>
             </div>
 
           </div>
 
           {/* RIGHT FORM */}
           <div className="col-lg-5">
             <div className="hero-form">
 
               {/* ALERT (JSP → React) */}
               {message && (
                 <div className={`alert alert-${messageType}`}>
                   {message}
                   <button
                     className="btn-close"
                     onClick={() => setMessage("")}
                   >
                     ×
                   </button>
                 </div>
               )}
 
               <h3>Interested? Apply Now</h3>
 
               <form onSubmit={handleSubmit}>
 
                 <input
                   type="hidden"
                   name="courseName"
                   value="Fullstack"
                 />
 
                 <label>Full Name</label>
                 <input
                   type="text"
                   name="fullName"
                   placeholder="Enter Full name"
                   onChange={handleChange}
                   required
                 />
 
                 <label>Email</label>
                 <input
                   type="email"
                   name="email"
                   placeholder="Email"
                   onChange={handleChange}
                 />
 
                 <label>Phone number</label>
                 <input
                   type="number"
                   name="mobile"
                   placeholder="Enter phone number"
                   onChange={handleChange}
                   required
                 />
 
                 <label>Education</label>
                 <select name="branch" onChange={handleChange} required>
                   <option value="">Select degree</option>
                   <option>B.Tech</option>
                   <option>B.Sc</option>
                   <option>BCA</option>
                   <option>MCA</option>
                   <option>M.Tech</option>
                 </select>
 
                 <label>Graduation Year</label>
                 <select
                   name="graduationYear"
                   onChange={handleChange}
                   required
                 >
                   <option value="">Select year</option>
                   <option>2024</option>
                   <option>2025</option>
                   <option>2026</option>
                   <option>2027</option>
                   <option>2028</option>
                 </select>
 
                 <button className="apply-btn">
                   Apply Now
                 </button>
 
               </form>
             </div>
           </div>
 
         </div>
       </div>
     </section>
   );
 }

export default AdvancedHeroSection;