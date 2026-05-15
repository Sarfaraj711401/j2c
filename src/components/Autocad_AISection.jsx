import React from "react";;

const Autocad_AISection = () => {
  return (
    <div className="ai-section-wrapper">
      <div className="ai-card">

        {/* LEFT TEXT COLUMN */}
        <div className="ai-text-block">
          <h2 className="ai-title">
            How will the AI tools taught in the course help you get ahead in your career?
          </h2>

          <p className="ai-description">
            The AI tools in this course will boost my technical skills and productivity by automating repetitive tasks and quickly 
            identifying design errors. They enable faster, more accurate drawings, allowing me to focus on creative work. 
            These features help me complete projects efficiently, making me more valuable to employers.
          </p>

          <ul className="ai-tools-list">
            <li>
              <div className="ai-tool-icon">
                <i className="fas fa-robot"></i>
              </div>
              <div>
                <div className="ai-tool-name">Resume Skills</div>
              </div>
            </li>

            <li>
              <div className="ai-tool-icon">
                <i className="fas fa-magic"></i>
              </div>
              <div>
                <div className="ai-tool-name">AI Skills</div>
              </div>
            </li>
          </ul>
        </div>

        {/* RIGHT VISUAL COLUMN */}
        <div className="ai-visual-block">
          <div className="main-character"></div>

          <div className="laptop">
            <div className="laptop-screen-glow"></div>
          </div>

          <div className="ai-chat-bubble">
            <div className="ai-face"></div>
          </div>

          <div className="skill-badges">
            <div className="skill-badge">Resume Skills</div>
            <div className="skill-badge">AI Skills</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Autocad_AISection;