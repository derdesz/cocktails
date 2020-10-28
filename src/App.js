import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import BySpirit from './components/BySpirit';
import RandomCocktail from './components/RandomCocktail';
import NavigationBar from "./components/NavigationBar.js";
import FilterByAlcoholic from "./components/FilterByAlcoholic";
import GetCocktailsBySpirit from "./components/GetCocktailsBySpirit";



function App() {
  const [spiritName, setSpiritName] = useState("");

  function clickOnSpirit (spiritName) {
    setSpiritName(spiritName);
  }

  const clickOnFilter = () => {
  }

  return (
    <Router>
      <div className="App">
        <NavigationBar/>
        <div className="spirit-list">
          <h2>spirit list:</h2>
          <BySpirit clickOnSpirit={clickOnSpirit}/>
          <div id="alc-filtered-cocktail-container">
            <Route path="/alcoholic" render={(props) => (<FilterByAlcoholic {...props} clickOnFilter={clickOnFilter} category="Alcoholic" />)}/>
            <Route path="/non-alcoholic" render={(props) => (<FilterByAlcoholic {...props} clickOnFilter={clickOnFilter} category="Non_Alcoholic" />)}/>
          </div>
        </div>
        <div className="three-random-cocktails">
          <h3>Random cocktails</h3>
          <RandomCocktail/>
          <RandomCocktail/>
          <RandomCocktail/>
        </div>
        <div className="cocktails-by-spirit">
          <GetCocktailsBySpirit spiritName={spiritName} />
        </div>

      </div>
    </Router>
  );
}

export default App;
