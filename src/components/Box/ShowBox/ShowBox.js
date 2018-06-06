import React, { Component } from "react";
import { connect } from "react-redux";

import "../IndDon/IndDon.css";
import "./ShowBox.css";

import { getBox, getBoxtops, getTotal } from "../../../ducks/donutReducer";

class ShowBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: true,
      totes: 0
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
export default connect(
  mapStateToProps,
  { getBox, getBoxtops, getTotal }
)(ShowBox);
