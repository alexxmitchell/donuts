import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import IndDon from "./IndDon/IndDon";
import ShowBox from "./ShowBox/ShowBox";
import {
  getBox,
  removeDonut,
  getDonuts,
  getToppings,
  changeTopping
} from "../../ducks/donutReducer";

import "./Box.css";

class Box extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toppings: [],
      userInput: ""
    };
  }

  componentDidMount() {
    // this.props.getBox(this.props.currentBox[0].id);
  }

  edit;

  render() {
    let dozen = (
      <div className="not-logged">
        <p>You have no donuts. Please login to view donuts</p>
        <button
          onClick={() => (window.location.href = "http://localhost:3001/login")}
        >
          Login now
        </button>
      </div>
    );
    const { donuts, isLoading, box } = this.props;
    if ((box && box.length > 0) || box.length > 0) {
      dozen = box.map((e, i) => {
        return (
          <IndDon
            key={e.id}
            do={e.id}
            type={e.kind}
            price={e.sum}
            removeDonut={this.props.removeDonut}
            getDonuts={this.props.getDonuts}
          />
        );
      });
    }
    let first = this.props.user.name.split(" ").shift();

    return (
      <div className="order">
        <h2 className="box-text">{first}'s Current Box</h2>
        <div className="order-container">
          <div className="do-container">{dozen}</div>
          <ShowBox />
        </div>
        <Link to="/donut">
          <button className="more">Get more donuts</button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.userReducer,
    ...state.donutReducer
  };
}
export default connect(mapStateToProps, {
  getBox,
  removeDonut,
  getDonuts,
  getToppings,
  changeTopping
})(Box);
