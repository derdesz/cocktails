import React, { useEffect, useState } from "react";
import axios from "axios";

const GetCocktailsBySpirit = ({ spiritName, getDrinkList }) => {
  const [drinkList, setDrinkList] = useState([]);

  useEffect(async () => {
    const response = await axios(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + spiritName
    );
    const drinks = response.data.drinks;
    setDrinkList(drinks);
  }, [spiritName]);



  if (drinkList !== undefined) {
    return drinkList.map((drink) => <div key={drink.idDrink}>{drink.strDrink}</div>);
  } else return null;
};

export default GetCocktailsBySpirit;
