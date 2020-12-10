import React from "react";
import Logout from "./Logout";

const IsLoggedIn = ({ isLoggedIn, handleLogout, successfulLogin }) => {
  if (successfulLogin === true) {
    return (
      <div id="logged-in-container">
        <p className="logged-in-text"> You are logged in as: {isLoggedIn}</p>
        <Logout handleLogout={handleLogout} />
      </div>
    );
  } else {
    return null;
  }
};

export default IsLoggedIn;
