import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import axios from 'axios';

import Home from './components/Home';
import Search from './components/Search';
import Saved from './components/Saved';

import NavBar from "./components/NavBar";

function App() {

  // useEffect(() => {
  //   axios.get("/cats").then( res => {
  //     console.log( res.data );
  //   });
  // }, [])
  
  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <NavBar/>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/search" component={ Search } />
            <Route exact path="/saved" component={ Saved } />
            <Route component={ Error }/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
