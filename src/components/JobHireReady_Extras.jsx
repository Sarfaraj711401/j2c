import React, { useState, useEffect } from "react";

const JobHireReady_Extras = () => {

  /* ✅ MULTIPLE FAQ STATE */
  const [openItems, setOpenItems] = useState({});

  const toggleFAQ = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  /* ✅ SCROLL ANIMATION */
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("animate");
          }, index * 100);
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll(".fade-in-up").forEach(el => observer.observe(el));
  }, []);

  const faqData = [
    {
      q: "Is JourneyToCareer free?",
      a: "Yes, students can register and apply for jobs completely free."
    },
    {
      q: "Are jobs verified?",
      a: "Yes, all companies and job listings are verified by our team."
    },
    {
      q: "Can freshers apply?",
      a: "Absolutely! We specialize in fresher and internship opportunities."
    }
  ];

  return (
    <div className="jobhire-extra-wrapper">

      {/* ✅ SCOPED CSS */}
      <style>{`

        .jobhire-extra-wrapper {
          width: 100%;
        }

        .section-padding {
          padding: 90px 0;
        }

        .section-title {
          text-align: center;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          margin-bottom: 40px;
          background: linear-gradient(135deg, #00d4ff, #6a11cb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* ================= SALARY ================= */
        .salary-card {
          background: white;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          transition: 0.3s;
        }

        .salary-card h5 {
          font-weight: 700;
          margin-bottom: 10px;
        }

        .salary-card p {
          color: #00d4ff;
          font-weight: 600;
        }

        .salary-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0,212,255,0.25);
        }

        /* ================= FAQ ================= */
        .faq-section {
          background: #f8fbff;
        }

        .faq-item {
          background: white;
          border-radius: 16px;
          margin-bottom: 15px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.06);
          overflow: hidden;
          transition: 0.3s;
        }

        .faq-question {
          padding: 18px 20px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: all 0.4s ease;
          padding: 0 20px;
          color: #64748b;
        }

        .faq-item.active .faq-answer {
          max-height: 200px;
          padding: 0 20px 20px;
        }

        .faq-item.active .faq-question {
          color: #00d4ff;
        }

        /* ================= ANIMATION ================= */
        .fade-in-up {
          opacity: 0;
          transform: translateY(40px);
          transition: 0.6s ease;
        }

        .fade-in-up.animate {
          opacity: 1;
          transform: translateY(0);
        }

        /* ================= RESPONSIVE ================= */
        @media(max-width:768px){
          .section-padding {
            padding: 60px 15px;
          }
        }

      `}</style>

      {/* ================= SALARY ================= */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">Average Salary Insights</h2>

          <div className="row g-4 text-center">

            <div className="col-md-3 col-6 fade-in-up">
              <div className="salary-card">
                <h5>Software Engineer</h5>
                <p>₹4 - ₹12 LPA</p>
              </div>
            </div>

            <div className="col-md-3 col-6 fade-in-up">
              <div className="salary-card">
                <h5>Data Analyst</h5>
                <p>₹3 - ₹8 LPA</p>
              </div>
            </div>

            <div className="col-md-3 col-6 fade-in-up">
              <div className="salary-card">
                <h5>Digital Marketer</h5>
                <p>₹2 - ₹6 LPA</p>
              </div>
            </div>

            <div className="col-md-3 col-6 fade-in-up">
              <div className="salary-card">
                <h5>UI/UX Designer</h5>
                <p>₹3 - ₹7 LPA</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="section-padding faq-section">
        <div className="container">

          <h2 className="section-title">Frequently Asked Questions</h2>

          <div className="mt-4">

            {faqData.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${openItems[index] ? "active" : ""}`}
              >

                <div
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  {item.q}
                  <span>{openItems[index] ? "−" : "+"}</span>
                </div>

                <div className="faq-answer">
                  {item.a}
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
};

export default JobHireReady_Extras;