import React, {useEffect, useState} from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import DetailedCard from "../cards/DetailedCard";
import emptyCocktail from "../../new_cocktail.png"

const GetCocktailById = ({cocktailId}) => {
    const [cocktailName, setCocktailName] = useState("");
    const [instructions, setInstructions] = useState("");
    const [imgSrc, setImgSrc] = useState("");
    const [category, setCategory] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [liked, setLiked] = useState();
    const [cookies, setCookie] = useCookies(["email"]);

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
        
        // if user logged in, favoriteRequest is added to the requests array
        const requests = [cocktailRequest];
        if (cookies.email) { 
            requests.push(favoriteRequest)
        }
        // if(!cookies.email && requests.values.length > 1){
        //     requests.pop()
        // }
        console.log(requests)
        async function fetchCocktail() {
            try {
                await axios.all(requests)
                    .then(axios.spread((...responses) => {

                        const cocktailDetails = responses[0].data;
                        console.log(cocktailDetails)
                        setCocktailName(cocktailDetails.strDrink);
                        setInstructions(cocktailDetails.strInstructions);
                        setCategory(cocktailDetails.strCategory);
                        if (cocktailDetails.strDrinkThumb !== null) {
                            setImgSrc(cocktailDetails.strDrinkThumb)
                        } else {
                            setImgSrc(emptyCocktail)
                        }
                        setIngredients(cocktailDetails.allIngredients);
                        console.log(cookies)
                        // if user logged in, liked is set
                        if (cookies.email) {
                            const isFavoriteValue = responses[1].data;
                            setLiked(responses[1].data);
                            console.log("liked")
                            console.log(isFavoriteValue)
                            console.log(liked)
                        }
                    }, []))
            } catch (err) {
                console.error(err);
            };
        }
        fetchCocktail();
    }, [cocktailId, cookies, liked]);

    if (cocktailName !== null) {
        return (
            <DetailedCard
                imgSrc={imgSrc}
                cocktailName={cocktailName}
                instructions={instructions}
                category={category}
                ingredients={ingredients}
                cocktailId={cocktailId}
                liked={liked}
            />
        );
    } else return <h2>Empty list</h2>;
};

export default GetCocktailById;
