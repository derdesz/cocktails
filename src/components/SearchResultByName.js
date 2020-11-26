import React, { useEffect, useState } from "react";
import axios from 'axios';
import DisplayContent from './DisplayContent.js'

export function SearchResultByName({searchField, handleCardClick}) {
    const [cocktails, setCocktails] = useState([]);

    useEffect(async () => {
      const capitalizedSearchField = Capitalize(searchField);
      const response = await axios({
          url: `http://localhost:8080/search/name/${capitalizedSearchField}`}
      );
      setCocktails(response.data);
      // console.log(response);
      }, [searchField]);

    function  Capitalize(str){
      return str.charAt(0).toUpperCase() + str.slice(1);
      }
    



    if(cocktails.length !== 0){
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

