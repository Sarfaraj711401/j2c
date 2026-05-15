import React from "react";
import "./Internship_Drives_Timeline.css";

const Internship_Drives_Timeline = () => {
  return (
    <section className="internship-timeline">
      <div className="container">

        <h2 className="internship-timeline-title">
          How It Works
        </h2>

        <div className="internship-timeline-container">

          {/* STEP 1 */}
          <div className="internship-timeline-item">
            <div className="row align-items-center">

              <div className="col-md-7">
                <div className="internship-timeline-step">
                  <div className="internship-timeline-number">1</div>
                  <div className="internship-timeline-text">
                    <h4>Register Online</h4>
                    <p>
                      Complete your profile with skills, courses & experience.
                      AI matches you with best corporate drives.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-5 mt-3 mt-md-0">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
                  alt="Register"
                  className="img-fluid rounded-3 shadow-sm"
                />
              </div>

            </div>
          </div>

          {/* STEP 2 */}
          <div className="internship-timeline-item">
            <div className="row align-items-center flex-md-row-reverse">

              <div className="col-md-7">
                <div className="internship-timeline-step">
                  <div className="internship-timeline-number">2</div>
                  <div className="internship-timeline-text">
                    <h4>Company Presentation</h4>
                    <p>
                      Attend live sessions where companies share roles, stipend & hiring process.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-5 mt-3 mt-md-0">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80"
                  alt="Presentation"
                  className="img-fluid rounded-3 shadow-sm"
                />
              </div>

            </div>
          </div>

          {/* STEP 3 */}
          <div className="internship-timeline-item">
            <div className="row align-items-center">

              <div className="col-md-7">
                <div className="internship-timeline-step">
                  <div className="internship-timeline-number">3</div>
                  <div className="internship-timeline-text">
                    <h4>Aptitude + Interviews</h4>
                    <p>
                      Online tests followed by technical and HR interviews.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-5 mt-3 mt-md-0">
                <img
                  src="https://live.staticflickr.com/65535/48188375092_712e210852_o_d.jpg"
                  alt="Interviews"
                  className="img-fluid rounded-3 shadow-sm"
                />
              </div>

            </div>
          </div>

          {/* STEP 4 */}
          <div className="internship-timeline-item">
            <div className="row align-items-center flex-md-row-reverse">

              <div className="col-md-7">
                <div className="internship-timeline-step">
                  <div className="internship-timeline-number">4</div>
                  <div className="internship-timeline-text">
                    <h4>Get Selected!</h4>
                    <p>
                      Receive offer letter instantly and start your career journey.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-5 mt-3 mt-md-0">
                <img
                  src="https://img.freepik.com/premium-photo/female-student-celebrating-success-with-laptop-big-smile_108611-3760.jpg"
                  alt="Success"
                  className="img-fluid rounded-3 shadow-sm"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Internship_Drives_Timeline;