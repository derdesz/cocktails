import React from 'react';
import Ingredients from './Ingredients';



const DetailedCard = ({imgSrc, cocktailName, instructions, category, ingredients}) => {
    if(cocktailName !== "") {
        return ( 
        
            <div class="ui card">
                <div class="ui slide masked reveal image">
                    <img src={imgSrc} class="visible content"/>
                    <div class="hidden content scroller">
                    
                        <h4>Ingredients:</h4>
                        <Ingredients ingredients={ingredients}/>  
                        <div class="ui horizontal divider"></div> 
                        <h3>Instructions:</h3>
                        <div className="instruction-text">{instructions}</div>
                        
                    </div>
                </div>
                <div class="content">
                    <a class="header">{cocktailName}</a>
                    <div class="meta">
                        <span class="date">{category}</span>
                    </div>
                </div>
            </div>
        );
    } else return null;
    
}

export default DetailedCard;