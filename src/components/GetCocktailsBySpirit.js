import React, { useEffect, useState } from "react";
import axios from "axios";
import CocktailCard from "./CocktailCard";
import {Link} from 'react-router-dom';


const GetCocktailsBySpirit = ({ spiritName, handleCardClick }) => {
  const [drinkList, setDrinkList] = useState([]);
  const [click, setClick] = useState("");

  useEffect(async () => {
    console.log("fetch");
    const response = await axios(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + spiritName
    );
    const drinks = response.data.drinks;
    setDrinkList(drinks);
  }, [spiritName, click]);


  const handleClick = () => {
    setClick("card-click");
    console.log(click);
  }

  

  if (drinkList !== undefined) {
    return drinkList.map((drink) => <Link to={"/" + drink.idDrink} key={drink.idDrink}><CocktailCard handleCardClick={handleCardClick} cocktailId={drink.idDrink} cocktailName={drink.strDrink} imageSrc={drink.strDrinkThumb} >{drink.strDrink}</CocktailCard></Link>);
  } else return null;
};

export default GetCocktailsBySpirit;
