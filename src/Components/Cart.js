import React, { useContext } from "react";
import Modal from "./Modal";
import CartContext from "../Store/Cart-Context";
const Cart = (props) => {
  const cartCntx = useContext(CartContext);

  return (
    <Modal onClick={props.onHideCart}>
      <div>
        <span>Total Amount</span>
        <span>0</span>
      </div>
      <div>
        <button>Place Order</button>
        <button onClick={props.onHideCart}>Cancel</button>
      </div>
    </Modal>
  );
};

export default Cart;
