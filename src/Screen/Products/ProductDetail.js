import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productDetail from "./products.json";
import "./ProductDetail.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/actions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StraightenIcon from "@mui/icons-material/Straighten";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const [showSizeChart, setShowSizeChart] = useState(false);

  const handleAddToCart = () => {
    // You can include selected color/size if needed
    const itemToAdd = {
      ...product,
      selectedColor,
      selectedSize,
    };
    dispatch(addToCart(itemToAdd));
    toast.success("Added To Cart", {
      position: "bottom-right",
    });
  };

  // const handleBuyNow = () => {
  //   // Implement your buy now logic here, e.g., navigate to checkout
  //   toast.info("Proceeding to Buy Now", {
  //     position: "bottom-right",
  //   });
  //   // Example: navigate("/checkout");
  // };

  const { id } = useParams();
  const navigate = useNavigate();
  const product = productDetail.product.find((item) => String(item.id) === id);

  // If your product has multiple images, use product.images (array), else fallback to imageUrl
  const images =
    product?.images && product.images.length > 0
      ? product.images
      : [product?.imageUrl];

  const [mainImage, setMainImage] = useState(images[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || "");
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "");

  if (!product) return <div>Product not found</div>;

  return (
    <>
      {showSizeChart && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.4)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setShowSizeChart(false)}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "8px",
              maxWidth: "800px",
              width: "90vw",
              maxHeight: "90vh",
              overflow: "auto",
              padding: "32px",
              boxShadow: "0 2px 16px rgba(0,0,0,0.2)",
              display: "flex",
              gap: "32px",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h2>Size Chart</h2>
              <table style={{ borderCollapse: "collapse", width: "100%" }}>
                <thead>
                  <tr>
                    <th
                      style={{ borderBottom: "1px solid #eee", padding: "8px" }}
                    >
                      Size
                    </th>
                    <th
                      style={{ borderBottom: "1px solid #eee", padding: "8px" }}
                    >
                      Chest
                    </th>
                    <th
                      style={{ borderBottom: "1px solid #eee", padding: "8px" }}
                    >
                      Brand Size
                    </th>
                    <th
                      style={{ borderBottom: "1px solid #eee", padding: "8px" }}
                    >
                      Shoulder
                    </th>
                    <th
                      style={{ borderBottom: "1px solid #eee", padding: "8px" }}
                    >
                      Length
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: "8px" }}>M</td>
                    <td style={{ padding: "8px" }}>38</td>
                    <td style={{ padding: "8px" }}>M</td>
                    <td style={{ padding: "8px" }}>15</td>
                    <td style={{ padding: "8px" }}>26</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "8px" }}>L</td>
                    <td style={{ padding: "8px" }}>40</td>
                    <td style={{ padding: "8px" }}>L</td>
                    <td style={{ padding: "8px" }}>16</td>
                    <td style={{ padding: "8px" }}>27</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "8px" }}>XL</td>
                    <td style={{ padding: "8px" }}>42</td>
                    <td style={{ padding: "8px" }}>XL</td>
                    <td style={{ padding: "8px" }}>17</td>
                    <td style={{ padding: "8px" }}>28</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "8px" }}>XXL</td>
                    <td style={{ padding: "8px" }}>44</td>
                    <td style={{ padding: "8px" }}>XXL</td>
                    <td style={{ padding: "8px" }}>18</td>
                    <td style={{ padding: "8px" }}>29</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div style={{ minWidth: "260px" }}>
              <h3>Measuring T Shirt Size</h3>
              <div style={{ fontSize: "15px", marginBottom: "12px" }}>
                Not sure about your t shirt size? Follow these simple steps to
                figure it out:
                <br />
                <br />
                <b>Shoulder</b> - Measure the shoulder at the back, from edge to
                edge with arms relaxed on both sides.
                <br />
                <b>Chest</b> - Measure around the body under the arms at the
                fullest part of the chest with your arms relaxed at both sides.
                <br />
                <b>Sleeve</b> - Measure from the shoulder seam through the outer
                arm to the cuff/hem.
                <br />
                <b>Neck</b> - Measured horizontally across the neck.
                <br />
                <b>Length</b> - Measure from the highest point of the shoulder
                seam to the bottom hem of the garment.
              </div>
              <img
                src="https://rukminim2.flixcart.com/www/240/240/prod/images/sizechart/t_shirt-half_sleeve-men_s-round_neck-d3fa68ae.jpg?q=90"
                alt="T-shirt measurement"
                style={{
                  width: "100%",
                  maxWidth: "220px",
                  border: "1px solid #eee",
                  borderRadius: "4px",
                }}
              />
            </div>
            <button
              onClick={() => setShowSizeChart(false)}
              style={{
                position: "absolute",
                top: "16px",
                right: "32px",
                background: "transparent",
                border: "none",
                fontSize: "28px",
                cursor: "pointer",
                color: "#888",
              }}
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        </div>
      )}
      <div className="single-product-page">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <div className="single-product-container">
          <div className="single-product-images">
            <img className="main-image" src={mainImage} alt={product.name} />
            <div className="thumbnail-row">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`thumb-${idx}`}
                  className={`thumbnail ${mainImage === img ? "active" : ""}`}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>
          <div className="single-product-details">
            <h2>{product.name}</h2>
            <div className="single-product-price">₹{product.price}</div>
            <div className="single-product-category">{product.category}</div>
            <div className="single-product-desc">{product.description}</div>
            {/* Color options */}
            {product.colors && product.colors.length > 0 && (
              <div className="product-colors">
                <span>Color: </span>
                {product.colors.map((color, idx) => (
                  <span
                    key={idx}
                    className={`color-dot${
                      selectedColor === color ? " selected" : ""
                    }`}
                    style={{
                      background: color,
                      border:
                        selectedColor === color
                          ? "2px solid #333"
                          : "1px solid #ccc",
                    }}
                    onClick={() => setSelectedColor(color)}
                  ></span>
                ))}
              </div>
            )}
            {/* Size options */}
            {product.sizes && product.sizes.length > 0 && (
              <div
                className="product-sizes"
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span
                  style={{ display: "flex", alignItems: "center", gap: "6px" }}
                >
                  Size:
                  <a
                    href="https://rukminim2.flixcart.com/www/240/240/prod/images/sizechart/t_shirt-half_sleeve-men_s-round_neck-d3fa68ae.jpg?q=90"
                    style={{
                      color: "#1976d2",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      marginLeft: "8px",
                      fontWeight: 500,
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      setShowSizeChart(true);
                    }}
                  >
                    Size Chart{" "}
                    <StraightenIcon
                      style={{ fontSize: "18px", marginLeft: "4px" }}
                    />
                  </a>
                </span>
                <div>
                  {product.sizes.map((size, idx) => (
                    <span
                      key={idx}
                      className={`size-box${
                        selectedSize === size ? " selected" : ""
                      }`}
                      onClick={() => setSelectedSize(size)}
                      style={{
                        border:
                          selectedSize === size
                            ? "2px solid #333"
                            : "1px solid #ccc",
                        cursor: "pointer",
                        marginRight: "8px",
                        padding: "4px 10px",
                        borderRadius: "4px",
                      }}
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div className="product-actions">
              <button className="add-cart-btn" onClick={handleAddToCart}>
                Add to Cart
              </button>
              <button className="buy-now-btn">Design Yourself</button>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default ProductDetail;
