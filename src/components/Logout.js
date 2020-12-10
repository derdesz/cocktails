import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Logout(handleLogout) {
  const logout = () => {
    axios.post("http://localhost:8080/logout");
  };

  return (
    <Link to="/logout">
      <button
        className="ui inverted red basic button"
        onClick={() => {
          handleLogout();
          logout();
        }}
      >
        Logout
      </button>
    </Link>
  );
}
