import React from 'react';



const DetailedCard = ({imgSrc, cocktailName, instructions, category}) => {
    console.log(cocktailName);

    return ( 
        
        <div class="ui card">
            <div class="ui slide masked reveal image">
                <img src={imgSrc} class="visible content"/>
                <div class="hidden content">{instructions}</div>
            </div>
            <div class="content">
                <a class="header">{cocktailName}</a>
                <div class="meta">
                    <span class="date">{category}</span>
                </div>
            </div>
        </div>
    );
}

export default DetailedCard;