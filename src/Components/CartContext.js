import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  let existingCart =
    localStorage.getItem("myCart") != undefined
      ? JSON.parse(localStorage.getItem("myCart"))
      : [];
  const [items, setItems] = useState(existingCart);
  const [size, setSize] = useState(items.length);

  const increment = (item) => {
    let itemList = items;
    itemList.push(item);
    setItems(itemList);
    setSize(itemList.length);

    saveToLocalCache();
  };

  const saveToLocalCache = () => {
    localStorage.setItem("myCart", JSON.stringify(items));
  };

  return (
    <CartContext.Provider value={{ items, size, increment }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
