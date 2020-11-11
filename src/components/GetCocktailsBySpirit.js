import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayContent from "./DisplayContent";


const GetCocktailsBySpirit = ({ spiritName, handleCardClick }) => {
  const [drinkList, setDrinkList] = useState([]);
  const [click, setClick] = useState("");

  useEffect(async () => {
    const response = await axios(
      `http://localhost:8080/by-spirit/${spiritName}`
    );
    const drinks = response.data.drinks;
    setDrinkList(drinks);
  }, [spiritName, click]);


  if (drinkList !== undefined) {
    return (
    <React.Fragment>
      <h2 className="filter-header">{spiritName} Cocktails</h2>
      <div className="cocktail-container">
        <DisplayContent cocktails={drinkList} handleCardClick={handleCardClick}/>
      </div>
    </React.Fragment>
    );
  } else return null;
};

export default GetCocktailsBySpirit;
