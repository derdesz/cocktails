import './App.css';
import React from 'react';
import BySpirit from './components/BySpirit';
import RandomCocktail from './components/RandomCocktail';

function App() {
  return (
    <div className="App">
      <div className="spirit-list">
        <BySpirit clickOnSpirit={clickOnSpirit}/>
      </div>
      <div className="three-random-cocktails">
        <RandomCocktail/>
        <RandomCocktail/>
        <RandomCocktail/>
      </div>
      
    </div>
  );
}

export default App;
