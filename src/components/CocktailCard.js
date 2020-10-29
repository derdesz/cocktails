import React from 'react';

export default function CocktailCard({cocktailName, imageSrc, cocktailId, handleCardClick}) {

    return (
        
            <div className="four wide column">
                <div className="ui centered card" onClick={() => handleCardClick(cocktailId)}>

                    <div className="image">
                        <img src={imageSrc}/>
                    </div>

                    <div className="content">
                        <div className="header">{cocktailName}</div>
                    </div>

                </div>
            </div>
    
    );

        

}

