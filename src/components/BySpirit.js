import React from "react";
import {Link} from "react-router-dom";

export default function(props){


  return (
    <div className="ui segment">
      <div className="ui horizontal list">
        <div className="item">
          <Link className="content" to="/by-spirit/Vodka" onClick={() => {props.clickOnSpirit("Vodka")}}>Vodka Cocktails</Link>
        </div>
        <div className="item">
          <Link className="content" to="/by-spirit/Gin" onClick={() => props.clickOnSpirit("Gin")}>Gin Cocktails</Link>
        </div> 
        <div className="item">
          <Link className="content" to="/by-spirit/Rum" onClick={() => props.clickOnSpirit("Rum")}>Rum Cocktails</Link>
        </div>
        <div className="item"> 
          <Link className="content" to="/by-spirit/Tequila" onClick={() => props.clickOnSpirit("Tequila")}>Tequila Cocktails</Link>
        </div>
        <div className="item">
          <Link className="content" to="/by-spirit/Scotch" onClick={() => props.clickOnSpirit("Scotch")}>Scotch Cocktails</Link>
        </div>
      </div>
      
    </div>
  );
};

