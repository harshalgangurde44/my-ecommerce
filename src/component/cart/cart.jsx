import React, { useCallback, useContext, useRef } from "react";
import { CartContext } from "../../context/cart-context";
import useRazorpay from "react-razorpay";
import "./cart.css";

const Cart = () => {
  const { cartData } = useContext(CartContext);
  const total = useRef();

  const razorpay = useRazorpay();
  const razorpayDisplay = useCallback(
    async (total) => {
      const options = {
        key: "rzp_test_gv60UCQoq9vOd3",
        amount: total * 100,
        name: "E-commerce",
        currency: "INR",
        description: "Gaming Transaction",
        handler: (res) => {
          console.log(res);
        },
        prefill: {
          name: "Harshal Gangurde",
          email: "gangurdeh5@gmail.com",
        },
      };
      const rzp1 = new razorpay(options);
      rzp1.open();
    },
    [razorpay]
  );

  return (
    <>
      <div>
        <section className="cart">
          {cartData.map((cartItem) => {
            return (
              <section key={cartItem.id}>
                <article>{cartItem.title}</article>
                <article>{cartItem.price}</article>
                <button>Remove</button>
              </section>
            );
          })}
        </section>
        <section className="cart2">
          <div className="bill">Billing</div>
          <div>Total Cash</div>
          {cartData.map((cart) => {
            return (
              <article>
                <span>{cart.title}-$</span>
                <span>{cart.price}</span>
              </article>
            );
          })}
          <article>Total:$ 3000</article>
          <button className="btn1" onClick={() => razorpayDisplay(3000)}>
            Buy
          </button>
        </section>
      </div>
    </>
  );
};

export default Cart;
