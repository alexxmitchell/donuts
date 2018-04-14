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

  componentDidMount() {
    axios
      .get("/api/donuts")
      .then(resp => {
        this.setState({ donuts: resp.data });
      })
      .catch(err => console.log(err));
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header />
        {routes}
      </div>
    );
  }
}

export default App;
