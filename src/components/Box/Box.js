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
      toppings: []
    };
  }

  componentDidMount() {
    this.props.getBox(this.props.currentBox.id);
  }

  edit;

  render() {
    console.log("box: ", this.props.currentBox);
    let dozen = (
      <div className="not-logged">
        {this.props.user.id ? (
          <p>You have 0 donuts.</p>
        ) : (
          <div>
            <p>Please login to view donuts</p>
            <button
              className="more"
              onClick={() =>
                (window.location.href = "http://localhost:3001/login")
              }
            >
              Login now
            </button>{" "}
          </div>
        )}
      </div>
    );
    const { box } = this.props;
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

    return (
      <div className="order">
        <h2 className="box-text">Your Current Box</h2>
        <div className="order-container">
          <div>
            <div className="do-container">{dozen}</div>
            {this.props.user.id ? (
              <Link to="/donut">
                <button className="more">Get more donuts</button>
              </Link>
            ) : (
              ""
            )}
          </div>

          {this.props.user.id ? <ShowBox /> : ""}
        </div>
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
