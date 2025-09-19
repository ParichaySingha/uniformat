import React, { useState, useEffect } from "react";
import "./cart.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/actions";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Cart = () => {
  const [cartItem, setCartItem] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  let a = 0;
  a = cartItems.reduce((sum, item) => sum + item.price, 0);

  useEffect(() => {
    setCartItem(cartItems);
  }, [cartItems]);

  const handleRemoveFromCart=(id) => {
    toast.success("Item Removed From Cart", {
      position: "bottom-right"
    })
    dispatch(removeFromCart(id))
  }

  return (
    <div className="cart">
      <div className="topLeftCart">
        <div className="topLeftCartTitle">Shopping Cart</div>
        <div className="desellectAllCart">Deselect all items</div>
        <div className="cartPriceTextDivider">Price</div>

        <div className="cartItemsDiv">
          {cartItems.map((item, ind) => {
            return (
              <div className="cartItemBlock">
                <div className="cartItemLeftBlock">
                  <div className="cartItemLeftBlockImage">
                    <img
                      className="cartItemLeftBlockImg"
                      src={item.imageUrl}
                      alt="Cart Item"
                    />
                  </div>
                  <div className="cartItemLeftBlockDetails">
                    <div className="cartItemProductName">
                      {item.name}
                    </div>
                    <div className="inStockCart">In stock</div>
                    <div className="elgFreeShp">Eligible for FREE Shipping</div>
                    <div className="removeFromCart" onClick={() => {handleRemoveFromCart(item.id)}}>Remove From Basket</div>
                  </div>
                </div>
                <div className="cartItemRightBlock">Rs {item.price}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="topRightCart">
        <div className="subTotalTitle">
          Subtotal ({cartItem.length} items) : <span className="sub">Rs {a}</span>
        </div>
        <div className="proceedToBuy">Proceed To Buy</div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Cart;
