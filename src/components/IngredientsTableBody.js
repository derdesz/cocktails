import React from 'react'

export default function IngredientsTableBody({ingredients, onDeleteClick, onEditClick}) {

    return (
        ingredients.map((ingredient, index) => (
            <tr key={index} id={index}>
                <td>{ingredient}</td>
                <td><i className="trash alternate outline icon" onClick={() => onDeleteClick(index)}/></td>
                <td><i className="edit outline icon" onClick={() => onEditClick(index)}/></td>
            </tr>
        ))
    )
}
