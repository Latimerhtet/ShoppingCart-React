import React, { useContext, useState } from "react";
import "../styles/index.css";
import CartItem from "./CartItem";
import { itemsContext } from "../store/ItemProvider";
const Cart = ({ handleShowCart }) => {
  const { items, totalAmount, checkout } = useContext(itemsContext);
  const [confirm, setconfirm] = useState(false);
  const order = () => {
    setconfirm(true);
    checkout();
  };
  return (
    <div className="cart-grid">
      {items.length == 0 ? (
        <div className="no-items">
          {confirm ? (
            <>
              <p>Thanks for shopping with Us! Come again to our Store!</p>
              <button onClick={handleShowCart}>Ok</button>
            </>
          ) : (
            <>
              {" "}
              <p>You haven't added any order yet!</p>
              <button onClick={handleShowCart}>Let's go back to order</button>
            </>
          )}
        </div>
      ) : (
        <>
          <h1>Your Cart</h1>
          <div className="items-overflow-div">
            {items.map((item) => {
              return <CartItem key={item.id} item={item} />;
            })}
          </div>
          <div className="horizontal-line"></div>
          <div className="total-price">
            <p>Total price:</p>
            <p>$ {totalAmount}</p>
          </div>
          <div className="Cart-buttons">
            <button onClick={handleShowCart}>Close</button>
            <button onClick={order}>Order</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
