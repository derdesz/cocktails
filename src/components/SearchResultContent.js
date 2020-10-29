import React from 'react'
import CocktailCard from './CocktailCard.js';

export default function SearchResultContent({cocktails}) {
    return (
        cocktails.map((cocktail) => (
            <div key={cocktail.idDrink} className="filtered-cocktail">
                <CocktailCard  cocktailName={cocktail.strDrink} imageSrc={cocktail.strDrinkThumb} />
            </div>
            )
          )
    )
}
