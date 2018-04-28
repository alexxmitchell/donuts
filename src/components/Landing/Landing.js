import React, { Component } from "react";
import "./Landing.css";
import "../../";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import About from "./About/About";
import Find from "./Find/Find";

class Landing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="landing-container">
        <section className="landing-top">
          <div className="large-text child">
            <h2 className="large">Go nuts for Good Donuts</h2>
            <p>Create your own or select from our crafted selection</p>

            <div className="scrolls">
              <div className="boxes">
                <button
                  className="login"
                  onClick={() =>
                    (window.location.href = "http://localhost:3001/login")
                  }
                >
                  <h2>Login to start your box</h2>
                </button>

                {/* <Link to="/donut">
                <div>
                  <p>custom</p>
                </div>
              </Link> */}
              </div>
            </div>
            {/* <Link to="/donut">
            <span className="scroll">></span>
          </Link> */}
          </div>
        </section>
        <About />
        <Find />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Landing);
