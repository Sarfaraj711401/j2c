import React from "react";
import "./ForEmployer_TrustBrand.css";


// import logos (recommended)
import flipkart from "../assets/flipkart-minutes-logo.webp";
import indiaToday from "../assets/india today logo.png";
import techMahindra from "../assets/tech-mahindra-logo.avif";
import amazon from "../assets/amazon.png";
import yatra from "../assets/yatra-logo.png";
import swiggy from "../assets/swiggy-logo.png";
import myntra from "../assets/mintra-logo.png";
import netflix from "../assets/netflix-transparen.webp";


const ForEmployer_TrustBrand = () => {
  return (
    <section className="femp-trusted-section">
      <div className="femp-container">

        <h3 className="femp-trusted-title">
          Trusted by growing companies across industries
        </h3>

        <div className="femp-logo-wrapper">
          <div className="femp-logo-slider">

            {/* ORIGINAL */}
                      <img src={flipkart} alt="flipkart" />
                      <img src={indiaToday} alt="india today" />
                      <img src={techMahindra} alt="tech mahindra" />
                      <img src={amazon} alt="amazon" />
                      <img src={yatra} alt="yatra" />
                      <img src={swiggy} alt="swiggy" />
                      <img src={myntra} alt="myntra" />
                      <img src={netflix} alt="netflix" />

            {/* DUPLICATE (for infinite scroll) */}
                      <img src={flipkart} alt="flipkart" />
                      <img src={indiaToday} alt="india today" />
                      <img src={techMahindra} alt="tech mahindra" />
                      <img src={amazon} alt="amazon" />
                      <img src={yatra} alt="yatra" />
                      <img src={swiggy} alt="swiggy" />
                      <img src={myntra} alt="myntra" />
                      <img src={netflix} alt="netflix" />

          </div>
        </div>

      </div>
    </section>
  );
};

export default ForEmployer_TrustBrand;