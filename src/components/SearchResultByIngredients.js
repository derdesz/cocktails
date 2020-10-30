import React, { useEffect, useState } from "react";
import axios from 'axios';

import SearchResultContent from './SearchResultContent.js'

export function SearchResultByIngredients({searchField, handleCardClick}) {
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + Capitalize(searchField))
        .then((response) => {setCocktails(response.data.drinks);
        console.log(searchField + " loaded");
        });
      }, [searchField]);

    function  Capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
        }
    

    if(cocktails){
      return (
        <React.Fragment>
          <h2 className="filter-header">Search results in Cocktail Ingredients for "{searchField}"</h2>
          <div className="cocktail-container">
            <SearchResultContent cocktails={cocktails} handleCardClick={handleCardClick}/>
          </div>
        </React.Fragment>
      )
    } else {
      return <p id="search-notfound">No search result in Cocktail Ingredients for "{searchField}"</p>
    }

}

