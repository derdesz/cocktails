import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import BySpirit from './components/BySpirit';
import NewCocktailForm from './components/forms/NewCocktailForm.js';
import NavigationBar from "./components/NavigationBar.js";
import FilterByAlcoholic from "./components/apis/FilterByAlcoholic";
import GetCocktailsBySpirit from "./components/apis/GetCocktailsBySpirit";
import GetCocktailById from './components/apis/GetCocktailById';
import AboutUs from './components/AboutUs'
import RegistrationForm from './components/forms/RegistrationForm'
import LoginForm from './components/forms/LoginForm.js'
import GetSpirit from './components/apis/GetSpirit';
import header from './header.jpg';

import { SearchResultByIngredients } from "./components/apis/SearchResultByIngredients.js";
import { SearchResultByName } from "./components/apis/SearchResultByName.js";
import RandomCocktailContainer from "./components/cards/RandomCocktailContainer";
import SpiritList from "./components/SpiritList";


function App() {
  const [spiritName, setSpiritName] = useState("");
  const [spiritDescriptionName, setspiritDescriptionName] = useState("");
  const [currentId, setCurrentId] = useState("");
  const [searchField, setSearchField] = useState(new URLSearchParams(window.location.search).get("search-field") || "by Name or Ingredient");
  const [isLoggedIn, setIsLoggedIn] = useState("");
  const searchRef = useRef();

  function clickOnSpirit (spiritName) {
    setSpiritName(spiritName);
    document.getElementsByClassName('hold-random-cocktail-container')[0].style.display = "none";
  }

  function clickOnSpiritNameForDescription (name) {
    setspiritDescriptionName(name);
    document.getElementById('glass-background').style.display = "none";
  }

  const clickOnFilter = () => {
  }

  const handleCardClick = (id) => {
    setCurrentId(id);
  }

  function getSearchResult(event){
    const fieldValue = searchRef.current.value;
    setSearchField(fieldValue);
  }

  const logIn = (name) => {
    setIsLoggedIn(name);
  }

  const handleLogout = () => {
    setIsLoggedIn("");
  }


  return (
    <Router>
      <div className="App">
        <div className="wrapper">
          <div id="header">
            <Link to="/"><h1 id="header-text" >Soda-licious</h1></Link>
            <img src={header} id="header-pic"/>
          </div>
          <NavigationBar getSearchResult={getSearchResult} searchField={searchField} forwardedRef={searchRef} isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
          <div>
            <Route path="/about-us" render={(props) => (<AboutUs {...props}/>)}/>
          </div>
          <div>
            <Route path="/add-cocktail" component ={NewCocktailForm}/>
          </div>
	        <div>
            <Route path="/registration" render={(props) => (<RegistrationForm {...props}/>)}/>
          </div>
          <div>
            <Route path="/login" render={(props) => (<LoginForm {...props} logIn={logIn}/>)}/>
          </div>
          <div>
            <Route path="/spirits" render={(props) => (<SpiritList {...props} clickOnSpiritNameForDescription={clickOnSpiritNameForDescription}/>)}/>
          </div>
          <div>
            <Route path="/by-spirit" render={(props) => (<BySpirit {...props} clickOnSpirit={clickOnSpirit}/>)}/>
          </div>
          <div className="spirit-list">
            <div className="hold-random-cocktail-container" id="random-cocktail-container">
              <Route exact path="/" component={RandomCocktailContainer}/>
            </div>
            <div>
              <div className="ui grid">
                <Route path="/filter/alcoholic" render={(props) => (<FilterByAlcoholic {...props} handleCardClick={handleCardClick} category="Alcoholic" />)}/>
                <Route path="/filter/non-alcoholic" render={(props) => (<FilterByAlcoholic {...props} handleCardClick={handleCardClick} category="Non_Alcoholic" />)}/>
                <Route path="/search" render={() => (<SearchResultByName searchField={searchField} handleCardClick={handleCardClick}/>)}/>
                <Route path="/search" render={() => (<SearchResultByIngredients searchField={searchField} handleCardClick={handleCardClick}/>)}/>
                <Route path={"/by-spirit/" + spiritName} render={(props) => (<GetCocktailsBySpirit {...props} spiritName={spiritName} handleCardClick={handleCardClick}/>)}/>             
                <Route path={"/spirits/name/" + spiritDescriptionName} render={(props) => (<GetSpirit {...props} spiritDescriptionName={spiritDescriptionName}/>)}/>
              </div>
              <div id="single-item">
                <Route path={"/cocktail/" + currentId} render={(props) => (<GetCocktailById {...props} cocktailId={currentId} />)}/>
              </div>
            </div>
          </div>
          <footer>
            <div class="ui raised inverted segment">
                <p>© SodaLicious.com</p>
            </div>
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
