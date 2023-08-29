import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Header from "./Components/UI/Header";
import CartProvider from "./Store/CartProvider";
import Cart from "./Components/Cart";

function App(props) {
  const [showCart, setShowCart] = useState(false);
  const [products, setProducts] = useState([]);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  const addProductHandler = (product) => {
    setProducts((prevProducts) => {
      return [...prevProducts, product];
    });
  };

  return (
    <CartProvider>
      <div className="App">
        {showCart && <Cart onHideCart={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <Form
          onAddProduct={addProductHandler}
          items={products}
          setItems={setProducts}
        />
      </div>
    </CartProvider>
  );
}

export default App;
