import React from "react";
import {Link} from "react-router-dom";
import RandomCocktailContainer from "./RandomCocktailContainer";

export default function(props){


  return (
    <div>
      <div className="ui segment">
        <div className="ui horizontal list">
          <div className="item">
            <Link className="content" to="/by-spirit/Vodka" onClick={() => {props.clickOnSpirit("Vodka")}}>Vodka Cocktails</Link>
            <span className="line">|</span>
          </div>
          <div className="item">
            <Link className="content" to="/by-spirit/Gin" onClick={() => props.clickOnSpirit("Gin")}>Gin Cocktails</Link>
            <span className="line">|</span>
          </div> 
          <div className="item">
            <Link className="content" to="/by-spirit/Rum" onClick={() => props.clickOnSpirit("Rum")}>Rum Cocktails</Link>
            <span className="line">|</span>
          </div>
          <div className="item"> 
            <Link className="content" to="/by-spirit/Tequila" onClick={() => props.clickOnSpirit("Tequila")}>Tequila Cocktails</Link>
            <span className="line">|</span>
          </div>
          <div className="item">
            <Link className="content" to="/by-spirit/Scotch" onClick={() => props.clickOnSpirit("Scotch")}>Scotch Cocktails</Link>
          </div>
        </div>
      </div>
      <div className="hold-random-cocktail-container">
        <RandomCocktailContainer/>
      </div>
    </div>
  );
};

