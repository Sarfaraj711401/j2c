import React from "react";

const ContactUs = () => {
    // Prevent default form submission reload (React best practice)
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted! You can connect this to your backend API later.");
    };

    return (
        <>
            {/* INJECTED COMPONENT CSS - Keeps styling 100% modular without external files */}
            <style>{`
        .contact-us-section {
          background: linear-gradient(135deg, #f0f8ff, #ffffff);
          padding: 90px 20px;
        }

        .contact-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 50px;
          align-items: stretch;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* ================= LEFT SIDE ================= */
        .contact-info {
          flex: 1;
          min-width: 300px;
        }

        .contact-info h2 {
          font-size: 32px;
          font-weight: 700;
          color: #003580;
          margin-bottom: 15px;
        }

        .contact-info p.contact-desc {
          color: #555;
          font-size: 16px;
          margin-bottom: 30px;
          line-height: 1.6;
        }

        /* Info Item */
        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          margin-bottom: 25px;
          background: #ffffff;
          padding: 18px 20px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }

        .info-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }

        .info-item i {
          font-size: 22px;
          color: #00A5EC;
          background: #e6f4ff;
          padding: 12px;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .info-item h4 {
          font-size: 16px;
          font-weight: 600;
          color: #003580;
          margin-bottom: 4px;
        }

        .info-item p {
          font-size: 14px;
          color: #666;
          margin: 0;
        }

        /* ================= RIGHT SIDE FORM ================= */
        .contact-form {
          flex: 1;
          min-width: 320px;
          background: #ffffff;
          padding: 40px 35px;
          border-radius: 16px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.08);
        }

        /* Form Fields */
        .form-group {
          margin-bottom: 20px;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 14px 16px;
          border-radius: 10px;
          border: 1px solid #dce3ea;
          font-size: 14px;
          transition: all 0.3s ease;
          outline: none;
          font-family: inherit;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          border-color: #00A5EC;
          box-shadow: 0 0 0 3px rgba(0,165,236,0.15);
        }

        /* Button */
        .btn-contact {
          background: linear-gradient(135deg, #00A5EC, #0078D7);
          color: white;
          border: none;
          padding: 14px;
          width: 100%;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-contact:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0,165,236,0.3);
        }

        /* ================= RESPONSIVE ================= */
        @media (max-width: 992px) {
          .contact-wrapper {
            flex-direction: column;
            gap: 40px;
          }

          .contact-form {
            padding: 30px 25px;
          }
        }
      `}</style>

            <section className="contact-us-section" id="contact">
                <div className="container">
                    <div className="contact-wrapper">

                        {/* Left Side: Contact Info */}
                        <div className="contact-info">
                            <h2>Contact Us</h2>
                            <p className="contact-desc">
                                We’d love to hear from you! Reach out for inquiries, feedback, or partnership opportunities.
                            </p>

                            <div className="info-item">
                                <i className="fa-solid fa-location-dot"></i>
                                <div>
                                    <h4>Address</h4>
                                    <p>Kolkata, West Bengal, India</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <i className="fa-solid fa-envelope"></i>
                                <div>
                                    <h4>Email</h4>
                                    <p>support@journeytocareer.com</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <i className="fa-solid fa-phone"></i>
                                <div>
                                    <h4>Phone</h4>
                                    <p>+91 98765 43210</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Contact Form */}
                        <div className="contact-form">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input type="text" name="name" placeholder="Your Name" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" placeholder="Your Email" required />
                                </div>
                                <div className="form-group">
                                    <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                                </div>
                                <button type="submit" className="btn-contact">Send Message</button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUs;