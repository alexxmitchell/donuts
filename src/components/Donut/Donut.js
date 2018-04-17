import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import chocolate from "../../chocolate.png";

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
            <img
              className="select-do"
              alt="cake donut"
              src="https://www.entenmanns.com/sites/default/files/styles/medium/public/x159562_1WPlain.png,qitok=xl2ErUaB.pagespeed.ic.OxCtAT2zYm.png"
            />
            <p className="donut-type">Cake</p>
          </button>

          <button
            value="Chocolate"
            className="do"
            onClick={e => {
              this.handleKind(e);
            }}
          >
            <img alt="chocolate donut" className="select-do" src={chocolate} />
            <p className="donut-type">Chocolate</p>
          </button>
          <button
            value="Cruller"
            className="do"
            onClick={e => {
              this.handleKind(e);
            }}
          >
            Cruller
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
