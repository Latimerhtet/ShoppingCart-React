import React, { useContext, useState } from "react";
import "../styles/index.css";
import { itemsContext } from "../store/ItemProvider";
const CartItem = ({ item }) => {
  const { addItem, removeItem } = useContext(itemsContext);
  const handleAddAmount = () => {
    addItem({ ...item, amount: 1 });
  };
  const handleRemoveAmount = () => {
    removeItem(item.id);
  };
  return (
    <div className="cart-item" key={item.id}>
      <img src={item.img} alt="" />
      <div className="guitar-name-price">
        <h4>{item.name}</h4>
        <div className="price-quantity">
          <div className="plus-minus-items">
            <button onClick={handleAddAmount}>+</button>
            <span>{item.amount}</span>
            <button onClick={handleRemoveAmount}>-</button>
          </div>
          <p>$ {item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
