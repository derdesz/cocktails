import React, { useState, useEffect } from "react";
import axios from "axios";

const RandomCocktail = () => {
  const [cocktailName, setCocktailName] = useState("");
  const [cocktailPicture, setCocktailPicture] = useState("");

  useEffect(() => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => {
          const randomDrinkArray = response.data.drinks;
        setCocktailName(randomDrinkArray[0].strDrink);
        setCocktailPicture(randomDrinkArray[0].strDrinkThumb);
      });
  }, []);

return (
  <div>
    <img src={cocktailPicture}/>
    <div>{cocktailName}</div>
  </div>
);
};

export default RandomCocktail;
