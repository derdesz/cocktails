import React from 'react';
import RandomCocktail from '../apis/RandomCocktail';

const RandomCocktailContainer = () => {
    return (
        <div className="ui three column grid">
            <div className="column">
                <RandomCocktail/>
            </div>
            <div className="column">
                <RandomCocktail className="inner-div"/>
            </div>
            <div className="column">
                <RandomCocktail/>
            </div>
        </div>
    );
}

export default RandomCocktailContainer;