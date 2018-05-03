import React, { Component } from "react";
import Header from "./components/Header/Header";
import routes from "./routes";

import "./App.css";

class App extends Component {
  constructor() {
    super();
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
