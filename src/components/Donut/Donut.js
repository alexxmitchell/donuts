import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import chocolate from "../images/chocolate.png";
import cake from "../images/cake.png";
import Toppings from "../Toppings/Toppings";

import { addKind, addDonut } from "../../ducks/donutReducer";
import "./Donut.css";

class Donut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kind: ""
    };
    this.handleKind = this.handleKind.bind(this);
  }

  handleKind(type) {
    this.setState({ kind: type });
    this.props.addKind(this.state.kind);
  }
  render() {
    console.log(this.state.kind);
    return (
      <div className="donut-container">
        <h2>Select a Donut</h2>
        <div className="do-container">
          <button
            className="do"
            onClick={e => {
              this.handleKind("Cake");
            }}
          >
            <img className="select-do" alt="cake donut" src={cake} />
            <p className="donut-type">Cake</p>
          </button>

          <button
            className="do"
            onClick={e => {
              this.handleKind("Chocolate");
            }}
          >
            <img alt="chocolate donut" className="select-do" src={chocolate} />
            <p className="donut-type">Chocolate</p>
          </button>
          <button
            className="do"
            onClick={e => {
              this.handleKind("Cruller");
            }}
          >
            Cruller
          </button>
          <button
            className="do"
            onClick={e => {
              this.handleKind("Old-Fashioned");
            }}
          >
            Old-Fashioned
          </button>
          <Link to="/donut/toppings">
            <button
              onClick={() => {
                this.props.addDonut(this.state.kind);
              }}
              className="right-arrow"
            >
              >
            </button>
          </Link>
        </div>
        <Toppings />
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
export default connect(mapStateToProps, { addKind, addDonut })(Donut);
