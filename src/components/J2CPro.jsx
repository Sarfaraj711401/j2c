import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./J2CPro.css";

const J2CPro = () => {
  // Typing Effect
  useEffect(() => {
    const text = ["Be Seen...", "Be Selected...", "Get Hired Faster..."];
    let i = 0, j = 0, isDeleting = false;

    const type = () => {
      const el = document.getElementById("j2cpro-typing");
      if (!el) return;

      const current = text[i];
      el.innerHTML = current.substring(0, j);

      if (!isDeleting && j < current.length) j++;
      else if (isDeleting && j > 0) j--;

      if (j === current.length) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
      }

      if (j === 0 && isDeleting) {
        isDeleting = false;
        i = (i + 1) % text.length;
      }

      setTimeout(type, isDeleting ? 50 : 100);
    };

    type();
  }, []);

  // Reveal + Bar Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("j2cpro-active");
          }
        });
      },
      { threshold: 0.1 } // Triggers when 10% of the element is visible
    );

    document.querySelectorAll(".j2cpro-reveal").forEach((el) => observer.observe(el));

    const handleScroll = () => {
      document.querySelectorAll(".j2cpro-bar-fill").forEach((bar) => {
        const pos = bar.getBoundingClientRect().top;
        if (pos < window.innerHeight - 50) {
          bar.style.width = bar.dataset.width;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on load in case elements are already in view
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="j2cpro-container">
      {/* HERO */}
      <section className="j2cpro-hero">
        <div className="j2cpro-glow"></div>
        <div className="j2cpro-float j2cpro-f1">🔥 Hidden Jobs</div>
        <div className="j2cpro-float j2cpro-f2">🤖 AI Interview Prep</div>
        <div className="j2cpro-float j2cpro-f3">📈 Profile Boost</div>

        <h1 className="j2cpro-gradient j2cpro-reveal">J2C Pro 👑</h1>
        <h3 id="j2cpro-typing" className="j2cpro-reveal" style={{ transitionDelay: "0.2s" }}></h3>

        <p className="mt-3 j2cpro-reveal" style={{ transitionDelay: "0.3s" }}>
          Experience the next generation of career growth with AI-powered tools,
          priority job access, and unmatched recruiter visibility that helps you
          stand out in today’s competitive hiring world.
        </p>

        <button className="j2cpro-btn mt-4 j2cpro-reveal" style={{ transitionDelay: "0.4s" }}>
          Upgrade Now <i className="ms-2 fas fa-arrow-right"></i>
        </button>
      </section>

      {/* FEATURES */}
      <section className="py-5 j2cpro-features">
        <div className="container text-center">
          <h2 className="mb-5 j2cpro-reveal j2cpro-section-title">
            Why Choose J2C Pro?
          </h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="j2cpro-card j2cpro-reveal" style={{ transitionDelay: "0.1s" }}>
                <div className="j2cpro-icon-box">🚀</div>
                <h5>Faster Hiring Process</h5>
                <p>Apply to multiple jobs instantly and get shortlisted faster with priority visibility.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="j2cpro-card j2cpro-reveal" style={{ transitionDelay: "0.3s" }}>
                <div className="j2cpro-icon-box">👀</div>
                <h5>3X Recruiter Visibility</h5>
                <p>Your profile gets highlighted and appears on top in recruiter searches.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="j2cpro-card j2cpro-reveal" style={{ transitionDelay: "0.5s" }}>
                <div className="j2cpro-icon-box">🤖</div>
                <h5>AI Smart Assistance</h5>
                <p>Improve resumes, prepare interviews, and get suggestions powered by AI.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 j2cpro-reveal j2cpro-section-title">
            J2C vs J2C Pro
          </h2>
          <div className="row g-4 align-items-center">
            
            <div className="col-md-6">
              <div className="j2cpro-card j2cpro-reveal" style={{ transitionDelay: "0.2s" }}>
                <h4 className="text-muted">J2C (Free)</h4>
                
                <p className="mt-4 mb-1 fw-bold text-secondary">Limited Reach</p>
                <div className="j2cpro-bar-track">
                  <div className="j2cpro-bar-fill basic-bar" data-width="40%"></div>
                </div>

                <p className="mt-4 mb-1 fw-bold text-secondary">Basic Job Alerts</p>
                <div className="j2cpro-bar-track">
                  <div className="j2cpro-bar-fill basic-bar" data-width="50%"></div>
                </div>

                <p className="mt-4 mb-1 fw-bold text-secondary">Recruiter Attention</p>
                <div className="j2cpro-bar-track">
                  <div className="j2cpro-bar-fill basic-bar" data-width="30%"></div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="j2cpro-card j2cpro-pro-card j2cpro-reveal" style={{ transitionDelay: "0.4s" }}>
                <div className="pro-badge">Most Popular</div>
                <h4 className="j2cpro-gradient-text">J2C Pro 👑</h4>

                <p className="mt-4 mb-1 fw-bold text-dark">High Visibility</p>
                <div className="j2cpro-bar-track">
                  <div className="j2cpro-bar-fill pro-bar" data-width="95%"></div>
                </div>

                <p className="mt-4 mb-1 fw-bold text-dark">Priority Applications</p>
                <div className="j2cpro-bar-track">
                  <div className="j2cpro-bar-fill pro-bar" data-width="90%"></div>
                </div>

                <p className="mt-4 mb-1 fw-bold text-dark">Direct Interaction</p>
                <div className="j2cpro-bar-track">
                  <div className="j2cpro-bar-fill pro-bar" data-width="92%"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="mb-5 j2cpro-reveal j2cpro-section-title">
            Choose Your Plan
          </h2>
          <div className="row g-4 justify-content-center">
            
            <div className="col-md-4">
              <div className="j2cpro-card j2cpro-reveal" style={{ transitionDelay: "0.1s" }}>
                <h4 className="text-muted">Basic</h4>
                <h2 className="my-3">₹499<span className="fs-6 text-muted">/mo</span></h2>
                <button className="j2cpro-btn-outline w-100">Buy Now</button>
              </div>
            </div>

            <div className="col-md-4">
              <div className="j2cpro-card j2cpro-pro-card j2cpro-reveal" style={{ transitionDelay: "0.3s", transform: "scale(1.05)" }}>
                <div className="pro-badge glow-badge">Best Value</div>
                <h4 className="j2cpro-gradient-text">Pro</h4>
                <h2 className="my-3">₹999<span className="fs-6 text-muted">/mo</span></h2>
                <button className="j2cpro-btn w-100">Buy Now</button>
              </div>
            </div>

            <div className="col-md-4">
              <div className="j2cpro-card j2cpro-reveal" style={{ transitionDelay: "0.5s" }}>
                <h4 className="text-muted">Premium</h4>
                <h2 className="my-3">₹1499<span className="fs-6 text-muted">/mo</span></h2>
                <button className="j2cpro-btn-outline w-100">Buy Now</button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-5 j2cpro-footer">
        <div className="container">
          <h2 className="j2cpro-reveal">Your Dream Job Is Waiting 🚀</h2>
          <p className="text-muted j2cpro-reveal mb-4" style={{ transitionDelay: "0.2s" }}>
            Join thousands of professionals landing their ideal roles.
          </p>
          <button className="j2cpro-btn j2cpro-btn-lg j2cpro-reveal" style={{ transitionDelay: "0.4s" }}>
            Upgrade to Pro Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default J2CPro;