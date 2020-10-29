import React, { useEffect, useState } from "react";
import axios from "axios";
import DetailedCard from "./DetailedCard";

const GetCocktailById = ({ cocktailId }) => {
  const [cocktailName, setCocktailName] = useState("");
  const [instructions, setInstructions] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const ingredientList = [];

  useEffect(() => {
    async function fetchCoctail() {
      try {
        const asyncResponse = await axios(
          "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" +
            cocktailId
        );
        const cocktailDetails = asyncResponse.data.drinks[0];
        setCocktailName(cocktailDetails.strDrink);
        setInstructions(cocktailDetails.strInstructions);
        setImgSrc(cocktailDetails.strDrinkThumb);
        setCategory(cocktailDetails.strCategory);
        if (cocktailDetails.strIngredient1 !== null) {
          ingredientList.push(cocktailDetails.strIngredient1);

        }
        if (cocktailDetails.strIngredient1 !== null) {
          ingredientList.push(cocktailDetails.strIngredient1);

        }
        if (cocktailDetails.strIngredient2 !== null) {
          ingredientList.push(cocktailDetails.strIngredient2);

        }
        if (cocktailDetails.strIngredient3 !== null) {
          ingredientList.push(cocktailDetails.strIngredient3);

        }
        if (cocktailDetails.strIngredient4 !== null) {
          ingredientList.push(cocktailDetails.strIngredient4);

        }
        if (cocktailDetails.strIngredient5 !== null) {
          ingredientList.push(cocktailDetails.strIngredient5);

        }
        if (cocktailDetails.strIngredient6 !== null) {
          ingredientList.push(cocktailDetails.strIngredient6);

        }
        if (cocktailDetails.strIngredient7 !== null) {
          ingredientList.push(cocktailDetails.strIngredient7);

        }
        if (cocktailDetails.strIngredient8 !== null) {
          ingredientList.push(cocktailDetails.strIngredient8);

        }
        if (cocktailDetails.strIngredient9 !== null) {
          ingredientList.push(cocktailDetails.strIngredient9);

        }
        if (cocktailDetails.strIngredient10 !== null) {
          ingredientList.push(cocktailDetails.strIngredient10);

        }
        if (cocktailDetails.strIngredient11 !== null) {
          ingredientList.push(cocktailDetails.strIngredient11);

        }
        if (cocktailDetails.strIngredient12 !== null) {
          ingredientList.push(cocktailDetails.strIngredient12);

        }
        if (cocktailDetails.strIngredient13 !== null) {
          ingredientList.push(cocktailDetails.strIngredient13);

        }
        if (cocktailDetails.strIngredient14 !== null) {
          ingredientList.push(cocktailDetails.strIngredient14);

        }
        if (cocktailDetails.strIngredient15 !== null) {
          ingredientList.push(cocktailDetails.strIngredient15);

        }
        setIngredients(ingredientList);
      } catch (err) {
        console.error(err);
      }
    }
    fetchCoctail();
  }, [cocktailId]);

  if (cocktailName !== null) {
    return (
      <DetailedCard
        imgSrc={imgSrc}
        cocktailName={cocktailName}
        instructions={instructions}
        category={category}
        ingredients={ingredients}
      />
    );
  } else return <h2>Empty list</h2>;
};

export default GetCocktailById;
