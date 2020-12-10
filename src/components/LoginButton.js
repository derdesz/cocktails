import React from "react";
import Nav from "react-bootstrap/Nav";
import {useCookies} from "react-cookie";

export default function LoginButton () {
    const [cookies, setCookie] = useCookies(["email"]);

    if(cookies.email.length > 0) {
        return null;
    } else {
        return <Nav.Link href="/login">Log in</Nav.Link>
    }

}