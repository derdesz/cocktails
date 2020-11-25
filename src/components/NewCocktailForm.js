import React, {useState} from 'react'

export default function NewCocktailForm() {
    const [ingredientList, setIngredientList] = useState([])
    let listCocktailIngredients = [];

    const addIngredient = ingredient => {
        listCocktailIngredients.push(ingredient);
        setIngredientList(listCocktailIngredients);
    }

    return (
        <div className="ui inverted segment">
            <div className="ui inverted form">
                <div className="field">
                    <div className="field">
                        <label>Cocktail Name</label>
                        <input placeholder="Cocktail Name" type="text"/>
                    </div>

                    <div class="inline field">
                        <div class="ui checkbox">
                        <input type="checkbox" tabindex="0" class="hidden"/>
                        <label>Alcoholic</label>
                        </div>
                    </div>

                    <div class="field">
                        <label>Instructions</label>
                        <textarea></textarea>
                    </div>
                </div>

                <div className="field">
                        <label>Ingredients</label>
                        <input placeholder="Please enter an ingredient with measure" type="text"/>
                </div>

                <button class="ui secondary button">
                    Add field
                </button>
            
                <div className="ui submit button">Submit</div>
            </div>
            </div>
    )
}
