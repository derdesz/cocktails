import React from 'react';

const Ingredients = ({ingredients}) => {
    return ingredients.map((ingredient) => (
    <li style={{ listStyleType: "none" }}>{ingredient}</li>
    ))
}

export default Ingredients;