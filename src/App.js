import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import BySpirit from './components/BySpirit';
import RandomCocktail from './components/RandomCocktail';
import NavigationBar from "./components/NavigationBar.js";


function App() {


  function clickOnSpirit (spiritName) {
    console.log(spiritName);
  }


  return (
    <Router>
      <div className="App">
        <NavigationBar/>
        <div className="spirit-list">
          <h3>Spirit list:</h3>
          <BySpirit clickOnSpirit={clickOnSpirit}/>
        </div>
        <div className="three-random-cocktails">
          <h3>Random cocktails</h3>
          <RandomCocktail/>
          <RandomCocktail/>
          <RandomCocktail/>
        </div>

      </div>
    </Router>
  );
}

export default App;
