import React, { useState } from "react";
import CartContext from "./Cart-Context";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const addItemtoCartHandler = (item) => {
    console.log(item);
    cartItems.length === 0 &&
      setCartItems((prev) => {
        return [...prev, item];
      });
    const updatedItem = cartItems.map((shoe) => {
      return shoe.id === item.id
        ? {
            ...shoe,
            L: shoe.L + item.L,
            M: shoe.M + item.M,
            S: shoe.S + item.S,
          }
        : { ...item };
    });
    console.log("updated", updatedItem);
    cartItems.length > 0 &&
      setCartItems((prev) => {
        return { ...prev, updatedItem };
      });
  };
  console.log(cartItems);
  const cartContext = {
    cartItems: cartItems,
    totalAmount: 0,
    addItemToCart: addItemtoCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
