import React from "react";
import "./Landing.css";
import { connect } from "react-redux";

import logo from "../images/cropped-DonutIcon.png";

import About from "./About/About";
import Find from "./Find/Find";

const Landing = () => {
  return (
    <div className="landing-container">
      <section className="landing-top">
        <div className="land-text">
          <h2 className="make">We make</h2>
          <h2 className="make">
            really, <span className="bold"> really</span>
          </h2>
          <div className="landing-logo">
            <h2 className="logo-font donuts">
              Good D<span>
                <img className="donut-logo" src={logo} alt="donut" />
              </span>nuts
            </h2>
          </div>
        </div>

        <div className="log">
          <button
            className="login"
            onClick={() =>
              (window.location.href = `${process.env.REACT_APP_LOGIN}`)
            }
          >
            <h2>Login to start your box</h2>
          </button>
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
