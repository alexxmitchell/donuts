import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../IndDon/IndDon.css";
import "./ShowBox.css";
import ShowTop from "../IndDon/IndTop/IndTop";

import cake from "../../images/cake.png";
import choc from "../../images/chocolate.png";
import {
  getBox,
  getToppings,
  getBoxtops,
  getTotal
} from "../../../ducks/donutReducer";

class ShowBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: true
    };
  }

  componentDidMount() {
    this.props.getBox(this.props.currentBox.id);
  }

  render() {
    let boxTotal = this.props.box.reduce((acc, sum, i) => {
      return acc + Number(this.props.box[i].sum);
    }, 0);
    let length = this.props.box.length;

    const correctBoxToppings = this.props.boxToppings.filter(
      e => e.donut_id == this.props.do
    );
    const boxer = this.props.box.map((e, i) => {
      return (
        <div className="showbox" key={i}>
          <h2>{e.kind} donut</h2>

          <div>
            {e.sum ? (
              <p>$ {(+e.sum + this.props.cost).toFixed(2)}</p>
            ) : (
              <p>$1</p>
            )}
          </div>
        </div>
      );
    });
    return (
      <div className="to-checkout">
        <h2>Order Summary</h2>
        <div className="donut-box">
          <div className="yoDos">{boxer}</div>
          <div className="order-summary">
            {this.props.currentBox && boxTotal ? (
              <div>
                <p>Items: {this.props.box.length}</p>

                <p className="inline-price">
                  Box Total: ${" "}
                  {(
                    Number(boxTotal) +
                    this.props.cost * Number(length)
                  ).toFixed(2)}
                </p>
              </div>
            ) : (
              <p>$0</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.donutReducer,
    ...state.userReducer
  };
}
export default connect(mapStateToProps, { getBox, getBoxtops, getTotal })(
  ShowBox
);
