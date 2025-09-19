import React, { useState } from "react";
import "./categoryimpact.css";

const categories = [
  {
    title: "Apparel",
    desc: "See up to 16.5% reduction in referral fee for products <= Rs.300.",
    img: "https://m.media-amazon.com/images/G/31/amazonservices/Apparel_lifestyle.jpg",
    details:
      "Sarees priced at ₹299 or less will save sellers up to ₹46 per piece.",
  },
  {
    title: "Hotel",
    desc: "See up to 15.5% reduction in referral fee for products <= Rs.300.",
    img: "https://img.freepik.com/free-photo/full-shot-man-carrying-baggage_23-2149963942.jpg?uid=R200540322&ga=GA1.1.995393516.1744188710&semt=ais_hybrid&w=740",
    details:
      "Curtains priced at ₹299 or less will save sellers up to ₹40 per piece.",
  },
  {
    title: "Apron",
    desc: "See up to 15% reduction in referral fee for products <= Rs.300.",
    img: "https://img.freepik.com/free-photo/shop-owner-mask-outside-cafe-new-normal-with-sign_53876-97519.jpg?uid=R200540322&ga=GA1.1.995393516.1744188710&semt=ais_hybrid&w=740",
    details:
      "Shoes priced at ₹299 or less will save sellers up to ₹35 per pair.",
  },
  {
    title: "Medical",
    desc: "See up to 17.5% reduction in referral fee for products <= Rs.300.",
    img: "https://img.freepik.com/free-psd/blue-medical-scrubs-with-stethoscope-healthcare-professional-uniform_632498-25302.jpg?uid=R200540322&ga=GA1.1.995393516.1744188710&semt=ais_hybrid&w=740",
    details:
      "Jewelry priced at ₹299 or less will save sellers up to ₹52 per piece.",
  },
];

export default function CategoryImpact() {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (idx) => {
    setExpanded(expanded === idx ? null : idx);
  };

  return (
    <div className="category-impact-container">
      <h1 className="category-impact-title">Category level impact</h1>
      <div className="category-impact-grid">
        {categories.map((cat, idx) => (
          <div className="category-card" key={idx}>
            <div className="category-card-content">
              <h2>{cat.title}</h2>
              <p>
                <b>{cat.desc.split(" ")[0]}</b>
                {cat.desc.substring(cat.desc.indexOf(" "))}
              </p>
              <div
                className="category-card-link"
                style={{ cursor: "pointer" }}
                onClick={() => handleToggle(idx)}
              >
                <span>Check here</span>
                <span className="plus-icon">
                  {expanded === idx ? "−" : "+"}
                </span>
              </div>
              {expanded === idx && (
                <div
                  className={`category-card-details${
                    expanded === idx ? " expanded" : ""
                  }`}
                >
                  {expanded === idx && (
                    <>
                      <hr />
                      <p style={{ fontWeight: 600, marginTop: 16 }}>
                        {cat.details}
                      </p>
                    </>
                  )}
                </div>
              )}
            </div>
            <img src={cat.img} alt={cat.title} className="category-card-img" />
          </div>
        ))}
      </div>
      <button className="fee-drop-btn">Know more about fee drop here</button>
    </div>
  );
}
