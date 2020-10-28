import React, { useState, useEffect } from "react";
import axios from "axios";

const RandomCocktail = () => {
  const [cocktailName, setCocktailName] = useState("");

  useEffect(() => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => {
          const randomDrinkArray = response.data.drinks;
        setCocktailName(randomDrinkArray[0].strDrink);
      });
  }, []);

  return <div>{cocktailName}</div>;
};

export default RandomCocktail;
