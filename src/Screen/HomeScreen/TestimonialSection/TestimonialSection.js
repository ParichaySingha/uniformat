import React from "react";
import "./TestimonialSection.css";

const TestimonialSection = () => {
  return (
    <div className="testimonial-section">
      <div className="testimonial-header">
        Here's what UNIFORMAT sellers are saying:
      </div>
      <div className="testimonial-content">
        <div className="testimonial-image-container">
          <div className="testimonial-image-circle">
            <img
              src="https://m.media-amazon.com/images/G/31/amazonservices/Sunehra_Koshi.webp"
              alt="Testimonial"
              className="testimonial-image"
            />
            {/* <div className="testimonial-play-button">&#9654;</div> */}
          </div>
        </div>
        <div className="testimonial-text">
          <div className="testimonial-title">CRACK OF DAWN CRAFTS</div>
          <div className="testimonial-quote">
            <span className="testimonial-quote-mark">“</span>
            From five members to fifteen, a little trust can go a long way.
          </div>
          <div className="testimonial-author">
            <strong>Sunehra Koshi</strong>
            <div className="testimonial-role">
              Founder, Crack of Dawn Crafts
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial-content">
        <div className="testimonial-text">
          <div className="testimonial-title">GOODNESS ALWAYS</div>
          <div className="testimonial-quote">
            <span className="testimonial-quote-mark">“</span>
            We went from sales of 10,000 rupees to 5 lakh in just two and a half years.
          </div>
          <div className="testimonial-author">
            <strong>Dheepakh Rajaram</strong>
            <div className="testimonial-role">
              Founder, Crack of Dawn Crafts
            </div>
          </div>
        </div>
        <div className="testimonial-image-container">
          <div className="testimonial-image-circle">
            <img
              src="https://m.media-amazon.com/images/G/31/amazonservices/Dheepakh_Rajaram.webp"
              alt="Testimonial"
              className="testimonial-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
