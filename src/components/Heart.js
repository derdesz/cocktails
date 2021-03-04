import React from "react";
import {useCookies} from "react-cookie";
import axios from "axios";

const Heart = ({cocktailId, liked}) => {
    const [cookies, setCookie] = useCookies(["email"]);

    // let liked = false;
    const heartClick = event => {
        console.log("reached liked")
        liked = !liked; // toggle the like ( flipping the variable)
        // this is what we clicked on
        const target = event.currentTarget;
        changeHeart(liked, target);

        axios({
            method: 'post',
            url: `http://localhost:8080/favorites/${cocktailId}`,
            withCredentials: true
        }, [])
    }

    const changeHeart = (liked, target) => {
        if (liked) {
            // remove empty heart if liked and add the full heart
            target.classList.remove('far');
            target.classList.add('fas', 'pulse');
        } else {
            // remove full heart if unliked and add empty heart
            target.classList.remove('fas');
            target.classList.add('far');
            target.classList.remove('pulse');
        }
    }

    if (cookies.email) {
        return <i className="far fa-heart js-heart heart" data-cocktail-id={cocktailId} onClick={heartClick}/>
    } else {
        return null;
    }
}

export default Heart;
