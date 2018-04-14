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
        <h2>Your box is empty</h2>
        <p>Select from our pre-crafted selection or create your own</p>
        <div className="scrolls">
          <div className="boxes">
            <Link to="/donut">
              <div>
                <p>custom</p>
              </div>
            </Link>
            <div>
              <p>crafted</p>
            </div>
          </div>
          <Link to="/donut">
            <span className="scroll">></span>
          </Link>
        </div>
      </div>
    );
  }
}
export default Box;
