import React, { useState, useEffect } from "react";
import axios from "axios";
import CocktailCard from './CocktailCard';
import DetailedCard from './DetailedCard';


const RandomCocktail = ({handleCardClick}) => {
  const [cocktailName, setCocktailName] = useState("");
  const [cocktailPicture, setCocktailPicture] = useState("");
  const [cocktailId, setCocktailId] = useState("");
  const [instructions, setInstructions] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const measureList = [];
  const ingredientList = [];
  const recipe = [];

  useEffect(() => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => {
          const randomDrinkArray = response.data.drinks;
        setCocktailName(randomDrinkArray[0].strDrink);
        setCocktailPicture(randomDrinkArray[0].strDrinkThumb);
        setCocktailId(randomDrinkArray[0].idDrink);
        setInstructions(randomDrinkArray[0].strInstructions);
        setCategory(randomDrinkArray[0].strCategory);
        
        const cocktailDetails = randomDrinkArray[0];
        console.log("Random cocktail details: " + cocktailDetails.strDrink);

        const hash = new Map();
        Object.keys(cocktailDetails).forEach(key => {
          if (key.startsWith('strIngredient') && cocktailDetails[key]!== null){
            ingredientList.push(cocktailDetails[key]);
          }

          if (key.startsWith('strMeasure') && cocktailDetails[key]!== null){
            measureList.push(cocktailDetails[key]);
          }
        });

        for (let i = 0; i < ingredientList.length; i++) {
          recipe.push(measureList[i].concat(ingredientList[i]));
        }

        console.log("Recipe: " + recipe)
        setIngredients(recipe);
        console.log(cocktailId);
      });
  }, []);

return (
  <div className="filtered-cocktail">
    <DetailedCard handleCardClick={handleCardClick} ingredients={ingredients} category={category} instructioins={instructions} cocktailId={cocktailId} cocktailName={cocktailName} imgSrc={cocktailPicture} />
    {/* imgSrc, cocktailName, instructions, category, ingredients */}
  </div>
);
};

export default RandomCocktail;
