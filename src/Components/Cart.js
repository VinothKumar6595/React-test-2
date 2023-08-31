import React, { useContext } from "react";
import Modal from "./Modal";
import CartContext from "../Store/Cart-Context";
const Cart = (props) => {
  const cartCntx = useContext(CartContext);
  const cartItems = cartCntx.cartItems.map((item) => {
    const price = item.price * item.L * item.M * item.S;
    return (
      <li key={item.id}>
        <span>{item.name}</span>
        <span>L:{item.L}</span>
        <span>M:{item.M}</span>
        <span>S:{item.S}</span>
        <span>price:{price}</span>
      </li>
    );
  });

  console.log(numberOfCartItems);
  return (
    <Modal onClick={props.onHideCart}>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>{numberOfCartItems}</span>
      </div>
      <div>
        <button>Place Order</button>
        <button onClick={props.onHideCart}>Cancel</button>
      </div>
    </Modal>
  );
};

export default Cart;
