import React, { Component } from "react";
import "./Landing.css";
import "../../";
import { Link } from "react-router-dom";

class Landing extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="landing-container">
        <h2>Your box is empty</h2>
        <p>Create your own or select from our crafted selection</p>
        <div className="scrolls">
          <div className="boxes">
            <Link to="/donut">
              <div>
                <p>custom</p>
              </div>
            </Link>
            <div className="crafted-img">
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
export default Landing;
