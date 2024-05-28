import React, { useContext, useState } from "react";
import guitars from "../Data/guitars";
import Card from "./Card";
import "../styles/body.css";

const Body = () => {
  return (
    <div className="guitars-grid">
      {guitars.map((guitar) => {
        return <Card key={guitar.id} guitar={guitar} />;
      })}
    </div>
  );
};

export default Body;
