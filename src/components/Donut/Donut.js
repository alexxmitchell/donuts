import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { addKind } from "../../ducks/donutReducer";
import "./Donut.css";

class Donut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kind: ""
    };
    this.handleKind = this.handleKind.bind(this);
  }
  handleKind(e) {
    this.setState({ kind: e.target.value });
  }
  render() {
    console.log(this.state);
    return (
      <div className="donut-container">
        <h2>Select a Donut</h2>
        <div className="do-container">
          <button
            value="Cake"
            className="do"
            onClick={e => {
              this.handleKind(e);
            }}
          >
            <img src="https://www.entenmanns.com/sites/default/files/styles/medium/public/x159562_1WPlain.png,qitok=xl2ErUaB.pagespeed.ic.OxCtAT2zYm.png" />
            <p className="donut-type">Cake</p>
          </button>

          <button
            value="Old-Fashioned"
            className="do"
            onClick={e => {
              this.handleKind(e);
            }}
          >
            Old-Fashioned
          </button>
          <button
            value="Chocolate"
            className="do"
            onClick={e => {
              this.handleKind(e);
            }}
          >
            Chocolate
          </button>
          <button
            value="Eclair"
            className="do"
            onClick={e => {
              this.handleKind(e);
            }}
          >
            Eclair
          </button>
          <Link to="/donut/toppings">
            <button
              onClick={() => {
                this.props.addKind(this.state.kind);
              }}
              className="right-arrow"
            >
              >
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { kind } = state;
  return {
    kind
  };
}
export default connect(mapStateToProps, { addKind })(Donut);
