import React from 'react'

export default function IngredientsTableBody({ingredients}) {
    return (
        ingredients.map((ingredient) => (
            <tr>
                <td>{ingredient}</td>
                {/* <td><FontAwesomeIcon icon={["far", "trash-alt"]}/></td>
                <td><FontAwesomeIcon icon={["far", "edit"]}/></td> */}
            </tr>
        ))
    )
}
