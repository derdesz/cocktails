import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import BySpirit from './components/BySpirit';
import RandomCocktail from './components/RandomCocktail';
import NavigationBar from "./components/NavigationBar.js";
import FilterByAlcoholic from "./components/FilterByAlcoholic";
import GetCocktailsBySpirit from "./components/GetCocktailsBySpirit";
import GetCocktailById from './components/GetCocktailById';
import AboutUs from './components/AboutUs'
import header from './header.jpg';

import { SearchResultByIngredients } from "./components/SearchResultByIngredients.js";
import { SearchResultByName } from "./components/SearchResultByName.js";
import RandomCocktailContainer from "./components/RandomCocktailContainer";


function App() {
  const [spiritName, setSpiritName] = useState("");
  const [currentId, setCurrentId] = useState("");
  const [searchField, setSearchField] = useState(new URLSearchParams(window.location.search).get("search-field") || "by Name or Ingredient");
  const searchRef = useRef();

  function clickOnSpirit (spiritName) {
    setSpiritName(spiritName);
    document.getElementById('random-cocktail-container').style.display = "none";
  }

  const clickOnFilter = () => {
  }

  const handleCardClick = (id) => {
    document.getElementById('random-cocktail-container').style.display = "none";
    setCurrentId(id);
  }

  function getSearchResult(event){
    const fieldValue = searchRef.current.value;
    setSearchField(fieldValue);
  }


  return (
    <Router>
      <div className="App">
        <div id="header">
          <Link to="/"><h1 id="header-text" >Soda-licious</h1></Link>
          <img src={header} id="header-pic"/>
        </div>
        <NavigationBar getSearchResult={getSearchResult} searchField={searchField} forwardedRef={searchRef}/>
        <div>
          <Route path="/about-us" render={(props) => (<AboutUs {...props}/>)}/>
        </div>
        <div>
          <Route path="/by-spirit" render={(props) => (<BySpirit {...props} clickOnSpirit={clickOnSpirit}/>)}/>
        </div>
	      <div className="spirit-list">
          <div>
            <Route exact path="/" component={RandomCocktailContainer}/>
          </div>
          <div id="main-container">
            <div className="ui grid container">
              <Route path="/alcoholic" render={(props) => (<FilterByAlcoholic {...props} handleCardClick={handleCardClick} category="Alcoholic" />)}/>
              <Route path="/non-alcoholic" render={(props) => (<FilterByAlcoholic {...props} handleCardClick={handleCardClick} category="Non_Alcoholic" />)}/>
              <Route path="/search" render={() => (<SearchResultByName searchField={searchField} handleCardClick={handleCardClick}/>)}/>
              <Route path="/search" render={() => (<SearchResultByIngredients searchField={searchField} handleCardClick={handleCardClick}/>)}/>
              <Route path={"/by-spirit/" + spiritName} render={(props) => (<GetCocktailsBySpirit {...props} spiritName={spiritName} handleCardClick={handleCardClick}/>)}/>             
            </div>
            <div id="single-item">
              <Route path={"/" + currentId} render={(props) => (<GetCocktailById {...props} cocktailId={currentId} />)}/>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
