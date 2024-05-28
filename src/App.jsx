import React, { useState } from "react";
import Backdrop from "./components/Backdrop";
import Header from "./layouts/Header";
import Body from "./layouts/Body";
import ItemProvider from "./store/ItemProvider";
const App = () => {
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => [setShowCart(!showCart)];
  return (
    <ItemProvider>
      <Header handleShowCart={handleShowCart} />
      <Body />
      <Backdrop showCart={showCart} handleShowCart={handleShowCart} />
    </ItemProvider>
  );
};

export default App;
