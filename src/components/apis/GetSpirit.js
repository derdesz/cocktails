import React, {useState, useEffect} from "react";
import axios from "axios";
import { SpiritImage } from "../cards/SpiritImage";




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
                <div class="ui left internal rail">
                    <div class="ui segment" id="rail-box">
                        <SpiritImage spirit={spiritDescriptionName} number="1"/>
                    </div>
                </div>
                <div class="ui right internal rail">
                    <div class="ui segment" id="rail-box">
                        <SpiritImage spirit={spiritDescriptionName} number="2"/>
                    </div>
                </div>
            
                <div className="ui raised segment" id="description-text">
                    <h4 className="ui header">{spiritDescriptionName}</h4>
                    <p id="about-text">{spiritDescription}</p>
                </div>
            </React.Fragment>
        );
    } else return <div></div>;
};

export default GetSpirit;