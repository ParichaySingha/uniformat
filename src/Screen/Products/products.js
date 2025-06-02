import React from "react";
import "./products.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import productDetail from "./products.json";

const Products = () => {
  return (
    <div className="productPage">
      <div className="productTopBanner">
        <div className="productTopBannerItems">Hotel/Hospitality</div>
        <div className="productTopBannerItemsSubMenu">Housekeeping</div>
        <div className="productTopBannerItemsSubMenu">Maintenance</div>
        <div className="productTopBannerItemsSubMenu">FCB/GSA/Waiter</div>
        <div className="productTopBannerItemsSubMenu">Front Office</div>
        <div className="productTopBannerItemsSubMenu">Spa</div>
        <div className="productTopBannerItemsSubMenu">Bell Boy</div>
        <div className="productTopBannerItemsSubMenu">Valet</div>
        <div className="productTopBannerItemsSubMenu">Hostess</div>
        <div className="productTopBannerItemsSubMenu">Security Guard</div>
        <div className="productTopBannerItemsSubMenu">Back Office</div>
      </div>

      <div className="productsPageMain">
        <div className="productsPageMainLeftCategory">
          <div className="productsPageLeftCategoryTitle">Category</div>
          <div className="productsPageMainLeftCategoryContent">
            <div className="productsPageMainLeftCategoryTitleContent">
              Computers & Accessory
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Mackbooks
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Maintenance Uniformat
            </div>

            <div className="ratingLeftBox">
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarHalfIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarBorderIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <div className="andUp">& Up</div>
            </div>

            <div className="ratingLeftBox">
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarHalfIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarBorderIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <div className="andUp">& Up</div>
            </div>

            <div className="ratingLeftBox">
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarHalfIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarBorderIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <div className="andUp">& Up</div>
            </div>

            <div className="ratingLeftBox">
              <StarHalfIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarHalfIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarHalfIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarHalfIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarHalfIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <div className="andUp">& Up</div>
            </div>

            <div className="productsPageMainLeftCategoryContentSub">
              Housekeeping Uniform
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Maintenance
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Kitchen
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              FCB/GSA/Waiter
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Front Office
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Spa Uniform
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Bell Boy
            </div>
            <div className="productsPageMainLeftCategoryContentSub">Valet</div>
            <div className="productsPageMainLeftCategoryContentSub">
              Hostess
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Security Guard
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Back Office
            </div>
          </div>
        </div>

        <div className="productPageMainRight">
          <div className="productPageMainRightTopBanner">
            1-5 of 5 results for{" "}
            <span className="productsPageMainRightTopBannerSpan">
              Hotel/Hospitality
            </span>
          </div>

          <div className="itemsImageProductPage">
            {productDetail.product.map((item, index) => {
              return (
                <div className="imtemImageProductPageOne" key={item.id}>
                  <div className="imgBlockItemsImageProductPageOne">
                    <img
                      className="productImageProduct"
                      src={item.imageUrl}
                      alt="Product"
                    />
                  </div>
                  <div className="productNameproduct">
                    <div>{item.name}</div>
                    <div className="productNameProductRating">
                      <StarRateIcon
                        sx={{ fontSize: "20px", color: "#febd69" }}
                      />
                      <StarRateIcon
                        sx={{ fontSize: "20px", color: "#febd69" }}
                      />
                      <StarRateIcon
                        sx={{ fontSize: "20px", color: "#febd69" }}
                      />
                      <StarHalfIcon
                        sx={{ fontSize: "20px", color: "#febd69" }}
                      />
                      <StarBorderIcon
                        sx={{ fontSize: "20px", color: "#febd69" }}
                      />
                    </div>
                    <div className="priceProductDetailsPage">
                      <div className="currencyText">₹</div>
                      <div className="rateHomeDetail">
                        <div className="rateHomeDetailsPrice">{item.price}</div>
                        <div className="addTobasketBtn">Add To Cart</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
