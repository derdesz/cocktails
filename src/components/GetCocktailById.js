import React, { useEffect, useState } from "react";
import axios from "axios";
import DetailedCard from "./DetailedCard";

const GetCocktailById = ({ cocktailId }) => {
  const [cocktailName, setCocktailName] = useState("");
  const [instructions, setInstructions] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [category, setCategory] = useState("");

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
        console.log(cocktailName);
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
      />
    );
  } else return <h2>Empty list</h2>;
};

export default GetCocktailById;
