import React, {useEffect, useState} from "react";
import axios from "axios";
import DetailedCard from "./DetailedCard";
import emptyCocktail from "../new_cocktail.png"

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
                if (cocktailDetails.strIngredient1 !== null) {
                    const ingredientList = [];
                    const measureList = [];
                    
                    setImgSrc(cocktailDetails.strDrinkThumb);

                    Object.keys(cocktailDetails).forEach(key => {
                        if (key.startsWith('strIngredient') && cocktailDetails[key] !== null) {
                            ingredientList.push(cocktailDetails[key]);
                        }

                        if (key.startsWith('strMeasure') && cocktailDetails[key] !== null) {
                            measureList.push(cocktailDetails[key]);
                        }
                    });

                    for (let i = 0; i < ingredientList.length; i++) {
                        recipe.push(measureList[i] + ingredientList[i]);
                    }

                }
                else {
                    recipe.push(cocktailDetails.allIngredients);
                    setImgSrc(emptyCocktail)
                }
                setIngredients(recipe);
                
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
            />
        );
    } else return <h2>Empty list</h2>;
};

export default GetCocktailById;
