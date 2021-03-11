import React from 'react';
import Ingredients from './Ingredients';
import axios from 'axios';
import Heart from "../Heart";


const DetailedCard = ({imgSrc, cocktailName, instructions, category, ingredients, cocktailId, liked}) => {

    if (cocktailName !== "") {
        return (

            <div className="ui card">
                <div className="ui slide masked reveal image">
                    <img src={imgSrc} className="visible content"/>
                    <div className="hidden content scroller">
                        <Heart cocktailId={cocktailId} liked={liked}/>
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
