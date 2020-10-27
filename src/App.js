import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import BySpirit from './components/BySpirit';
import RandomCocktail from './components/RandomCocktail';
import NavigationBar from "./components/NavigationBar.js";
import FilterByAlcoholic from "./components/FilterByAlcoholic";


function App() {


  function clickOnSpirit (spiritName) {
    console.log(spiritName);
  }

  const clickOnFilter = () => {
  }

  return (
    <Router>
      <div className="App">
        <NavigationBar/>
        <div className="spirit-list">
          <BySpirit clickOnSpirit={clickOnSpirit}/>
          <div id="alc-filtered-cocktail-container">
            <Route path="/alcoholic" render={(props) => (<FilterByAlcoholic {...props} clickOnFilter={clickOnFilter} category="Alcoholic" />)}/>
            <Route path="/non-alcoholic" render={(props) => (<FilterByAlcoholic {...props} clickOnFilter={clickOnFilter} category="Non_Alcoholic" />)}/>
          </div>
        </div>
        <div className="three-random-cocktails">
          <RandomCocktail/>
          <RandomCocktail/>
          <RandomCocktail/>
        </div>

      </div>
    </Router>
  );
}

export default App;
