import React from 'react'

export default function IngredientsTableBody({ingredients}) {
    return (
        ingredients.map((ingredient) => (
            <tr>
                <td>{ingredient}</td>
                <td><i class="trash alternate outline icon"></i></td>
                <td><i class="edit outline icon"></i></td>
            </tr>
        ))
    )
}
