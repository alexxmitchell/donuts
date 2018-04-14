import React, { Component } from "react";
import "./Box.css";
import { Link } from "react-router-dom";

class Box extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="box-container">
        <Link to="/">
          <span className="scroll">></span>
        </Link>
        <h2>Box</h2>
        <Link to="donut">
          <span className="scroll">></span>
        </Link>
      </div>
    );
  }
}
export default Box;
