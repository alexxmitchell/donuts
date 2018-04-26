import React, { Component } from "react";
import "./Landing.css";
import "../../";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { createBoxSession } from "../../ducks/donutReducer";

class Landing extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.createBoxSession();
  // }
  render() {
    return (
      <div className="landing-container">
        <section className="landing-top">
          <div className="large-text child">
            <h2 className="large">Sinfully sweet</h2>
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
        <section className="where" href="#where">
          <h1>Find us</h1>
          <p>Located on the corner of Ervay and Young.</p>
          <div>
            <h3>Good Donut</h3>
            <h3>501 S Ervay St</h3>
            <h3>Dallas, TX 75201</h3>
          </div>
          <div>
            <h3>Let's get social</h3>
            <p>Links</p>
          </div>
        </section>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Landing);
