import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import IndDon from "./IndDon/IndDon";

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
            </button>
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

    let boxTotal = box.reduce((acc, sum, i) => {
      return acc + Number(box[i].sum);
    }, 0);
    let length = box.length;

    return (
      <div className="box">
        <h2 className="box-text">Your Current Box</h2>
        <div className="box-container">
          <div className="do-container">{dozen}</div>
          {this.props.box && this.props.box.length ? (
            <div className="how-many">
              <h4>
                Donut Count: {""} {this.props.box.length}
              </h4>
              <h4>
                Box Total:{"  "}
                {"$"}
                {(Number(boxTotal) + this.props.cost * Number(length)).toFixed(
                  2
                )}
              </h4>
            </div>
          ) : (
            ""
          )}

          {this.props.user.id ? (
            <div className="box-links">
              <Link to="/donut">
                <button className="more">Get more donuts</button>
              </Link>
              {this.props.box.length > 0 ? (
                <Link to="/order">
                  <button className="more">Order Now</button>
                </Link>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
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
