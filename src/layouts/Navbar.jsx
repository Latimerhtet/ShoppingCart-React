import React, { useContext } from "react";
import "../styles/navbar.css";
import Summary from "./Summary";
import { itemsContext } from "../store/ItemProvider";
const Navbar = ({ handleShowCart }) => {
  const { items } = useContext(itemsContext);
  const itemsAmount = items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);
  return (
    <section className="navbar-and-summary-div">
      <nav className="navbar">
        <h1 className="navbar-logo">Guitar4U</h1>
        <button className="navbar-cart-btn" onClick={handleShowCart}>
          Your Cart
          {itemsAmount > 0 && <p className="cartAmount">{itemsAmount}</p>}
        </button>
      </nav>
      <Summary />
    </section>
  );
};

export default Navbar;
