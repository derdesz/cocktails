import React, { useEffect, useState } from "react";
import axios from 'axios';
import CocktailCard from './CocktailCard.js';

export function SearchResultByIngredients({searchField}) {
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + Capitalize(searchField))
        .then((response) => {setCocktails(response.data.drinks);
        console.log(searchField + " loaded");
        });
      }, [searchField]);

    function  Capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
        }
    

    if(cocktails){
      return (
        cocktails.map((cocktail) => (
          <div key={cocktail.idDrink} className="filtered-cocktail">
              <CocktailCard  cocktailName={cocktail.strDrink} imageSrc={cocktail.strDrinkThumb} />
          </div>
          )
        )
      )
    } else {
      return null;
    }

}

