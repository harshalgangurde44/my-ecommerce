import React from "react";
import { CartContext } from "../../context/cart-context";
import { useContext } from "react";
import "./items.css";
// import staticdata from "../fetch";

const Item = ({ item }) => {
  const { addCartData } = useContext(CartContext);

  return (
    <div className="flex">
      <section className="card">
        <img
          height="70px"
          src="http://localhost:1337/uploads/COD_game_8020f222ff.jpg"
          alt="game"
          className="imageh"
        />
        <article className="cart-title">{item.title}</article>
        <article className="cart-description">{item.description} </article>
        <section className="cart-footer">
          <article className="price">{item.price}</article>

          <button
            className="btn"
            onClick={() => {
              addCartData(item);
            }}
          >
            Add to Cart
          </button>
        </section>
      </section>
    </div>
  );
};

export default Item;
