import React, { useEffect, useState } from "react";
import axios from "axios";
import DetailedCard from "./DetailedCard";

const GetCocktailById = ({ cocktailId }) => {
  const [cocktailName, setCocktailName] = useState("");
  const [instructions, setInstructions] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState([]);


  useEffect(() => {
    async function fetchCoctail() {
      try {
        const asyncResponse = await axios(
          `http://localhost:8080/${cocktailId}`
          );
          const cocktailDetails = asyncResponse.data.drinks[0];
          setCocktailName(cocktailDetails.strDrink);
          setInstructions(cocktailDetails.strInstructions);
          setImgSrc(cocktailDetails.strDrinkThumb);
          setCategory(cocktailDetails.strCategory);

          const ingredientList = [];
          const measureList = [];
          const recipe = [];
          
          Object.keys(cocktailDetails).forEach(key => {
            if (key.startsWith('strIngredient') && cocktailDetails[key]!== null){
              ingredientList.push(cocktailDetails[key]);
            }

            if (key.startsWith('strMeasure') && cocktailDetails[key]!== null){
              measureList.push(cocktailDetails[key]);
            }
          });

          for (let i = 0; i < ingredientList.length; i++) {
            recipe.push(measureList[i] + ingredientList[i]);
          }
          setIngredients(recipe);
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
