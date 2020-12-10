import React, {useState, useEffect} from 'react'
import axios from "axios";
import DisplayContent from "../cards/DisplayContent";

export default function FavoriteCocktails({handleCardClick}) {
    const [cocktails, setCocktails] = useState([]);

    useEffect(async () => {
        const response = await axios({
            method: 'get',
            url: "http://localhost:8080/favorites/",
            withCredentials: true
        });
        const cocktails = response.data;
        console.log(cocktails);
        setCocktails(cocktails);
    }, []);

    if (cocktails.length > 0){
    return (
        <React.Fragment>
            <div className="row">
                <div className="column">
                    <h2 className="filter-header">My favorite cocktails</h2>
                </div>
            </div>
            <div className="three column row">
                <DisplayContent cocktails={cocktails} handleCardClick={handleCardClick}/>
            </div>
        </React.Fragment>
        
    )} else {
        return null;
    }
}
