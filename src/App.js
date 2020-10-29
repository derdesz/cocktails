import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import BySpirit from './components/BySpirit';
import RandomCocktail from './components/RandomCocktail';
import NavigationBar from "./components/NavigationBar.js";
import FilterByAlcoholic from "./components/FilterByAlcoholic";
import GetCocktailsBySpirit from "./components/GetCocktailsBySpirit";
import GetCocktailById from './components/GetCocktailById';

import { SearchResultByIngredients } from "./components/SearchResultByIngredients.js";
import { SearchResultByName } from "./components/SearchResultByName.js";


function App() {
  const [spiritName, setSpiritName] = useState("");
  const [currentId, setCurrentId] = useState("");
  const [searchField, setSearchField] = useState(new URLSearchParams(window.location.search).get("search-field") || "by Name or Ingredient");
  const searchRef = useRef();

  function clickOnSpirit (spiritName) {
    console.log("Clicked");
    setSpiritName(spiritName);
  }

  const clickOnFilter = () => {
  }

  const handleCardClick = (id) => {
    setCurrentId(id);
    console.log("clicked on card");
  }

  function getSearchResult(event){
    // prevent form submit
    // event.preventDefault();
    const fieldValue = searchRef.current.value;
    setSearchField(fieldValue);
    console.log("Current " + fieldValue);
  }


  return (
    <Router>
      <div className="App">
        <NavigationBar getSearchResult={getSearchResult} searchField={searchField} forwardedRef={searchRef}/>
	      <div className="spirit-list">
          <h2>spirit list:</h2>
          <BySpirit clickOnSpirit={clickOnSpirit}/>
          <div className="ui grid container">
            <RandomCocktail handleCardClick={handleCardClick}/>
            <RandomCocktail handleCardClick={handleCardClick}/>
            <RandomCocktail handleCardClick={handleCardClick}/>
          </div>
          <div className="cocktail-container">
            <Route path="/alcoholic" render={(props) => (<FilterByAlcoholic {...props} clickOnFilter={clickOnFilter} category="Alcoholic" />)}/>
            <Route path="/non-alcoholic" render={(props) => (<FilterByAlcoholic {...props} clickOnFilter={clickOnFilter} category="Non_Alcoholic" />)}/>

            <Route path="/search" render={() => (<SearchResultByName searchField={searchField}/>)}/>
            <Route path="/search" render={() => (<SearchResultByIngredients searchField={searchField}/>)}/>

            <Route path={"/by-spirit/" + spiritName} render={(props) => (<GetCocktailsBySpirit {...props} spiritName={spiritName} handleCardClick={handleCardClick}/>)}/>
          </div>
          <div id="single-item">
            <Route path={"/" + currentId} render={(props) => (<GetCocktailById {...props} cocktailId={currentId} />)}/>
          </div>
        </div>
        
      
        
         

      </div>
      </Router>
    );
    }

export default App;
