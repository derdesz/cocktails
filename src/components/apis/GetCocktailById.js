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

        const cocktail = `http://localhost:8080/${cocktailId}`;
        const isFavorite = `http://localhost:8080/is-favorite/${cocktailId}`

        const cocktailRequest = axios({
            method: 'get',
            url: cocktail,
        });
        const favoriteRequest = axios({
            method: 'get',
            url: isFavorite,
            withCredentials: true
        });
        console.log(cocktailRequest)
        // console.log(favoriteRequest)


        async function fetchCocktail() {
            try {
                await axios.all([cocktailRequest, favoriteRequest])
                    .then(axios.spread((...responses) => {
                        const cocktailDetails = responses[0].data;
                        //const favorite = responses[1].data;

                        console.log(cocktailDetails)
                        //console.log(favorite)
                        setCocktailName(cocktailDetails.strDrink);
                        setInstructions(cocktailDetails.strInstructions);
                        setCategory(cocktailDetails.strCategory);
                        if (cocktailDetails.strDrinkThumb !== null) {
                            setImgSrc(cocktailDetails.strDrinkThumb)
                        } else {
                            setImgSrc(emptyCocktail)
                        }
                        setIngredients(cocktailDetails.allIngredients);
                    }, []))
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
