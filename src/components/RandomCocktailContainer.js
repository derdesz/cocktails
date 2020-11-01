import React from 'react';
import RandomCocktail from './RandomCocktail';

const RandomCocktailContainer = () => {
    return (
        <div id="random-cocktail-container" className="ui grid container">
            <RandomCocktail/>
            <RandomCocktail/>
            <RandomCocktail/>
        </div>
    );
}

export default RandomCocktailContainer;