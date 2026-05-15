import React from "react";

function WebSyllabus() {
  return (
    <section className="container syllabus-section my-5">

      <h2 className="syllabus-title text-center mb-5">
        Web Development Course with AI – Syllabus
      </h2>

      <div className="row g-4">

        {/* Module 1 */}
        <div className="col-md-6">
          <div className="syllabus-card">
            <h5><i className="bi bi-globe"></i> Introduction to Web Development</h5>
            <ul>
              <li>Basics of web development: HTML, CSS, and JavaScript</li>
              <li>Understanding client-side vs server-side development</li>
              <li>Setting up your development environment</li>
              <li>Building your first simple website</li>
            </ul>
          </div>
        </div>

        {/* Module 2 */}
        <div className="col-md-6">
          <div className="syllabus-card">
            <h5><i className="bi bi-search"></i> Advanced Front-End Development</h5>
            <ul>
              <li>Responsive design with Bootstrap and modern CSS frameworks</li>
              <li>Interactive UI components with JavaScript and React.js</li>
              <li>Working with APIs to fetch and display data</li>
            </ul>
          </div>
        </div>

        {/* Module 3 */}
        <div className="col-md-6">
          <div className="syllabus-card">
            <h5><i className="bi bi-megaphone"></i> Back-End Development & Databases</h5>
            <ul>
              <li>Introduction to server-side development (Node.js / Python Flask)</li>
              <li>Database management with SQL & NoSQL</li>
              <li>CRUD operations and building dynamic websites</li>
            </ul>
          </div>
        </div>

        {/* Module 4 */}
        <div className="col-md-6">
          <div className="syllabus-card">
            <h5><i className="bi bi-cash-stack"></i> AI-Powered Web Development</h5>
            <ul>
              <li>Introduction to AI in web development</li>
              <li>Integrating AI tools like ChatGPT, Gemini, Perplexity, SEO.ai, Copy.ai</li>
              <li>Building AI-powered features: chatbots, content generators, and recommendation systems</li>
            </ul>
          </div>
        </div>

        {/* Module 5 */}
        <div className="col-md-6">
          <div className="syllabus-card">
            <h5><i className="bi bi-envelope-paper"></i> Full-Stack Web Applications</h5>
            <ul>
              <li>Combining front-end and back-end for complete web apps</li>
              <li>Deploying web applications on the cloud</li>
              <li>Building intelligent, data-driven websites</li>
            </ul>
          </div>
        </div>

        {/* Module 6 */}
        <div className="col-md-6">
          <div className="syllabus-card">
            <h5><i className="bi bi-graph-up-arrow"></i> Web Analytics & Optimization</h5>
            <ul>
              <li>Website performance monitoring and analytics</li>
              <li>SEO fundamentals for AI-enabled websites</li>
              <li>Understanding user behavior and improving engagement</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

export default WebSyllabus;