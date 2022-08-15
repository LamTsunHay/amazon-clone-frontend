import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const [size, setSize] = useState(items.length);
  const userCode = "c8ab9aca-0d5d-440d-8d86-630cfbe0a78e";

  const updateCart = () => {
    fetch("http://localhost:8081/amazon/addToCart/show/" + userCode)
      .then((response) => response.json())
      .then((cartList) => {
        setItems(cartList.list);
        setSize(cartList.list.length);
      });
  };

  updateCart();

  const increment = (item) => {
    let productCode = item.productId;

    const payload = {
      userId: userCode,
      productId: productCode,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    };
    fetch("http://localhost:8081/amazon/addToCart/add", requestOptions).then(
      () => updateCart()
    );
  };

  const decrement = (item) => {
    let productCode = item.productId;

    const payload = {
      userId: userCode,
      productId: productCode,
    };
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    };
    fetch("http://localhost:8081/amazon/addToCart/remove", requestOptions).then(
      () => updateCart()
    );
  };

  return (
    <CartContext.Provider value={{ items, size, increment, decrement }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
