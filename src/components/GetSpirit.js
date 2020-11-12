import React, {useState, useEffect} from "react";
import axios from "axios";
import { SpiritImage } from "./SpiritImage";




const GetSpirit = ({spiritDescriptionName}) => {
const [spiritDescription, setSpiritDescription] = useState("");


    useEffect(async () => {
        const response = await axios({
            url: `http://localhost:8080/spirits/name/${spiritDescriptionName}` 
           });
           console.log("GetSpirit")
        const ingredientDetails = response.data.ingredients[0];
        setSpiritDescription(ingredientDetails.strDescription)
        
    }, [spiritDescriptionName]);

    console.log(spiritDescription);

    if (spiritDescriptionName !== "") {
        return (
            <React.Fragment>
                <SpiritImage spirit={spiritDescriptionName + 1} number="1"/>

                <div className="ui raised segment" id="description-text">
                    <h4 className="ui header">{spiritDescriptionName}</h4>
                    <p id="about-text">{spiritDescription}</p>
                </div>

                <SpiritImage spirit={spiritDescriptionName + 2} number="2"/>
            </React.Fragment>
        );
    } else return <div></div>;
};

export default GetSpirit;