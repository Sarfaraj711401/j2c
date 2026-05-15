import React from "react";
import "./CampusWho.css";

const CampusWho = () => {
  return (
    <section className="campus-who">
      <div className="campus-who__container">
        
        <h2 className="campus-who__title">
          Who Are We Looking For?
        </h2>

        <div className="campus-who__grid">
          
          {/* CARD 1 */}
          <div className="campus-who__card">
            <div className="campus-who__icon">
              ✓
            </div>
            <h3>College Students</h3>
            <p>Any year, any stream (Arts, Sci, Comm, Engg).</p>
          </div>

          {/* CARD 2 */}
          <div className="campus-who__card">
            <div className="campus-who__icon">
              ✓
            </div>
            <h3>Social Media Savvy</h3>
            <p>Active on Instagram, LinkedIn, or WhatsApp.</p>
          </div>

          {/* CARD 3 */}
          <div className="campus-who__card">
            <div className="campus-who__icon">
              ✓
            </div>
            <h3>Leadership Skills</h3>
            <p>Ideally a member of college clubs or societies.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CampusWho;