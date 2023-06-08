import React, { useState } from "react";

const CartContext = React.createContext();

const CartProvider = (props) => {
  const [cartData, setCardData] = useState([]);

  const addCartData = (data) => {
    setCardData([...cartData, data]);
  };

  return (
    <CartContext.Provider value={{ cartData, addCartData }}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
