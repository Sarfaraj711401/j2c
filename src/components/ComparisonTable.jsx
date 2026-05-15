import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./ComparisonTable.css";

const data = [
  "Government certified by NSDC",
  "Free placement assistance",
  "3x visibility in recruiter searches",
  "Direct interview invites",
  "Industry-ready curriculum & projects",
  "Real-time doubt resolution",
  "Multi language support",
];

const ComparisonTable = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">

        <h2 className="text-center fw-bold mb-4">
          Why learn with <span className="text-primary">JourneyToCareer Trainings?</span>
        </h2>

        <div className="table-responsive">
          <table className="table comparison-table align-middle text-center">
            <thead>
              <tr>
                <th className="text-start ps-4">Benefits</th>
                <th className="highlight-col">JourneyToCareer Trainings</th>
                <th>Others</th>
                <th>Youtube</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="text-start ps-4">{item}</td>

                  <td className="highlight-col">
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />
                  </td>

                  <td>
                    <FontAwesomeIcon icon={faXmark} className="cross-icon" />
                  </td>

                  <td>
                    <FontAwesomeIcon icon={faXmark} className="cross-icon" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

export default ComparisonTable;