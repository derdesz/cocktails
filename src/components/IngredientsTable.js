import React from 'react'
import IngredientsTableBody from './IngredientsTableBody'

export default function IngredientsTable({ingredients, onDeleteClick, onEditClick}) {


    return (
        <table class="ui unstackable inverted table hidden" id="ingredients-table">
            <thead>
                <tr>
                    <th>List of ingredients with measurements</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <IngredientsTableBody ingredients={ingredients} onDeleteClick={onDeleteClick} onEditClick={onEditClick}/>
            </tbody>
        </table>
    )
}
