import React, { useState } from "react";
import CartContext from "./Cart-Context";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const addItemtoCartHandler = (item) => {
    cartItems.length === 0 && setCartItems([item]);

    const existingItemIndex = cartItems.findIndex((shoe) => {
      return shoe.id === item.id;
    });

    const existingItem = cartItems[existingItemIndex];
    let updatedItem;
    let updatedItems;

    if (existingItem) {
      updatedItem = {
        ...existingItem,
        L: existingItem.L + item.L,
        M: existingItem.M + item.M,
        S: existingItem.S + item.S,
      };
      updatedItems = [...cartItems];
      updatedItems[existingItemIndex] = updatedItem;
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, item]);
    }
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
