import React, { useState, useEffect } from "react";
import axios from "axios";
import CocktailCard from './CocktailCard';
import DetailedCard from './DetailedCard';

const ingredientList = [];

const RandomCocktail = ({handleCardClick}) => {
  const [cocktailName, setCocktailName] = useState("");
  const [cocktailPicture, setCocktailPicture] = useState("");
  const [cocktailId, setCocktailId] = useState("");
  const [instructions, setInstructions] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState([]);

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
        if (randomDrinkArray[0].strIngredient1 !== null) {
          ingredientList.push(randomDrinkArray[0].strIngredient1);

        }
        if (randomDrinkArray[0].strIngredient1 !== null) {
          ingredientList.push(randomDrinkArray[0].strIngredient1);

        }
        if (randomDrinkArray[0].strIngredient2 !== null) {
          ingredientList.push(randomDrinkArray[0].strIngredient2);

        }
        if (randomDrinkArray[0].strIngredient3 !== null) {
          ingredientList.push(randomDrinkArray[0].strIngredient3);

        }
        if (randomDrinkArray[0].strIngredient4 !== null) {
          ingredientList.push(randomDrinkArray[0].strIngredient4);

        }
        if (randomDrinkArray[0].strIngredient5 !== null) {
          ingredientList.push(randomDrinkArray[0].strIngredient5);

        }
        if (randomDrinkArray[0].strIngredient6 !== null) {
          ingredientList.push(randomDrinkArray[0].strIngredient6);

        }
        if (randomDrinkArray[0].strIngredient7 !== null) {
          ingredientList.push(randomDrinkArray[0].strIngredient7);

        }
        if (randomDrinkArray[0].strIngredient8 !== null) {
          ingredientList.push(randomDrinkArray[0].strIngredient8);

        }
        if (randomDrinkArray[0].strIngredient9 !== null) {
          ingredientList.push(randomDrinkArray[0].strIngredient9);

        }
        if (randomDrinkArray[0].strIngredient10 !== null) {
          ingredientList.push(randomDrinkArray[0].strIngredient10);

        }
        if (randomDrinkArray[0].strIngredient11 !== null) {
          ingredientList.push(randomDrinkArray[0].strIngredient11);

        }
        if (randomDrinkArray[0].strIngredient12 !== null) {
          ingredientList.push(randomDrinkArray[0].strIngredient12);

        }
        if (randomDrinkArray[0].strIngredient13 !== null) {
          ingredientList.push(randomDrinkArray[0].strIngredient13);

        }
        if (randomDrinkArray[0].strIngredient14 !== null) {
          ingredientList.push(randomDrinkArray[0].strIngredient14);

        }
        if (randomDrinkArray[0].strIngredient15 !== null) {
          ingredientList.push(randomDrinkArray[0].strIngredient15);

        }
        setIngredients(ingredientList);
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
