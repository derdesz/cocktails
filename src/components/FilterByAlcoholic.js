import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

export default function FilterByAlcoholic() {
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic").then((response) => {
            setCocktails(response.data.drinks);
          console.log("Alcoholic loaded");
        });
      }, []);
    return (

        cocktails.map((cocktail) => (
            <div key={cocktail.idDrink} className="cocktail">
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
