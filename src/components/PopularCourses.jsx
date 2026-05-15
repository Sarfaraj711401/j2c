import React from "react";

const courses = [
    {
        title: "Java Full Stack",
        desc: "Master frontend & backend with hands-on projects.",
        icon: "https://cdn-icons-png.flaticon.com/512/2721/2721299.png",
    },
    {
        title: "Python for Beginners",
        desc: "Learn Python fundamentals with real-world examples.",
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    },
    {
        title: "Web Development",
        desc: "Build responsive, interactive websites from scratch.",
        icon: "https://cdn-icons-png.flaticon.com/512/2721/2721294.png",
    }
];

const PopularCourses = () => {
    return (
        <>
            {/* INJECTED COMPONENT CSS - Keeps styling 100% modular without external files */}
            <style>{`
        .popular-courses-section {
          background-color: #f9fbff;
          padding: 80px 20px;
        }

        .popular-courses-section h2 {
          text-align: center;
          font-size: 2.4rem;
          color: #003366;
          margin-bottom: 50px;
          font-weight: 700;
        }

        .course-card {
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.06);
          padding: 35px 25px;
          text-align: center;
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1px solid rgba(0, 165, 236, 0.05);
        }

        .course-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 25px rgba(0, 165, 236, 0.15);
        }

        .course-card img {
          width: 65px;
          margin-bottom: 20px;
          transition: transform 0.3s ease;
        }

        .course-card:hover img {
          transform: scale(1.1);
        }

        .course-card h3 {
          color: #00A5EC;
          font-size: 1.35rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .course-card p {
          color: #555;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 25px;
          flex-grow: 1; /* Pushes the button to the bottom evenly */
        }

        .course-btn {
          background: #00A5EC;
          color: #ffffff;
          border: none;
          border-radius: 8px;
          padding: 12px 25px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }

        .course-btn:hover {
          background: #0088c9;
          box-shadow: 0 4px 12px rgba(0, 136, 201, 0.3);
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .popular-courses-section {
            padding: 60px 15px;
          }
          .popular-courses-section h2 {
            font-size: 2rem;
            margin-bottom: 35px;
          }
        }
      `}</style>

            <section className="popular-courses-section">
                <div className="container">
                    <h2>Popular Courses</h2>

                    <div className="row justify-content-center g-4">
                        {courses.map((course, index) => (
                            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                                <div className="course-card">
                                    <img src={course.icon} alt={course.title} />
                                    <h3>{course.title}</h3>
                                    <p>{course.desc}</p>
                                    <button className="course-btn">Learn More</button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
};

export default PopularCourses;