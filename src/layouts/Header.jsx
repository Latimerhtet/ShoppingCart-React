import React from "react";
import Navbar from "./Navbar";
import Summary from "./Summary";

const Header = ({ handleShowCart }) => {
  return (
    <>
      <Navbar handleShowCart={handleShowCart} />
    </>
  );
};

export default Header;
