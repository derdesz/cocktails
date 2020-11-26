import React, {useState, useEffect} from 'react';
import emptyCocktail from "../new_cocktail.png"

export default function CocktailCard({cocktailName, imageSrc, cocktailId, handleCardClick}) {

    const [cocktailImage, setCocktailImage] = useState("")

    useEffect(() => {checkEmpty()}, [cocktailName])
    
    const checkEmpty = () => {
        if(imageSrc == null){
            setCocktailImage(emptyCocktail);
        } else {
            setCocktailImage(imageSrc)
        }
    } 

    return (
        
            <div className="four wide column">
                <div className="ui centered card" onClick={() => handleCardClick(cocktailId)}>
                        <div className="image">
                            <img src={cocktailImage}/>
                        </div>

                        <div className="content">
                            <div className="header">{cocktailName}</div>
                        </div>

                </div>
            </div>
    
    );

        

}

