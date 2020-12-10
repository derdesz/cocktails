import React from "react";
import Logout from "./Logout";
import { useCookies } from "react-cookie";

const IsLoggedIn = () => {
    const [cookies, setCookie] = useCookies(["email"]);

    if (cookies.email.length > 0) {
        return (
            <div id="logged-in-container">
                <p className="logged-in-text"> You are logged in as: {cookies.email}</p>
                <Logout/>
            </div>
        );
    } else {
        return null;
    }
};

export default IsLoggedIn;
