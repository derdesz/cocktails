import React, { useState, useEffect } from "react";
import axios from "axios";
import CocktailCard from './CocktailCard';

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
  <div className="filtered-cocktail">
    <CocktailCard  cocktailName={cocktailName} imageSrc={cocktailPicture} />
  </div>
);
};

export default RandomCocktail;
