import React, {useState} from 'react'
import IngredientsTable from './IngredientsTable';

export default function NewCocktailForm() {
    const [ingredientList, setIngredientList] = useState([]);
    const [cocktailName, setCocktailName] = useState("");
    const [alcoholic, setAlcoholic] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [instructions, setInstructions] = useState("");
    const [currentIngredient, setCurrentIngredient] = useState("");

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

    const handleCurrentIngredientChange = (event) => {
        setCurrentIngredient(event.target.value);
        console.log(currentIngredient);
    }

    const addCurrentIngredient = (event) => {
        ingredientList.push(currentIngredient);
        setCurrentIngredient("");
    }

    const onDeleteClick = (index) => {
        console.log(index)
        ingredientList.splice(index, 1)
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
                    <IngredientsTable ingredients={ingredientList} onDeleteClick={onDeleteClick}/>
                    <input placeholder="Please enter an ingredient with measure" type="text"
                    value={currentIngredient}
                           onChange={handleCurrentIngredientChange}
                    />
                </div>

                <button className="ui secondary button" onClick={addCurrentIngredient}>
                    Add ingredient
                </button>

                <div className="ui submit button">Submit</div>
            </div>
        </div>
    )
}
