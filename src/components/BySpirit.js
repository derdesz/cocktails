import React, { useEffect, useState } from "react";

const BySpirit = (props) => {


  return (
    <div className="list-of-spirits">
      <ul style={{ listStyleType: "none" }}>
        <li onClick={() => props.clickOnSpirit("vodka")}>
          Vodka Cocktails
        </li>
        <li onClick={() => props.clickOnSpirit("gin")}>Gin Cocktails</li>
        <li onClick={() => props.clickOnSpirit("rum")}>Rum Cocktails</li>
        <li onClick={() => props.clickOnSpirit("tequila")}>Tequila Cocktails</li>
        <li onClick={() => props.clickOnSpirit("scotch")}>Scotch Cocktails</li>
      </ul>
    </div>
  );
};

export default BySpirit;
