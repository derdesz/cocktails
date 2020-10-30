import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayContent from './DisplayContent.js'


export default function FilterByAlcoholic({category, handleCardClick}) {
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=" + category).then((response) => {
            setCocktails(response.data.drinks);
          console.log(category + " loaded");
          console.log(response.data.drinks[0])
        });
      }, [category]);

    const categoryName = category.replace(/_/, ' ')
    return (
        <React.Fragment>
          <h2 className="filter-header">{categoryName} cocktails</h2>
          <div className="cocktail-container">
            <DisplayContent cocktails={cocktails} handleCardClick={handleCardClick}/>
          </div>
        </React.Fragment>
    )
}
