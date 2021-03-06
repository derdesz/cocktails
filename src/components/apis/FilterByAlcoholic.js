import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DisplayContent from '../cards/DisplayContent.js'


export default function FilterByAlcoholic({category, handleCardClick}) {
    const [cocktails, setCocktails] = useState([]);

    useEffect(async () => {
        const response = await axios(
            `http://localhost:8080/filter/${category}`
        );
        setCocktails(response.data);

    }, [category]);

    const categoryName = category.replace(/_/, ' ')
    return (
        <React.Fragment>
            <div className="row">
                <div className="column">
                    <h2 className="filter-header">{categoryName} cocktails</h2>
                </div>
            </div>
            <div className="three column row">
                <DisplayContent cocktails={cocktails} handleCardClick={handleCardClick}/>
            </div>
        </React.Fragment>
    )
}
