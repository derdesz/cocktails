import React from "react";
import Logout from "./Logout";

const IsLoggedIn = ({ isLoggedIn, handleLogout }) => {
  if (isLoggedIn.length > 0) {
    return (
      <React.Fragment>
        <p> You are logged in as: {isLoggedIn}</p>
        <Logout handleLogout={handleLogout} />
      </React.Fragment>
    );
  } else {
    return null;
  }
};

export default IsLoggedIn;
