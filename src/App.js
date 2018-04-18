import React, { Component } from "react";
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import Box from "./components/Box/Box";
import Login from "./components/Login/Login";
import Donut from "./components/Donut/Donut";
import Toppings from "./components/Toppings/Toppings";
import { Switch, Route } from "react-router-dom";
import routes from "./routes";
import axios from "axios";
import "./App.css";
import { RouteTransition } from "react-router-transition";

class App extends Component {
  constructor() {
    super();

    this.state = {
      donuts: []
    };
  }

  render() {
    return (
      <div className="App">
        <Header />

        {routes}
      </div>
    );
  }
}

export default App;
