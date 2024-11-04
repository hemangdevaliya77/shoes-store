import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
  resetCart,
} from "../redux/cartSlice";
import "../styles/cart.css";
import OrderModal from "./OrderModal";
import { useNavigate } from "react-router-dom";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState({});

  const handlePlaceOrder = () => {
    setModalOpen(true);
  };

  const handleRemoveItem = (item) => {
    dispatch(removeFromCart(item));
    // Update local storage by filtering out the removed item
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const handleSubmitOrder = (orderDetails) => {
    // Include selected sizes in order details
    const orderWithSizes = {
      ...orderDetails,
      cartItems: cartItems.map((item) => ({
        ...item,
        selectedSize: selectedSizes[item.id] || "N/A",
      })),
    };

    console.log(orderWithSizes);
    alert("Order placed successfully!");
    setModalOpen(false);

    // Clear the local storage
    localStorage.removeItem("cartItems");
    dispatch(resetCart());

    // Navigate to the running page
    navigate("/running");
  };

  const handleSizeChange = (id, size) => {
    setSelectedSizes((prevSizes) => ({
      ...prevSizes,
      [id]: size, // Update the selected size for the item
    }));
  };

  useEffect(() => {
    // Load cart items from local storage on component mount
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      parsedCart.forEach((item) => {
        const existingItem = cartItems.find(
          (cartItem) => cartItem.id === item.id
        );
        if (!existingItem) {
          dispatch({ type: "cart/addToCart", payload: item });
        }
      });
    }
  }, [dispatch, cartItems]);

  useEffect(() => {
    // Save cart items to local storage whenever cartItems changes
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        "Your cart is empty"
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-details">
                <img src={item.image} alt={item.name} className="cart-image" />
                <div className="cart-info">
                  <span className="cart-name">{item.name}</span>
                  <div className="cart-controls">
                    <button
                      className="quantity-btn"
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                    >
                      -
                    </button>
                    <span className="cart-quantity">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => dispatch(increaseQuantity(item.id))}
                    >
                      +
                    </button>
                    <br />
                    <br />
                    <label>Select your shoe size:</label>
                    <select
                      onChange={(e) =>
                        handleSizeChange(item.id, e.target.value)
                      }
                      value={selectedSizes[item.id] || ""} // Default value
                    >
                      {item.shoesSize.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                    <p>Price: ${item.price.toFixed(2)}</p>
                    <button
                      className="remove-btn"
                      onClick={() => handleRemoveItem(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <h3 style={{ float: "right" }}>
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </h3>
              </li>
            ))}
          </ul>
          <h3 style={{ float: "right" }}>
            Grand Total: $
            {cartItems
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}
          </h3>
          <div className="confirm-btn-container">
            <button className="order-btn" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </div>
        </>
      )}

      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmitOrder}
        cartItems={cartItems}
        selectedSize={selectedSizes}
      />
    </div>
  );
}

export default Cart;
