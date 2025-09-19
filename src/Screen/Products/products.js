import React, { useState } from "react";
import "./products.css";

import productDetail from "./products.json";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/actions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

const categories = [
  "Housekeeping",
  "FCB/GSA/Waiter",
  "Housekeeping Uniform",
  "Front Office",
  "Spa Uniform",
  "Bell Boy",
  "Valet Uniform",
  "Hostess",
  "Security Guard",
  "Back Office",
];

const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState(null);

  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? productDetail.product.filter((item) => item.category === selectedCategory)
    : productDetail.product;
  // const cartItems = useSelector((state) => state.cart.items);
  const handleAddToCart = (item) => {
    toast.success("Added To Cart", {
      position: "bottom-right",
    });
    dispatch(addToCart(item));
  };

  // Add handleProductClick
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="productPage">
      <div className="productTopBanner">
        <div className="productTopBannerItems">Hotel/Hospitality</div>
      </div>

      <div className="productsPageMain">
        <div className="productsPageMainLeftCategory">
          <div className="productsPageLeftCategoryTitle">Shop By Category</div>
          <div className="productsPageMainLeftCategoryContent">
            {categories.map((cat) => (
              <div
                key={cat}
                className={`productsPageMainLeftCategoryContentSub${
                  selectedCategory === cat ? " active" : ""
                }`}
                onClick={() => setSelectedCategory(cat)}
                style={{ cursor: "pointer" }}
              >
                {cat}
              </div>
            ))}
            <div
              className={`productsPageMainLeftCategoryContentSub${
                selectedCategory === null ? " active" : ""
              }`}
              onClick={() => setSelectedCategory(null)}
              style={{ cursor: "pointer", color: "#febd69" }}
            >
              All
            </div>
          </div>
        </div>

        <div className="productPageMainRight">
          <div className="productPageMainRightTopBanner">
            {`1-${productDetail.product.length} of ${productDetail.product.length} results for `}
            <span className="productsPageMainRightTopBannerSpan">
              Hotel/Hospitality
            </span>
          </div>

          <div className="itemsImageProductPage">
            {filteredProducts.map((item, index) => {
              return (
                <div
                  className="imtemImageProductPageOne"
                  key={item.id}
                  onClick={() => handleProductClick(item.id)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="imgBlockItemsImageProductPageOne">
                    <img
                      className="productImageProduct"
                      src={item.imageUrl}
                      alt="Product"
                    />
                  </div>
                  <div className="productNameproduct">
                    <div>{item.name}</div>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        background: "#22c55e", // green
                        color: "#fff",
                        borderRadius: "20px",
                        padding: "2px 10px",
                        fontWeight: 600,
                        fontSize: "16px",
                        gap: "4px",
                        width: "fit-content",
                      }}
                    >
                      4.6
                      <StarIcon style={{ fontSize: "18px", color: "#fff" }} />
                    </div>
                    <div className="priceProductDetailsPage">
                      <div className="currencyText">₹</div>
                      <div className="rateHomeDetail">
                        <div className="rateHomeDetailsPrice">{item.price}</div>
                        <div
                          className="addTobasketBtn"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevents navigation when clicking Add to Cart
                            handleAddToCart(item);
                          }}
                        >
                          Add To Cart
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Products;
