import React, {useEffect, useState} from "react";
import axios from "axios";
import DisplayContent from "../cards/DisplayContent";


const GetCocktailsBySpirit = ({spiritName, handleCardClick}) => {
    const [drinkList, setDrinkList] = useState([]);

    useEffect(async () => {
        const response = await axios(
            `http://localhost:8080/by-spirit/${spiritName}`
        );
        const drinks = response.data;
        console.log(drinks);
        setDrinkList(drinks);
    }, [spiritName]);


    if (drinkList.length > 0) {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="column">
                        <h2 className="filter-header">{spiritName} Cocktails</h2>
                    </div>
                </div>
                <div className="three column row">
                    <DisplayContent cocktails={drinkList} handleCardClick={handleCardClick}/>
                </div>
            </React.Fragment>
        );
    } else return null;
};

export default GetCocktailsBySpirit;
