import React from "react";
import Nav from "react-bootstrap/Nav";
import { useCookies } from "react-cookie";

export default function LoginButton() {
    const [cookies, setCookie] = useCookies(["email"]);

    if(cookies.email) {
        return null;
    } else {
        return <Nav.Link className="ui inverted red basic button" id="login-link" href="/login">Log in</Nav.Link>
    }
}
