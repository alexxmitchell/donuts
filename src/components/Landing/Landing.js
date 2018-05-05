import React from "react";
import "./Landing.css";
import "../../";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import logo from "../images/cropped-DonutIcon.png";

import About from "./About/About";
import Find from "./Find/Find";

const Landing = () => {
  return (
    <div className="landing-container">
      <section className="landing-top">
        <div className="land-text child">
          <h2>We make</h2>
          <h2>
            really, <span className="bold">really</span>
          </h2>

          <h2 className="logo-font">
            Good D<span>
              <img className="donut-logo" src={logo} alt="donut" />
            </span>nuts
          </h2>
          {/* <img className="anime" src={donut} alt="donut-animation" />
          <img className="anime" src={donut} alt="donut-animation" />
          <img className="anime" src={donut} alt="donut-animation" /> */}
          <div className="scrolls">
            <button
              className="login"
              onClick={() =>
                (window.location.href = "http://localhost:3001/login")
              }
            >
              <h2>Login to start your box</h2>
            </button>
            {/* <h3>
              Hand crafted donuts to address your sweet craving. Each donut that
              we craft is created with happiness.
            </h3> */}
          </div>
        </div>
      </section>
      <About />
      <Find />
    </div>
  );
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Landing);
