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
        <div className="large-text">
          {/* <h2 className="large">Customizable</h2>
          <h2 className="large">Donuts</h2> */}
          <p>Create your own or select from our crafted selection</p>
          <div className="scrolls">
            <div className="boxes">
              <Link to="/donut">
                <div>
                  <p>custom</p>
                </div>
              </Link>
              <Link to="/crafted">
                <div className="crafted-img">
                  <p>crafted</p>
                </div>
              </Link>
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
