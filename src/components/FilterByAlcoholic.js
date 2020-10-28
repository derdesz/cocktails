import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CocktailCard from './CocktailCard';


export default function FilterByAlcoholic({category}) {
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=" + category).then((response) => {
            setCocktails(response.data.drinks);
          console.log(category + " loaded");
          console.log(response.data.drinks[0])
        });
      }, [category]);
    return (

        cocktails.map((cocktail) => (
            <div key={cocktail.idDrink} className="filtered-cocktail">
                <CocktailCard  cocktailName={cocktail.strDrink} imageSrc={cocktail.strDrinkThumb} />
            </div>
          )
        )
    )
}
