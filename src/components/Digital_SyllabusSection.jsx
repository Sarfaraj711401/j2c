import React from "react";
import "./SyllabusSection.css";

const Digital_SyllabusSection = () => {
  return (
    <section className="container syllabus-section my-5">

      <h2 className="syllabus-title text-center mb-5">
        Digital Marketing Course with AI – Syllabus
      </h2>

      <div className="row g-4">

        {/* Module 1 */}
        <div className="col-md-6">
          <div className="syllabus-card">
            <h5>
              <i className="bi bi-globe"></i> Introduction to Digital Marketing
            </h5>
            <ul>
              <li>Digital Marketing Fundamentals</li>
              <li>Traditional vs Digital Marketing</li>
              <li>Customer Journey & Funnels</li>
              <li>Career Scope & Opportunities</li>
            </ul>
          </div>
        </div>

        {/* Module 2 */}
        <div className="col-md-6">
          <div className="syllabus-card">
            <h5>
              <i className="bi bi-search"></i> Search Engine Optimization (SEO)
            </h5>
            <ul>
              <li>Keyword Research</li>
              <li>On-Page & Off-Page SEO</li>
              <li>Technical SEO</li>
              <li>SEO Tools (Ahrefs, SEMrush)</li>
            </ul>
          </div>
        </div>

        {/* Module 3 */}
        <div className="col-md-6">
          <div className="syllabus-card">
            <h5>
              <i className="bi bi-megaphone"></i> Social Media Marketing
            </h5>
            <ul>
              <li>Facebook, Instagram & LinkedIn</li>
              <li>Content Strategy</li>
              <li>Influencer Marketing</li>
              <li>Social Media Analytics</li>
            </ul>
          </div>
        </div>

        {/* Module 4 */}
        <div className="col-md-6">
          <div className="syllabus-card">
            <h5>
              <i className="bi bi-cash-stack"></i> Performance Marketing
            </h5>
            <ul>
              <li>Google Ads (Search, Display)</li>
              <li>Facebook & Instagram Ads</li>
              <li>Conversion Tracking</li>
              <li>Remarketing Campaigns</li>
            </ul>
          </div>
        </div>

        {/* Module 5 */}
        <div className="col-md-6">
          <div className="syllabus-card">
            <h5>
              <i className="bi bi-envelope-paper"></i> Email & Content Marketing
            </h5>
            <ul>
              <li>Email Campaign Strategy</li>
              <li>Marketing Automation</li>
              <li>Copywriting Basics</li>
              <li>Blog & Video Marketing</li>
            </ul>
          </div>
        </div>

        {/* Module 6 */}
        <div className="col-md-6">
          <div className="syllabus-card">
            <h5>
              <i className="bi bi-graph-up-arrow"></i> Analytics & AI Tools
            </h5>
            <ul>
              <li>Google Analytics 4 (GA4)</li>
              <li>Google Tag Manager</li>
              <li>ChatGPT & AI Marketing Tools</li>
              <li>Marketing Automation with AI</li>
            </ul>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Digital_SyllabusSection;