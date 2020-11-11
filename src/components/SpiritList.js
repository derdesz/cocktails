import React from "react";
import {Link} from "react-router-dom";

export default function(props){


    return (
        <div>
            <div className="ui segment">
                <div className="ui horizontal list">
                    <div className="item">
                        <Link className="content" to="/spirits/Vodka" onClick={() => {props.clickOnSpiritNameForDescription("Vodka")}}>Vodka</Link>
                        <span className="line">|</span>
                    </div>
                    <div className="item">
                        <Link className="content" to="/spirits/Gin" onClick={() => props.clickOnSpiritNameForDescription("Gin")}>Gin</Link>
                        <span className="line">|</span>
                    </div>
                    <div className="item">
                        <Link className="content" to="/spirits/Rum" onClick={() => props.clickOnSpiritNameForDescription("Rum")}>Rum</Link>
                        <span className="line">|</span>
                    </div>
                    <div className="item">
                        <Link className="content" to="/spirits/Tequila" onClick={() => props.clickOnSpiritNameForDescription("Tequila")}>Tequila</Link>
                        <span className="line">|</span>
                    </div>
                    <div className="item">
                        <Link className="content" to="/spirits/Whiskey" onClick={() => props.clickOnSpiritNameForDescription("Whiskey")}>Whiskey</Link>
                        <span className="line">|</span>
                    </div>
                    <div className="item">
                        <Link className="content" to="/spirits/Amaretto" onClick={() => props.clickOnSpiritNameForDescription("Amaretto")}>Amaretto</Link>
                        <span className="line">|</span>
                    </div>
                    <div className="item">
                        <Link className="content" to="/spirits/Cognac" onClick={() => props.clickOnSpiritNameForDescription("Cognac")}>Cognac</Link>
                        <span className="line">|</span>
                    </div>
                    <div className="item">
                        <Link className="content" to="/spirits/Baileys" onClick={() => props.clickOnSpiritNameForDescription("Baileys")}>Baileys</Link>
                        <span className="line">|</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

