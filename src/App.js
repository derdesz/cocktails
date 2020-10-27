import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import BySpirit from './components/BySpirit';
import RandomCocktail from './components/RandomCocktail';
import NavigationBar from "./components/NavigationBar.js";
import GetCocktailsBySpirit from "./components/GetCocktailsBySpirit";


function App() {
  const [spiritName, setSpiritName] = useState("");

  function clickOnSpirit (spiritName) {
    setSpiritName(spiritName);
  }


  return (
    <Router>
      <div className="App">
        <NavigationBar/>
        <div className="spirit-list">
          <h2>spirit list:</h2>
          <BySpirit clickOnSpirit={clickOnSpirit}/>
        </div>
        <div className="three-random-cocktails">
          <h2>three random cocktails</h2>
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
