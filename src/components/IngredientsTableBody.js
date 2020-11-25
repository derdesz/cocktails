import React from 'react'

export default function IngredientsTableBody({ingredients, onDeleteClick}) {
    
    return (
        ingredients.map((ingredient, index) => (
            <tr>
                <td>{ingredient}</td>
                <td><i class="trash alternate outline icon" onClick={()=>onDeleteClick(index)}></i></td>
                <td><i class="edit outline icon"></i></td>
            </tr>
        ))
    )
}
