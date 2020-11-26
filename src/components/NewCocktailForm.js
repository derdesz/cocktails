import React, {useState} from 'react'
import IngredientsTable from './IngredientsTable';
import axios from 'axios';

export default function NewCocktailForm() {
    const [ingredientList, setIngredientList] = useState([]);
    const [cocktailName, setCocktailName] = useState("");
    const [alcoholic, setAlcoholic] = useState("Non Alcoholic");
    const [isActive, setIsActive] = useState(false);
    const [instructions, setInstructions] = useState("");
    const [currentIngredient, setCurrentIngredient] = useState("");
    const [needsReload, setNeedsReload] = useState(true);

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
        // console.log(index)
        ingredientList.splice(index, 1);
        needsReload ? setNeedsReload(false) : setNeedsReload(true);

    }

    const onEditClick = (index) => {
        // console.log(ingredientList[index]);
        setCurrentIngredient(ingredientList[index]);
        ingredientList.splice(index, 1);
    }

    const clickOnSubmit = () => {
        const newCocktail = {
            strDrink: cocktailName,
            strAlcoholic: alcoholic,
            strInstructions: instructions,
            allIngredients: ingredientList
        };
        // console.log(newCocktail);
        axios.post("http://localhost:8080/save-new-cocktail", newCocktail);
        setCocktailName("");
        setAlcoholic("Non Alcoholic");
        setInstructions("");
        setIngredientList([]);

        alert("Cocktail saved successfully!");

    }
    
    return (
        <div className="ui inverted segment" id="new-cocktail-form">
            <div className="ui inverted form">
                <div className="field">
                    <div className="field">
                        <label className="form-label">Cocktail Name</label>
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
                        <label className="form-label">Instructions</label>
                        <textarea rows="2" value={instructions} onChange={handleInstructionsChange}></textarea>
                    </div>
               

                <div className="field">
                    <label className="form-label">Ingredients</label>

                    <IngredientsTable ingredients={ingredientList} onDeleteClick={onDeleteClick} onEditClick={onEditClick}/>
                    <div id="ingredient-input">
                        <input id="new-ingredient-text" placeholder="Please enter an ingredient with measurements" type="text"
                        value={currentIngredient}
                            onChange={handleCurrentIngredientChange}
                        />
                        <button className="ui inverted red basic button" onClick={addCurrentIngredient}>
                            Add
                        </button>
                    </div>
                </div>
                </div>

                <div className="ui submit button" onClick={clickOnSubmit}>Submit</div>
            </div>
        </div>
    )
}
