import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';

const RandomCocktail = () => {
  const [cocktailName, setCocktailName] = useState("");
  const [cocktailPicture, setCocktailPicture] = useState("");

  useEffect(() => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => {
          const randomDrinkArray = response.data.drinks;
        setCocktailName(randomDrinkArray[0].strDrink);
        setCocktailPicture(randomDrinkArray[0].strDrinkThumb);
      });
  }, []);

return (
  <div className="filtered-cocktail">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cocktailPicture} />
      <Card.Body>
        <Card.Title>{cocktailName}</Card.Title>
      </Card.Body>
    </Card>
  </div>
);
};

export default RandomCocktail;
