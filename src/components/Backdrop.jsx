import React from "react";
import "../styles/index.css";
import Cart from "./Cart";
const Backdrop = ({ showCart, handleShowCart }) => {
  return (
    <>
      {showCart && (
        <>
          <div onClick={handleShowCart} className="backdrop"></div>
          <Cart handleShowCart={handleShowCart} />
        </>
      )}
    </>
  );
};

export default Backdrop;
