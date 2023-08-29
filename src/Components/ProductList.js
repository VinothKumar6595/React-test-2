import React, { useContext } from "react";
import Button from "./UI/Button";
import classes from "./ProductList.module.css";
import CartContext from "../Store/Cart-Context";

const ProductList = (props) => {
  const cntx = useContext(CartContext);
  const largeClickHandler = (item) => {
    const updatedItems = props.items.map((shoe) => {
      return shoe.id === item.id ? { ...shoe, L: shoe.L - 1 } : { ...shoe };
    });
    props.setItems(updatedItems);
    console.log(updatedItems, "updated it");
    cntx.addItemToCart({ ...item, L: 1, M: 0, S: 0 });
  };

  const mediumClickHandler = (item) => {
    const updatedItems = props.items.map((shoe) => {
      return shoe.id === item.id ? { ...shoe, M: shoe.M - 1 } : { ...shoe };
    });
    props.setItems(updatedItems);
    cntx.addItemToCart({ ...item, L: 0, M: 1, S: 0 });
  };

  const smallClickHandler = (item) => {
    const updatedItems = props.items.map((shoe) => {
      return shoe.id === item.id ? { ...shoe, S: shoe.S - 1 } : { ...shoe };
    });
    props.setItems(updatedItems);
    cntx.addItemToCart({ ...item, L: 0, M: 0, S: 1 });
  };

  return (
    <ul className={classes.list}>
      {props.items.map((item, index) => (
        <li key={index}>
          {item.name} - {item.description} - {item.price} -{" "}
          <Button onClick={() => largeClickHandler(item)}>
            Buy Large - {item.L}
          </Button>{" "}
          -{" "}
          <Button onClick={() => mediumClickHandler(item)}>
            Buy Medium - {item.M}
          </Button>{" "}
          -{" "}
          <Button onClick={() => smallClickHandler(item)}>
            Buy Small - {item.S}
          </Button>
        </li>
      ))}
    </ul>
  );
};
export default ProductList;
