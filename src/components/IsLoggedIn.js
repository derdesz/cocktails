import React from "react";

const IsLoggedIn = ({isLoggedIn, handleLogout}) => {

    if (isLoggedIn.length > 0) {
        return (
            <React.Fragment>
                <p> You are logged in as: {isLoggedIn}</p>
                <button className="ui inverted red basic button" onClick={() => handleLogout()}>Logout</button>
            </React.Fragment>
        )
    } else {
        return null
    }
}

export default IsLoggedIn;