import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Home from './components/Home';
import Search from './components/Search';
import Saved from './components/Saved';
import Footer from './components/Footer';
import NavBar from "./components/NavBar";

function App() {
  
  return (
    <div className="App">
      <Router>
          <NavBar/>
            <div className="container-fluid main-content">
                <Route component={ Home } />
                <Route exact path="/search" component={ Search } />
                <Route exact path="/saved" component={ Saved } />
            </div>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
