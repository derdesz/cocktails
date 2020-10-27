import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function FilterByAlcoholic() {
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic").then((response) => {
            setCocktails(response.data.drinks);
          console.log("Alcoholic loaded");
        });
      }, []);
    return (
    )
}
