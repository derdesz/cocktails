import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {useCookies} from "react-cookie";

export default function Logout(handleLogout) {
    const [cookies, setCookie] = useCookies(["email"]);


    const logout = () => {
    axios.get("http://localhost:8080/logout");
        setCookie("email", "", {
            path: "/"
        });
  };

    if (cookies.email.length > 0) {
        return (
            <Link to="/logout">
                <button
                    className="ui inverted red basic button"
                    onClick={() => {
                        logout();
                    }}
                >
                    Logout
                </button>
            </Link>
        );
    } else {
        return(
            <div class="ui red message">You are logged out.</div>
        )

    };

}
