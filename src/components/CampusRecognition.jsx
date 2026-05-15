import React from "react";
import "./CampusRecognition.css";

const CampusRecognition = () => {
  return (
    <section className="campus-recognition">
      <div className="campus-recognition__container">

        <h2 className="campus-recognition__title">
          Join the Best. Be Recognized.
        </h2>

        <div className="campus-recognition__grid">

          {/* LEFT - LEADERBOARD */}
          <div className="campus-recognition__card">

            <h3 className="campus-recognition__card-title">
              🏆 Top Performers (Jan 2026)
            </h3>

            <div className="campus-recognition__list">

              {/* 1 */}
              <div className="campus-recognition__item gold">
                <div className="campus-recognition__user">
                  <span className="rank">1</span>
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d" alt="Rahul" />
                  <span>Rahul S. (IIT Delhi)</span>
                </div>
                <span className="points">3000 Pts</span>
              </div>

              {/* 2 */}
              <div className="campus-recognition__item silver">
                <div className="campus-recognition__user">
                  <span className="rank">2</span>
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" alt="Priya" />
                  <span>Priya M. (VIT)</span>
                </div>
                <span className="points">2800 Pts</span>
              </div>

              {/* 3 */}
              <div className="campus-recognition__item bronze">
                <div className="campus-recognition__user">
                  <span className="rank">3</span>
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e" alt="Aman" />
                  <span>Aman K. (DU)</span>
                </div>
                <span className="points">2500 Pts</span>
              </div>

            </div>
          </div>

          {/* RIGHT - TESTIMONIAL */}
          <div className="campus-recognition__testimonial">

            <p className="campus-recognition__quote">
              "Being a J2C Campus Ambassador was the turning point of my college life.
              I improved my public speaking skills and even got an internship offer!"
            </p>

            <div className="campus-recognition__author">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb" alt="Sneha" />
              <div>
                <p className="name">Sneha Roy</p>
                <p className="role">J2C Alumni, Batch of '24</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CampusRecognition;