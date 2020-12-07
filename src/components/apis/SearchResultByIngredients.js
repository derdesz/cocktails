import React, {useEffect, useState} from "react";
import axios from 'axios';

import DisplayContent from '../cards/DisplayContent.js'

export function SearchResultByIngredients({searchField, handleCardClick}) {
    const [cocktails, setCocktails] = useState([]);

    useEffect(async () => {
        const capitalizedSearchField = Capitalize(searchField);
        const response = await axios({
                url: `http://localhost:8080/search/ingredient/${capitalizedSearchField}`
            }
        );
        setCocktails(response.data);

    }, [searchField]);

    function Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }


    if (cocktails.length !== 0) {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="column">
                        <h2 className="filter-header">Search results in Cocktail Ingredients for "{searchField}"</h2>
                    </div>
                </div>
                <div className="three column row">
                    <DisplayContent cocktails={cocktails} handleCardClick={handleCardClick}/>
                </div>
            </React.Fragment>
        )
    } else {
        return <p id="search-notfound">No search result in Cocktail Ingredients for "{searchField}"</p>
    }

}

