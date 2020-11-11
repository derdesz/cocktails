import React, {useState, useEffect} from "react";
import axios from "axios";



const GetSpirit = ({spiritDescriptionName}) => {
const [spiritDescription, setSpiritDescription] = useState("");


    useEffect(async () => {
        const response = await axios(
            "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=" + spiritDescriptionName
        );
        const ingredientDetails = response.data.ingredients[0];
        setSpiritDescription(ingredientDetails.strDescription)
        console.log(spiritDescription);
    }, [spiritDescriptionName]);



    if (spiritDescriptionName !== "") {
        return (
            <div className="ui raised segment" id="about-us-text">
                <h4 className="ui header">{spiritDescriptionName}</h4>
                <p id="about-text">{spiritDescription}</p>
            </div>
        );
    } else return <div></div>;
};

export default GetSpirit;