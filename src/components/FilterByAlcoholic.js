import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilterContent from './FilterContent.js'


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
        <React.Fragment>
          <h2>{category} cocktails</h2>
          <div className="cocktail-container">
            <FilterContent cocktails={cocktails}/>
          </div>
        </React.Fragment>
    )
}
