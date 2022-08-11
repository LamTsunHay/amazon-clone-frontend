import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  // let existingCart =
  //   localStorage.getItem("myCart") != undefined
  //     ? JSON.parse(localStorage.getItem("myCart"))
  //     : [];
  // const [items, setItems] = useState(existingCart);
  const [items, setItems] = useState([]);
  const [size, setSize] = useState(items.length);

  const increment = (item) => {
    let userId = 'user1';
    let productId = item.id; 

    const payload = {
      userId: {userId},
      productId: {productId}
    }

    const requestOptions = {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    }
    fetch("http://localhost/amazon/addToCart/add", requestOptions)

    updateCart()
    // let itemList = items;
    // itemList.push(item);
    // setItems(itemList);
    // setSize(itemList.length);

    // saveToLocalCache();
  };

  const updateCart = () => {
    fetch("http://localhost/amazon/addToCart/show/user1")
    .then((response) => response.json())
    .then((cartList) => {
      setItems(cartList);
      setSize(cartList.length);
    })
  }

  // const saveToLocalCache = () => {
  //   localStorage.setItem("myCart", JSON.stringify(items));
  // };

  return (
    <CartContext.Provider value={{ items, size, increment }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
