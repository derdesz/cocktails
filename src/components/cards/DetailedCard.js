import React from 'react';
import Ingredients from './Ingredients';



const DetailedCard = ({imgSrc, cocktailName, instructions, category, ingredients, cocktailId}) => {
    
    let liked = false;
    const heartClick = event => {
        console.log("reached liked")
        liked = !liked; // toggle the like ( flipping the variable)
	
        // this is what we clicked on
        const target = event.currentTarget;
        
        if (liked) {
            // remove empty heart if liked and add the full heart
            target.classList.remove('far');
            target.classList.add('fas', 'pulse');
        } else {
            // remove full heart if unliked and add empty heart
            target.classList.remove('fas');
            target.classList.add('far');
            target.classList.remove('pulse');
        }
    }


    if(cocktailName !== "") {
        return ( 
        
            <div className="ui card">
                <div className="ui slide masked reveal image">
                    <img src={imgSrc} className="visible content"/>
                    <div className="hidden content scroller">
                    <i class="far fa-heart js-heart heart" data-cocktail-id={cocktailId} onClick={heartClick}></i> 

                        <h4>Ingredients:</h4>
                        <Ingredients ingredients={ingredients}/>  
                        <div className="ui horizontal divider"></div>
                        <h3>Instructions:</h3>
                        <div className="instruction-text">{instructions}</div>
                        
                    </div>
                </div>
                <div className="content">
                    <a className="header">{cocktailName}</a>
                    <div className="meta">
                        <span className="date">{category}</span>
                    </div>
                </div>
            </div>
        );
    } else return null;
    
}

export default DetailedCard;