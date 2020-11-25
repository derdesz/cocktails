import React, {useState} from 'react'

export default function NewCocktailForm() {
    const [ingredientList, setIngredientList] = useState([]);
    const [cocktailName, setCocktailName] = useState("");
    const [alcoholic, setAlcoholic] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [instructions, setInstructions] = useState("");
    let listCocktailIngredients = [];

    const addIngredient = ingredient => {
        listCocktailIngredients.push(ingredient);
        setIngredientList(listCocktailIngredients);
    }

    const handleCocktailNameChange = (event) => {
        console.log(cocktailName);
        setCocktailName(event.target.value);
    }

    const handleAlcoholicCheckBox = (event) => {
        if(isActive) {
            setAlcoholic("Non Alcoholic");
            setIsActive(false);
        } else {
            setAlcoholic("Alcoholic");
            setIsActive(true);
        }
    }

    const handleInstructionsChange = (event) => {
        setInstructions(event.target.value);
        console.log(instructions);
    }

    return (
        <div className="ui inverted segment">
            <div className="ui inverted form">
                <div className="field">
                    <div className="field">
                        <label>Cocktail Name</label>
                        <input placeholder="Cocktail Name" type="text"
                               name="cocktail-name"
                               value={cocktailName}
                               onChange={handleCocktailNameChange}/>
                    </div>

                    <div className="inline field">
                        <div className="ui checkbox">
                            <input type="checkbox" tabindex="0"
                            value={alcoholic}
                                   onClick={handleAlcoholicCheckBox}
                            />
                            <label>Alcoholic</label>
                        </div>
                    </div>

                    <div className="field">
                        <label>Instructions</label>
                        <textarea value={instructions} onChange={handleInstructionsChange}></textarea>
                    </div>
                </div>

                <div className="field">
                    <label>Ingredients</label>
                    <input placeholder="Please enter an ingredient with measure" type="text"/>
                </div>

                <button className="ui secondary button">
                    Add ingredient
                </button>

                <div className="ui submit button">Submit</div>
            </div>
        </div>
    )
}
