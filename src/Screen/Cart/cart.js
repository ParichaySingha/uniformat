import React from "react";
import "./cart.css";

const Cart = () => {
  return (
    <div className="cart">
      <div className="topLeftCart">
        <div className="topLeftCartTitle">Shopping Cart</div>
        <div className="desellectAllCart">Deselect all items</div>
        <div className="cartPriceTextDivider">Price</div>

        <div className="cartItemsDiv">
          <div className="cartItemBlock">
            <div className="cartItemLeftBlock">
              <div className="cartItemLeftBlockImage">
                <img
                  className="cartItemLeftBlockImg"
                  src="https://m.media-amazon.com/images/I/41hIhmm4EvL._AC_UL480_FMwebp_QL65_.jpg"
                  alt="Cart Item"
                />
              </div>
              <div className="cartItemLeftBlockDetails">
                <div className="cartItemProductName">
                  Ecotribe Set of 2 Cotton Apron for Kitchen-Adjustable
                  Belt-Unisex Apron with Utility Pocket-Cook..
                </div>
                <div className="inStockCart">In stock</div>
                <div className="elgFreeShp">Eligible for FREE Shipping</div>
                <div className="removeFromCart">Remove From Basket</div>
              </div>
            </div>
            <div className="cartItemRightBlock">Rs {899}</div>
          </div>
        </div>
      </div>

      <div className="topRightCart">
        <div className="subTotalTitle">
          Subtotal ({2} items) : <span className="sub">Rs {899}</span>
        </div>
        <div className="proceedToBuy">Proceed To Buy</div>
      </div>
    </div>
  );
};

export default Cart;
