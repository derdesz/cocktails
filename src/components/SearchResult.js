import React, { useEffect, useState } from "react";
import axios from 'axios';

export function SearchResult({searchField}) {
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + searchField)
        .then((response) => {setCocktails(response.data.drinks);
        console.log(searchField + " loaded");
        });
      }, [searchField]);

    return (
        <div>
            <p>Cocktail with {searchField}</p>
        </div>
    )
}

