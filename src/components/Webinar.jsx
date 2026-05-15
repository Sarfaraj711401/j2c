import React, { useEffect, useState } from "react";
import "./Webinar.css";

const Webinar = () => {

  // SET YOUR TARGET DATE HERE
  const targetDate = new Date("2026-01-01T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00"
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) return;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0")
      });

    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="webinar-page">

      {/* HERO */}
      <section className="webinar-hero">
        <h1>Career Guidance Webinar</h1>

        <p>
          Learn how to build a high-paying career in{" "}
          <strong>UI/UX Design, Data Science, and Full Stack Development</strong>{" "}
          with expert guidance and real industry insights.
        </p>

        {/* COUNTDOWN */}
        <div className="webinar-countdown">
          <div className="webinar-time-box">
            <span>{timeLeft.days}</span>
            <small>Days</small>
          </div>
          <div className="webinar-time-box">
            <span>{timeLeft.hours}</span>
            <small>Hours</small>
          </div>
          <div className="webinar-time-box">
            <span>{timeLeft.minutes}</span>
            <small>Minutes</small>
          </div>
          <div className="webinar-time-box">
            <span>{timeLeft.seconds}</span>
            <small>Seconds</small>
          </div>
        </div>

        <div className="webinar-cta">
          <button>Register for Free Webinar</button>
        </div>
      </section>

      {/* SPEAKERS */}
      <div className="webinar-speakers">
        <h3>Meet Our Industry Experts</h3>

        <div className="webinar-speaker-list">
          <div className="webinar-speaker">
            <div className="webinar-avatar">UX</div>
            UI/UX Lead (8+ yrs)
          </div>

          <div className="webinar-speaker">
            <div className="webinar-avatar">DS</div>
            Senior Data Scientist
          </div>

          <div className="webinar-speaker">
            <div className="webinar-avatar">FS</div>
            Full Stack Architect
          </div>
        </div>
      </div>

      {/* LEARN */}
      <section className="webinar-section">
        <h2>What You Will Learn</h2>

        <div className="webinar-learn">
          <div className="webinar-learn-card">
            <span>🎯</span>
            <h4>Career Clarity</h4>
            <p>Which career is right for you – UI/UX, Data Science, or Full Stack?</p>
          </div>

          <div className="webinar-learn-card">
            <span>💰</span>
            <h4>Salary & Growth</h4>
            <p>Expected salaries, career growth, and future scope in 2026.</p>
          </div>

          <div className="webinar-learn-card">
            <span>🛠️</span>
            <h4>Skill Roadmap</h4>
            <p>Exact skills, tools, and technologies companies are hiring for.</p>
          </div>

          <div className="webinar-learn-card">
            <span>💼</span>
            <h4>Placement Strategy</h4>
            <p>How to crack internships, jobs, and placement interviews.</p>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="webinar-section">
        <h2>Career Paths Covered</h2>

        <div className="webinar-programs">

          <div className="webinar-program">
            <h3>UI/UX Design</h3>
            <ul>
              <li>Figma & Prototyping</li>
              <li>User Research</li>
              <li>Portfolio Creation</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          <div className="webinar-program">
            <h3>Data Science</h3>
            <ul>
              <li>Python & SQL</li>
              <li>Machine Learning</li>
              <li>Data Projects</li>
              <li>Data Analyst</li>
            </ul>
          </div>

          <div className="webinar-program">
            <h3>Full Stack</h3>
            <ul>
              <li>HTML, CSS, JS</li>
              <li>React & Node</li>
              <li>Backend APIs & Databases</li>
              <li>Full Stack Developer</li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Webinar;