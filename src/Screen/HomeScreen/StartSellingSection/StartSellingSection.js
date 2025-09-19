import React from "react";
import "./StartSellingSection.css";
import planeImg from "../StartSellingSection/plane.png";

const StartSellingSection = () => {
  return (
    <div className="start-selling-section">
      <div className="selling-content">
        <h1>Start selling today</h1>
        <p>Put your products in front of crores of customers<br />across India</p>
        <button className="selling-btn">Start Selling</button>
      </div>
      <div className="selling-image">
        <img src={planeImg} alt="Amazon plane and delivery" />
      </div>
    </div>
  );
};

export default StartSellingSection;