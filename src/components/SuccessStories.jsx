import React, { useState, useEffect } from "react";

const testimonials = [
    {
        name: "Priya Sharma",
        role: "Software Engineer, TCS",
        quote: "This platform gave me the perfect start to my IT career. The real-world projects boosted my skills and confidence.",
        // Using a reliable placeholder image for a professional headshot
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        name: "Rohit Verma",
        role: "Java Developer, Infosys",
        quote: "The smooth application process and mentorship helped me find a great opportunity quickly.",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "Ananya Das",
        role: "Full Stack Developer, Cognizant",
        quote: "Thanks to this platform, I transitioned from a fresher to a full-time developer in just a few months.",
        image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
        name: "Rajat Singh",
        role: "Data Analyst, Wipro",
        quote: "I got an internship opportunity that perfectly matched my goals — and it turned into a full-time offer!",
        image: "https://randomuser.me/api/portraits/men/22.jpg"
    }
];

const SuccessStories = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    // Auto-slide logic
    useEffect(() => {
        if (isHovered) return; // Pause auto-slide if user is hovering

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 4500); // 4.5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [isHovered]);

    // Navigation Handlers
    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    // Mobile Swipe Handlers
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 75) {
            nextSlide(); // Swiped left
        }
        if (touchStart - touchEnd < -75) {
            prevSlide(); // Swiped right
        }
    };

    return (
        <>
            {/* INJECTED COMPONENT CSS - Keeps styling 100% modular without external files */}
            <style>{`
        .success-stories-section {
          background: #ffffff;
          padding: 80px 20px;
          text-align: center;
          position: relative;
        }

        .success-stories-section h2 {
          font-size: 34px;
          font-weight: 700;
          color: #003580;
          margin-bottom: 10px;
        }

        .success-stories-section .subtitle {
          font-size: 17px;
          color: #555;
          margin-bottom: 40px;
        }

        /* Carousel Container */
        .carousel-container {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding: 0 50px; /* Space for buttons */
        }

        /* Viewport */
        .carousel-viewport {
          overflow: hidden;
          border-radius: 16px;
          padding: 10px; /* Space for shadows */
        }

        /* The Moving Track */
        .carousel-track {
          display: flex;
          transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
          will-change: transform;
        }

        /* Individual Card */
        .story-card {
          flex: 0 0 100%; /* Take up exactly 100% of the viewport width */
          background: #f8fbff;
          border-radius: 15px;
          padding: 40px 30px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.06);
          box-sizing: border-box;
          border: 1px solid #eef4fc;
        }

        /* Visuals inside card */
        .profile-img { 
          width: 90px; 
          height: 90px; 
          border-radius: 50%; 
          overflow: hidden; 
          margin: 0 auto 20px; 
          border: 4px solid #0077ff; 
          box-shadow: 0 4px 10px rgba(0, 119, 255, 0.2);
        }
        .profile-img img { 
          width: 100%; 
          height: 100%; 
          object-fit: cover; 
        }
        .quote { 
          font-style: italic; 
          color: #444; 
          font-size: 18px; 
          line-height: 1.6; 
          margin-bottom: 20px; 
        }
        .story-card h4 { 
          color: #003580; 
          font-weight: 700; 
          margin-bottom: 5px; 
          font-size: 1.2rem;
        }
        .story-card span { 
          color: #666; 
          font-size: 14px; 
          font-weight: 500;
        }

        /* Navigation Buttons */
        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: #0077ff;
          color: white;
          border: none;
          border-radius: 50%;
          font-size: 20px;
          width: 46px;
          height: 46px;
          cursor: pointer;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0, 119, 255, 0.3);
          transition: all 0.3s ease;
        }
        .carousel-btn:hover { 
          background: #005fcc; 
          transform: translateY(-50%) scale(1.1);
        }

        .carousel-btn.prev { left: 0; }
        .carousel-btn.next { right: 0; }

        /* Indicators (Dots) */
        .carousel-indicators {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 25px;
        }
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #d0e4ff;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .dot.active {
          background: #0077ff;
          transform: scale(1.3);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .success-stories-section { padding: 60px 15px; }
          .carousel-container { padding: 0 10px; } /* Less padding so cards fit screen */
          .carousel-btn { width: 36px; height: 36px; font-size: 16px; }
          .quote { font-size: 16px; }
          
          /* Move buttons slightly inside or hide them if preferring swipe */
          .carousel-btn.prev { left: -5px; }
          .carousel-btn.next { right: -5px; }
        }
      `}</style>

            <section className="success-stories-section">
                <div className="container text-center">
                    <h2>Success Stories</h2>
                    <p className="subtitle">
                        Hear from professionals who began their successful career journey with us.
                    </p>

                    <div
                        className="carousel-container"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* Prev Button */}
                        <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous slide">
                            <i className="fas fa-chevron-left"></i>
                        </button>

                        {/* Viewport & Track */}
                        <div
                            className="carousel-viewport"
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            <div
                                className="carousel-track"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {testimonials.map((item, index) => (
                                    <div className="story-card" key={index}>
                                        <div className="profile-img">
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                        <p className="quote">"{item.quote}"</p>
                                        <h4>{item.name}</h4>
                                        <span>{item.role}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Next Button */}
                        <button className="carousel-btn next" onClick={nextSlide} aria-label="Next slide">
                            <i className="fas fa-chevron-right"></i>
                        </button>

                        {/* Dots Indicator */}
                        <div className="carousel-indicators">
                            {testimonials.map((_, index) => (
                                <div
                                    key={index}
                                    className={`dot ${currentIndex === index ? 'active' : ''}`}
                                    onClick={() => setCurrentIndex(index)}
                                ></div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default SuccessStories;