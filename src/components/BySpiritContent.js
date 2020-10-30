import React from 'react'
import CocktailCard from './CocktailCard.js';
import {Link} from 'react-router-dom';

export default function BySpiritContent({cocktails, handleCardClick}) {
    return (
        cocktails.map((drink) => 
            <div className="cocktail-container">
                <div className ="cocktail-by-spirit">
                <Link to={"/" + drink.idDrink} key={drink.idDrink}>
                        <CocktailCard handleCardClick={handleCardClick} cocktailId={drink.idDrink} cocktailName={drink.strDrink} imageSrc={drink.strDrinkThumb}>{drink.strDrink}</CocktailCard>
                </Link>
                </div>
            </div>
        )
    )
}
