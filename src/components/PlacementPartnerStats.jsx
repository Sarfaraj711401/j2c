import React from "react";
import "./PlacementPartnerStats.css";

const PlacementPartnerStats = () => {
  return (
    <section className="placement_partner">
      <div className="placement_partner-card">
        <h2>500+</h2>
        <p>Partner Companies</p>
      </div>

      <div className="placement_partner-card">
        <h2>12,000</h2>
        <p>Students Placed</p>
      </div>

      <div className="placement_partner-card">
        <h2>98%</h2>
        <p>Placement Rate</p>
      </div>

      <div className="placement_partner-card">
        <h2>$145K</h2>
        <p>Avg. Package</p>
      </div>
    </section>
  );
};

export default PlacementPartnerStats;