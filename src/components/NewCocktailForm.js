import React, {useState} from 'react'
import IngredientsTable from './IngredientsTable';

export default function NewCocktailForm() {
    const [ingredientList, setIngredientList] = useState([]);
    const [cocktailName, setCocktailName] = useState("");
    const [alcoholic, setAlcoholic] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [instructions, setInstructions] = useState("");
    const [currentIngredient, setCurrentIngredient] = useState("");
    const [needsResload, setNeedsReload] = useState(true);

    const handleCocktailNameChange = (event) => {
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
    }

    const handleCurrentIngredientChange = (event) => {
        setCurrentIngredient(event.target.value);
    }

    const addCurrentIngredient = (event) => {
        ingredientList.push(currentIngredient);
        setCurrentIngredient("");
    }

    const onDeleteClick = (index) => {
        console.log(index)
        ingredientList.splice(index, 1);
        needsResload ? setNeedsReload(false) : setNeedsReload(true);

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
                            <label>This is an alcoholic cocktail</label>
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
                        <button className="ui inverted red basic button" onClick={addCurrentIngredient}>
                            Add
                        </button>
                    </div>
                </div>


                <div className="ui submit button">Submit</div>
            </div>
        </div>
    )
}
