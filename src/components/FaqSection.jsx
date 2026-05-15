import React, { useState } from "react";

const faqData = [
    {
        question: "1. How can I apply for an opportunity?",
        answer: "You can browse open roles on our platform and click on the “Apply Now” button. Fill in your details and upload your resume to get started.",
    },
    {
        question: "2. Is there any registration fee?",
        answer: "No, registration and applying for job opportunities is completely free for all candidates.",
    },
    {
        question: "3. What kind of job roles are available?",
        answer: "We offer opportunities in various IT domains such as Java, Python, Web Development, Data Analytics, Cloud, and Testing.",
    },
    {
        question: "4. Do you provide training or internship programs?",
        answer: "Yes, we offer both short-term internships and practical training programs to help candidates build real-world project experience.",
    },
    {
        question: "5. Can I apply as a fresher?",
        answer: "Absolutely! Freshers are encouraged to apply. Our platform supports both entry-level and experienced professionals.",
    },
];

const FaqSection = () => {
    // State to track which FAQ is currently open
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        // If clicking the already open FAQ, close it. Otherwise, open the new one.
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <style>{`
        .faq-section {
          background: #f8fbff;
          padding: 80px 20px;
          text-align: center;
        }

        .faq-section h2 {
          font-size: 34px;
          font-weight: 700;
          color: #003580;
          margin-bottom: 10px;
        }

        .faq-section .subtitle {
          font-size: 17px;
          color: #555;
          margin-bottom: 50px;
        }

        .faq-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-item {
          margin-bottom: 15px;
          text-align: left;
          border: 1px solid #dbe7ff;
          border-radius: 10px;
          background: #fff;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
          transition: all 0.3s ease;
        }

        .faq-item.active {
          box-shadow: 0 8px 20px rgba(0, 119, 255, 0.1);
          border-color: #00A5EC;
        }

        .faq-question {
          width: 100%;
          padding: 20px 25px;
          font-size: 17px;
          font-weight: 600;
          background: transparent;
          border: none;
          outline: none;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #003580;
          transition: background 0.3s;
        }

        .faq-question:hover {
          background: #f0f7ff;
        }

        .faq-answer {
          display: none;
          padding: 0 25px 20px 25px;
          font-size: 16px;
          color: #555;
          line-height: 1.6;
          border-top: 1px solid transparent;
        }

        .faq-item.active .faq-answer {
          display: block;
          border-top: 1px solid #eef4fc;
          padding-top: 15px;
        }

        .faq-contact {
          margin-top: 50px;
        }

        .faq-contact p {
          font-size: 17px;
          color: #333;
          margin-bottom: 15px;
          font-weight: 500;
        }

        .contact-btn {
          display: inline-block;
          padding: 12px 30px;
          font-size: 16px;
          font-weight: 600;
          background-color: #0077ff;
          color: white;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.3s;
          border: none;
        }

        .contact-btn:hover {
          background-color: #005fcc;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 119, 255, 0.3);
          color: white;
        }

        @media (max-width: 768px) {
          .faq-section { padding: 60px 15px; }
          .faq-question { font-size: 16px; padding: 15px 20px; }
          .faq-answer { font-size: 15px; padding: 0 20px 15px 20px; }
        }
      `}</style>

            <section className="faq-section" id="faq">
                <div className="container">
                    <h2>Frequently Asked Questions</h2>
                    <p className="subtitle">
                        Find quick answers to common questions about our hiring and training programs.
                    </p>

                    <div className="faq-container">
                        {faqData.map((faq, index) => (
                            <div
                                className={`faq-item ${activeIndex === index ? "active" : ""}`}
                                key={index}
                            >
                                <button
                                    className="faq-question"
                                    onClick={() => toggleFaq(index)}
                                >
                                    {faq.question}
                                    <i className={`fas fa-chevron-${activeIndex === index ? "up" : "down"} text-muted`}></i>
                                </button>
                                <div className="faq-answer">
                                    <p className="m-0">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="faq-contact">
                        <p>Still have questions?</p>
                        <a href="#contact" className="contact-btn">Contact Us</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FaqSection;