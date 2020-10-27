import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import { Link } from "react-router-dom";
import NavigationBar from "./components/NavigationBar.js";



function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar/>
      </div>
    </Router>




  );
}

export default App;
