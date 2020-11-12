import React from 'react'
import CocktailCard from './CocktailCard.js';
import {Link} from 'react-router-dom';

export default function DisplayContent({cocktails, handleCardClick}) {
    return (
        cocktails.map((cocktail) => (
            <div key={cocktail.idDrink} className="filtered-cocktail">
                <Link to={"/cocktail/" + cocktail.idDrink} key={cocktail.idDrink}>
                    <CocktailCard handleCardClick={handleCardClick} cocktailId={cocktail.idDrink} cocktailName={cocktail.strDrink} imageSrc={cocktail.strDrinkThumb}/>
                </Link>
            </div>
            )
          )
    )
}
