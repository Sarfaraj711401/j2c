import React from "react";
import "./SyllabusSection.css";

const Autocad_SyllabusSection = () => {
  return (
    <section className="container syllabus-section my-5">

      <h2 className="syllabus-title text-center mb-5">
        AutoCAD Course – Syllabus
      </h2>

      <div className="row g-4">

        {/* Module 1 */}
        <div className="col-md-6">
          <div className="syllabus-card">
            <h5>
              <i className="bi bi-grid-1x2-fill text-primary"></i> Introduction to AutoCAD
            </h5>
            <ul>
              <li>AutoCAD Fundamentals</li>
              <li>Understanding AutoCAD Interface</li>
              <li>Drawing & Modify Tools</li>
              <li>Layers, Blocks & Annotations</li>
              <li>Career Scope & Opportunities</li>
            </ul>
          </div>
        </div>

        {/* Module 2 */}
        <div className="col-md-6">
          <div className="syllabus-card">
            <h5>
              <i className="bi bi-vector-pen text-primary"></i> 2D Drafting & Detailing
            </h5>
            <ul>
              <li>Line, Polyline, Circle & Arc Tools</li>
              <li>Object Snap, Grid & Ortho Mode</li>
              <li>Dimensioning & Text Styles</li>
              <li>Hatching, Layouts & Plotting</li>
            </ul>
          </div>
        </div>

        {/* Module 3 */}
        <div className="col-md-6">
          <div className="syllabus-card">
            <h5>
              <i className="bi bi-box text-primary"></i> 3D Modeling
            </h5>
            <ul>
              <li>3D Workspace & Navigation</li>
              <li>Solid, Surface & Mesh Modeling</li>
              <li>Extrude, Revolve, Sweep & Loft</li>
              <li>Materials, Lighting & Rendering</li>
            </ul>
          </div>
        </div>

        {/* Module 4 */}
        <div className="col-md-6">
          <div className="syllabus-card">
            <h5>
              <i className="bi bi-building text-primary"></i> Industry-Specific Applications
            </h5>
            <ul>
              <li>AutoCAD for Civil & Architecture</li>
              <li>AutoCAD for Electrical Drawings</li>
              <li>AutoCAD for Interior Design</li>
              <li>Real-Time Project Drafting</li>
            </ul>
          </div>
        </div>

        {/* Module 5 */}
        <div className="col-md-6">
          <div className="syllabus-card">
            <h5>
              <i className="bi bi-sliders text-primary"></i> Productivity & Customization
            </h5>
            <ul>
              <li>Blocks & Dynamic Blocks</li>
              <li>Templates & Tool Palettes</li>
              <li>Parametric Design</li>
              <li>Drawing Standards & File Management</li>
            </ul>
          </div>
        </div>

        {/* Module 6 */}
        <div className="col-md-6">
          <div className="syllabus-card">
            <h5>
              <i className="bi bi-cpu-fill text-primary"></i> AI Tools in AutoCAD
            </h5>
            <ul>
              <li>AI Assisted Drafting</li>
              <li>Smart Object Detection</li>
              <li>Error Detection & Auto Correction</li>
              <li>Automation of Repetitive Tasks</li>
              <li>AI-Based Design Optimization</li>
            </ul>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Autocad_SyllabusSection;