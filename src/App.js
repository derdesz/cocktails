import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import BySpirit from './components/BySpirit';
import RandomCocktail from './components/RandomCocktail';
import NavigationBar from "./components/NavigationBar.js";
import FilterByAlcoholic from "./components/FilterByAlcoholic";
import GetCocktailsBySpirit from "./components/GetCocktailsBySpirit";
import { SearchResult } from "./components/SearchResult.js";


function App() {
  const [spiritName, setSpiritName] = useState("");
  const [currentSearchResult, setCurrentSearchResult] = useState("");
  const [searchField, setSearchField] = useState("by Name or Ingredient")

  function clickOnSpirit (spiritName) {
    setSpiritName(spiritName);
  }

  const clickOnFilter = () => {
  }

  function getSearchresult(event){
    console.log("Current " + searchField);
  }

  function handleChange(event){
    setSearchField(event.target.value)
    console.log("On change " + searchField)
}

  return (
    <Router>
      <div className="App">
        <NavigationBar getSearchresult={getSearchresult} searchField={searchField} handleChange={handleChange}/>
        <div className="spirit-list">
          <h2>spirit list:</h2>
          <BySpirit clickOnSpirit={clickOnSpirit}/>
          <div className="cocktail-container">
            <Route path="/alcoholic" render={(props) => (<FilterByAlcoholic {...props} clickOnFilter={clickOnFilter} category="Alcoholic" />)}/>
            <Route path="/non-alcoholic" render={(props) => (<FilterByAlcoholic {...props} clickOnFilter={clickOnFilter} category="Non_Alcoholic" />)}/>

            <Route path="/search" render={() => (<SearchResult searchField={searchField}/>)}/>
          </div>
        </div>
        <h2>Our offer: </h2>
        <div className="cocktail-container">
          <RandomCocktail />
          <RandomCocktail />
          <RandomCocktail />
        </div>
        <div className="cocktails-by-spirit">
          <GetCocktailsBySpirit spiritName={spiritName} />
        </div>

      </div>
    </Router>
  );
}

export default App;
