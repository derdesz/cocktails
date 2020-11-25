import React from 'react'
import IngredientsTableBody from './IngredientsTableBody'

export default function IngredientsTable({ingredients, onDeleteClick, onEditClick}) {


    return (
        <table class="ui unstackable inverted table">
            <thead>
                <tr>
                    <th>Ingredients</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                <IngredientsTableBody ingredients={ingredients} onDeleteClick={onDeleteClick} onEditClick={onEditClick}/>
            </tbody>
        </table>
    )
}
