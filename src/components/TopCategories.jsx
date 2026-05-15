import React from "react";

const categories = [
    {
        icon: "fa-solid fa-code",
        title: "Software Development",
        desc: "Internships & Jobs in Java, Python, Web, and App Development",
    },
    {
        icon: "fa-solid fa-chart-line",
        title: "Data & Analytics",
        desc: "Build your career in Data Science, AI, ML, and Business Analytics",
    },
    {
        icon: "fa-solid fa-briefcase",
        title: "Human Resources",
        desc: "Grow in HR operations, recruitment, and employee engagement",
    },
    {
        icon: "fa-solid fa-bullhorn",
        title: "Marketing",
        desc: "Learn and work in Digital, Social Media, or Brand Marketing",
    },
    {
        icon: "fa-solid fa-pen-nib",
        title: "Design",
        desc: "Opportunities in UI/UX, Graphic Design, and Product Design",
    },
    {
        icon: "fa-solid fa-network-wired",
        title: "Networking & IT Support",
        desc: "Roles in system administration, cloud, and cybersecurity",
    },
    {
        icon: "fa-solid fa-business-time",
        title: "Business Development",
        desc: "Sales, lead generation, and corporate partnerships",
    },
    {
        icon: "fa-solid fa-laptop-file",
        title: "Content Writing",
        desc: "Creative writing, blogs, SEO articles, and storytelling roles",
    },
];

const TopCategories = () => {
    return (
        <>
            {/* INJECTED COMPONENT CSS - Keeps styling 100% modular without external files */}
            <style>{`
        .top-categories-section {
          background: #f8fbff;
          padding: 80px 20px;
        }

        .top-categories-section h2 {
          font-size: 34px;
          font-weight: 700;
          color: #003580;
          margin-bottom: 10px;
        }

        .top-categories-section .subtitle {
          font-size: 17px;
          color: #555;
        }

        .category-card {
          background: #ffffff;
          border-radius: 12px;
          padding: 40px 25px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
        }

        .category-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }

        .category-card i {
          font-size: 38px;
          color: #0077ff;
          margin-bottom: 20px;
        }

        .category-card h5 {
          font-size: 18px;
          font-weight: 600;
          color: #003580;
          margin-bottom: 10px;
        }

        .category-card p {
          color: #666;
          font-size: 15px;
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .top-categories-section {
            padding: 60px 15px;
          }
        }
      `}</style>

            <section className="top-categories-section">
                <div className="container text-center">
                    <h2>Top Categories</h2>
                    <p className="subtitle">
                        Explore the most in-demand career paths and opportunities
                    </p>

                    <div className="row justify-content-center mt-5 g-4">
                        {categories.map((category, index) => (
                            <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                                <div className="category-card">
                                    <i className={category.icon}></i>
                                    <h5>{category.title}</h5>
                                    <p>{category.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default TopCategories;