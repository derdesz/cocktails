import React, {useEffect, useState} from "react";
import axios from "axios";
import DetailedCard from "../cards/DetailedCard";
import emptyCocktail from "../../new_cocktail.png"

const GetCocktailById = ({cocktailId}) => {
    const [cocktailName, setCocktailName] = useState("");
    const [instructions, setInstructions] = useState("");
    const [imgSrc, setImgSrc] = useState("");
    const [category, setCategory] = useState("");
    const [ingredients, setIngredients] = useState([]);


    useEffect(() => {
        async function fetchCocktail() {
            try {
                const asyncResponse = await axios(
                    `http://localhost:8080/${cocktailId}`
                );
                const cocktailDetails = asyncResponse.data;
                const recipe = [];
                setCocktailName(cocktailDetails.strDrink);
                setInstructions(cocktailDetails.strInstructions);
                setCategory(cocktailDetails.strCategory);
                if (cocktailDetails.strDrinkThumb !== null) {                    
                    setImgSrc(cocktailDetails.strDrinkThumb)
                }
                else {
                    setImgSrc(emptyCocktail)
                }
                setIngredients(cocktailDetails.allIngredients);
                
            } catch (err) {
                console.error(err);
            }
        }

        fetchCocktail();
    }, [cocktailId]);

    if (cocktailName !== null) {
        return (
            <DetailedCard
                imgSrc={imgSrc}
                cocktailName={cocktailName}
                instructions={instructions}
                category={category}
                ingredients={ingredients}
                cocktailId={cocktailId}
            />
        );
    } else return <h2>Empty list</h2>;
};

export default GetCocktailById;
