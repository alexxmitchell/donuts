import React, { Component } from "react";
import Header from "./components/Header/Header";
import routes from "./routes";
import axios from "axios";
import "./App.css";

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
