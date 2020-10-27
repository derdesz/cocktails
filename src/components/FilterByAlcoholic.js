import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

export default function FilterByAlcoholic({category}) {
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=" + category).then((response) => {
            setCocktails(response.data.drinks);
          console.log(category + " loaded");
        });
      }, [category]);
    return (

        cocktails.map((cocktail) => (
            <div key={cocktail.idDrink} className="filtered-cocktail">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={cocktail.strDrinkThumb} />
                    <Card.Body>
                        <Card.Title>{cocktail.strDrink}</Card.Title>
                    </Card.Body>
                </Card>
            </div>
          )
        )
    )
}
