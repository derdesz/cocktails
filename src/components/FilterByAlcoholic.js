import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayContent from './DisplayContent.js'


export default function FilterByAlcoholic({category, handleCardClick}) {
    const [cocktails, setCocktails] = useState([]);

    useEffect(async () => {
        const response = await axios(
          `http://localhost:8080/filter/${category}`
          );
          setCocktails(response.data.drinks);
          
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
