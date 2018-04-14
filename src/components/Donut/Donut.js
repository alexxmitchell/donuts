import React, { Component } from "react";
import "./Donut.css";

class Donut extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="donut-container">
        <h2>Select a Donut</h2>
        <div className="do-container">
          <button className="do" onClick="">
            Cake
          </button>
          <button className="do" onClick="">
            Old-Fashioned
          </button>
          <button className="do" onClick="">
            Chocolate
          </button>
          <button className="do" onClick="">
            Eclair
          </button>
        </div>
      </div>
    );
  }
}
export default Donut;
