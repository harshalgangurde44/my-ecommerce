import React, { useContext } from "react";
import "./header.css";
import { CartContext } from "../../context/cart-context";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const { cartData } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar">
        <section className="logo">E-commerce store</section>
        <section
          className=""
          onClick={() => {
            navigate("/cart");
          }}
        >
          <span>{cartData.length} </span>
          <i className="fa fa-shopping-cart"></i>
        </section>
      </nav>
    </div>
  );
};

export default Header;
