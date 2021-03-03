import React from "react";
import {useCookies} from "react-cookie";
import Nav from "react-bootstrap/Nav";

export default function AddCocktailLink () {
    const [cookies, setCookie] = useCookies(["email"]);

    if (cookies.email) {
        return <Nav.Link href="/add-cocktail">Add cocktail</Nav.Link>
    } else {
        return null;
    }
}