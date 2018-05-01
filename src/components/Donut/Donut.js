import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import chocolate from "../images/chocolate.png";
import cake from "../images/cake.png";
import scrolldown from "../images/scrolldown.png";
// import Toppings from "../Toppings/Toppings";

import { addKind, addDonut } from "../../ducks/donutReducer";
import { getUser } from "../../ducks/userReducer";
import "./Donut.css";

class Donut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kind: ""
    };
    this.handleKind = this.handleKind.bind(this);
  }
  componentDidMount() {
    this.props.getUser();
  }
  handleKind(type) {
    this.setState({ kind: type });
    this.props.addKind(this.state.kind);
  }
  render() {
    return (
      <div className="donut-container">
        <h2>Select a Donut</h2>
        <div className="don-container">
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
        </div>
        <Link to="/donut/toppings">
          <button
            onClick={() => {
              this.props.addDonut(this.state.kind);
            }}
            className="right-arrow"
          >
            <img src={scrolldown} />
          </button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { kind } = state.donutReducer;
  const { user } = state.userReducer;
  return {
    kind,
    user
  };
}
export default connect(mapStateToProps, { addKind, addDonut, getUser })(Donut);
