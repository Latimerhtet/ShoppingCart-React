import React, { createContext, useReducer } from "react";

const ACTIONS = {
  ADD: "add",
  DELETE: "delete",
  ADD_AMOUNT: "addAmount",
};

const initialState = {
  items: [],
  totalAmount: 0,
};

const reducer = (state, action) => {
  if (action.type === ACTIONS.ADD) {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const recentItemIndex = state.items.findIndex(
      (item) => item.id == action.item.id
    );
    const recentItem = state.items[recentItemIndex];
    let updatedItems;
    if (recentItem) {
      const updatedItem = {
        ...recentItem,
        amount: recentItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[recentItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === ACTIONS.DELETE) {
    const recentItemIndex = state.items.findIndex(
      (item) => item.id == action.id
    );
    const recentItem = state.items[recentItemIndex];
    const updatedTotalAmount = state.totalAmount - recentItem.price;
    let updatedItems;
    if (recentItem.amount == 1) {
      updatedItems = state.items.filter((item) => item.id !== recentItem.id);
    } else {
      const updatedItem = {
        ...recentItem,
        amount: recentItem.amount - 1,
      };

      updatedItems = [...state.items];
      updatedItems[recentItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
};

export const itemsContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
});

const ItemProvider = ({ children }) => {
  const [state, dispatchItem] = useReducer(reducer, initialState);
  const addItemHandler = (item) => {
    dispatchItem({ type: ACTIONS.ADD, item });
  };
  const removeItemHandler = (id) => {
    dispatchItem({ type: ACTIONS.DELETE, id });
  };

  const contextValues = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <itemsContext.Provider value={contextValues}>
      {children}
    </itemsContext.Provider>
  );
};

export default ItemProvider;
