import React, { useState } from "react";
import classes from "./Form.module.css";
import Button from "./UI/Button";
import ProductList from "./ProductList";
import { v4 as uuidv4 } from "uuid";

const Form = (props) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [large, setLarge] = useState("");
  const [medium, setMedium] = useState("");
  const [small, setSmall] = useState("");
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const descChangeHandler = (event) => {
    setDesc(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };

  const largeChangeHandler = (event) => {
    setLarge(event.target.value);
  };

  const mediumChangeHandler = (event) => {
    setMedium(event.target.value);
  };

  const smallChangeHandler = (event) => {
    setSmall(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const myObj = {
      name: name,
      description: desc,
      price: price,
      L: large,
      M: medium,
      S: small,
      id: uuidv4(),
    };
    props.onAddProduct(myObj);
    setName("");
    setDesc("");
    setPrice("");
    setLarge("");
    setMedium("");
    setSmall("");
  };
  return (
    <React.Fragment>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="name">Shoe Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            id="desc"
            onChange={descChangeHandler}
            value={desc}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            onChange={priceChangeHandler}
            value={price}
          />
        </div>
        <div className={classes.quantity}>
          <div>
            <label>Quantity Available</label>
          </div>
          <span>
            <label htmlFor="large">L</label>
            <input
              type="number"
              id="large"
              onChange={largeChangeHandler}
              value={large}
            />
          </span>
          <span>
            <label htmlFor="medium">M</label>
            <input
              type="number"
              id="medium"
              onChange={mediumChangeHandler}
              value={medium}
            />
          </span>
          <span>
            <label htmlFor="small">S</label>
            <input
              type="number"
              id="samll"
              onChange={smallChangeHandler}
              value={small}
            />
          </span>
        </div>
        <Button> Add Product</Button>
      </form>
      <ProductList items={props.items} setItems={props.setItems} />
    </React.Fragment>
  );
};

export default Form;
