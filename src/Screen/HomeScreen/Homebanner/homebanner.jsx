import React, { useState } from "react";
import "./homebanner.css";
import homeBannerItemProduct from "../../../homeProduct.json";

const HomeBanner = () => {
  // Track current image index for each product card
  const [currentIndexes, setCurrentIndexes] = useState(
    homeBannerItemProduct.product.map(() => 0)
  );

  // Handler for navigating images
  const handleNavigate = (cardIdx, direction) => {
    setCurrentIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      const imgsLength = homeBannerItemProduct.product[cardIdx].imgs.length;
      if (direction === "prev") {
        newIndexes[cardIdx] =
          (newIndexes[cardIdx] - 1 + imgsLength) % imgsLength;
      } else {
        newIndexes[cardIdx] = (newIndexes[cardIdx] + 1) % imgsLength;
      }
      return newIndexes;
    });
  };

  return (
    <section className="homeBanner">
      <img
        className="homeBannerImg"
        src="https://img.freepik.com/free-photo/row-fashionable-clothing-hangers_1232-4927.jpg?uid=R200540322&ga=GA1.1.995393516.1744188710&semt=ais_hybrid&w=740"
        alt="Main promotional banner"
      />
      <div className="homeBannerOverlay"></div>
      <div className="homeBannerItems">
        {homeBannerItemProduct.product.map((item, idx) => (
          <div className="homeBannerCard" key={item.itemTitle + idx}>
            <h2 className="homeBannerCardTitle">{item.itemTitle}</h2>
            <div className="homeBannerCardImages">
              <button
                className="carouselNavBtn"
                onClick={() => handleNavigate(idx, "prev")}
                aria-label="Previous image"
              >
                &#8592;
              </button>
              <div className="homeBannerImageWrapper">
                <img
                  className="homeBannerProductImg"
                  src={item.imgs[currentIndexes[idx]]}
                  alt={
                    item.imgNames && item.imgNames[currentIndexes[idx]]
                      ? item.imgNames[currentIndexes[idx]]
                      : `Product ${currentIndexes[idx] + 1}`
                  }
                />
                <div className="homeBannerImgName">
                  {item.imgNames && item.imgNames[currentIndexes[idx]]
                    ? item.imgNames[currentIndexes[idx]]
                    : "Product"}
                </div>
              </div>
              <button
                className="carouselNavBtn"
                onClick={() => handleNavigate(idx, "next")}
                aria-label="Next image"
              >
                &#8594;
              </button>
            </div>
            <button
              className="homeBannerSeeMore"
              aria-label={`See more about ${item.itemTitle}`}
            >
              See More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeBanner;
