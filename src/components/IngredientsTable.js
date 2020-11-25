import React from 'react'
import IngredientsTableBody from './IngredientsTableBody'

export default function IngredientsTable({ingredients}) {


    return (
        <table class="ui unstackable inverted table">
            <thead>
                <tr>
                    <th>Ingredients</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <IngredientsTableBody ingredients={ingredients}/>               
            </tbody>
        </table>
    )
}
