import React, { useContext } from "react";
import classes from "./Header.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartContext from "../../Store/Cart-Context";

const Header = (props) => {
  const cntx = useContext(CartContext);
  const numberOfCartItems = cntx.cartItems.reduce((currentNum, item) => {
    return currentNum + item.L + item.M + item.S;
  }, 0);
  return (
    <header className={classes.header}>
      <h1>SHOE SELLER PAGE</h1>
      <button className={classes.button} onClick={props.onShowCart}>
        <span>
          <ShoppingCartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    </header>
  );
};

export default Header;
