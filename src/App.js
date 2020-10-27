import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import BySpirit from './components/BySpirit';
import RandomCocktail from './components/RandomCocktail';
import { Link } from "react-router-dom";
import NavigationBar from "./components/NavigationBar.js";
import FilterByAlcoholic from "./components/FilterByAlcoholic";


function App() {


  function clickOnSpirit (spiritName) {
    console.log(spiritName);
  }


  return (
    <Router>
      <div className="App">
        <NavigationBar/>
        <div className="spirit-list">
          <BySpirit clickOnSpirit={clickOnSpirit}/>
          <FilterByAlcoholic/>
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
