import React, {useState} from 'react'

export default function IngredientsTableBody({ingredients, onDeleteClick}) {
    // const [index, setIndex] = useState(0);
    //
    //  function incrementIndex () {
    //     setIndex(2);
    //     console.log(index);
    // }

    return (
        ingredients.map((ingredient, index) => (
            <tr key={index} id={index}>
                <td>{ingredient}</td>
                <td><i className="edit outline icon"/></td>
                <td><i className="trash alternate outline icon" onClick={() => onDeleteClick(index)}/></td>
            </tr>
        ))
    )
}
