import React, { useContext, useState } from "react";
import "../styles/body.css";
import { itemsContext } from "../store/ItemProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
const Card = ({ guitar }) => {
  const { addItem } = useContext(itemsContext);
  const { id, img, name, price } = guitar;
  const [currentAmount, setCurrentAmount] = useState(1);
  const [showButtons, setShow] = useState(false);
  const currentAmountNum = +currentAmount;
  const addAmount = () => {
    setCurrentAmount((pre) => Number(pre) + 1);
  };
  const reduceAmount = () => {
    if (currentAmountNum > 1) {
      setCurrentAmount((pre) => pre - 1);
    }
  };
  const addItemHandler = () => {
    setShow(true);
    if (currentAmountNum > 0) {
      addItem({
        id,
        name,
        price,
        img,
        amount: currentAmountNum,
      });
    }
  };

  return (
    <div className="card" key={id}>
      <img src={img} alt="" />
      <div className="guitar-name-price">
        <h4>{name}</h4>
        <div className="guitar-price-add">
          <p>$ {price}</p>
          <div className="buttons">
            {showButtons && (
              <div className="plus-minus-item">
                <button onClick={addAmount}>+</button>
                <input
                  type="text"
                  value={currentAmount}
                  onChange={(e) => {
                    setCurrentAmount(e.target.value);
                  }}
                />
                <button onClick={reduceAmount}>-</button>
              </div>
            )}
            <button className="addItemBtn" onClick={addItemHandler}>
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
