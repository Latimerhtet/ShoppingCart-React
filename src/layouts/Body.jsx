import React, { useContext, useState } from "react";
import guitars from "../Data/guitars";
import Card from "./Card";
import "../styles/body.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Body = () => {
  const [input, setInput] = useState("");
  const [isFound, setIsFound] = useState(false);

  const search = (e) => {
    e.preventDefault();
    setIsFound(true);
  };
  return (
    <>
      <form onSubmit={search} className="searchInput">
        <input
          placeholder="Search here ..."
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="searchIcon">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </form>
      <div className="guitars-grid">
        {isFound
          ? guitars
              .filter((guitar) => {
                if (input == " ") {
                  return guitar;
                } else if (
                  guitar.name.toLowerCase().includes(input.toLowerCase())
                ) {
                  return guitar;
                }
              })
              .map((guitar) => {
                return <Card key={guitar.id} guitar={guitar} />;
              })
          : guitars.map((guitar) => {
              return <Card key={guitar.id} guitar={guitar} />;
            })}
      </div>
    </>
  );
};

export default Body;
