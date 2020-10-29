import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import BySpirit from './components/BySpirit';
import RandomCocktail from './components/RandomCocktail';
import NavigationBar from "./components/NavigationBar.js";
import FilterByAlcoholic from "./components/FilterByAlcoholic";
import GetCocktailsBySpirit from "./components/GetCocktailsBySpirit";
import GetCocktailById from './components/GetCocktailById';



function App() {
  const [spiritName, setSpiritName] = useState("");
  const [currentId, setCurrentId] = useState("");

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

  return (
    <Router>
      <div className="App">
        <NavigationBar/>
        <div>
          <Route path="/by-spirit" render={(props) => (<BySpirit {...props} clickOnSpirit={clickOnSpirit}/>)}/>
        </div>  
        <div className="spirit-list">
          <div className="cocktail-container">
            <Route path="/alcoholic" render={(props) => (<FilterByAlcoholic {...props} clickOnFilter={clickOnFilter} category="Alcoholic" />)}/>
            <Route path="/non-alcoholic" render={(props) => (<FilterByAlcoholic {...props} clickOnFilter={clickOnFilter} category="Non_Alcoholic" />)}/>
          </div>
        </div>
        <h2>Our offer: </h2>
        <div className="cocktail-container">
          <RandomCocktail />
          <RandomCocktail />
          <RandomCocktail />
        </div>
        <div className="cocktail-container">
          <Route path={"/by-spirit/" + spiritName} render={(props) => (<GetCocktailsBySpirit {...props} spiritName={spiritName} handleCardClick={handleCardClick}/>)}/>
        </div>
        <div className="cocktail-container">
          <Route path={"/" + currentId} render={(props) => (<GetCocktailById {...props} cocktailId={currentId} cocktailName={currentName} imgSrc={currentImgSrc} instructions={currentInstructions} category={currentCategory}/>)}/>
        </div> 
      </div>
    </Router>
  );
}

export default App;
