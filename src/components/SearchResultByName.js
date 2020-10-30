import React, { useEffect, useState } from "react";
import axios from 'axios';
import DisplayContent from './DisplayContent.js'

export function SearchResultByName({searchField, handleCardClick}) {
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
        <React.Fragment>
          <h2 className="filter-header">Search results in Cocktail Names for "{searchField}"</h2>
          <div className="cocktail-container">
            <DisplayContent cocktails={cocktails} handleCardClick={handleCardClick}/>
          </div>
        </React.Fragment>
      )
    } else {
      return <p id="search-notfound">No search result in Cocktail Names for "{searchField}"</p>;
    }

}

