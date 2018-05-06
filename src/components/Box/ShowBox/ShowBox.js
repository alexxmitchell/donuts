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

import image from "../../../placeholder.png";
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
    console.log(this.props);
    let boxTotal = this.props.box.reduce((acc, sum, i) => {
      return acc + Number(this.props.box[i].sum);
    }, 0);
    let length = this.props.box.length;

    console.log(boxTotal + this.props.cost * Number(length));
    // console.log(this.props.total);
    const correctBoxToppings = this.props.boxToppings.filter(
      e => e.donut_id == this.props.do
    );
    const boxer = this.props.box.map((e, i) => {
      return (
        <div className="box" key={i}>
          <h2>{e.kind} donut</h2>

          {/* <div>
              with
              {this.props.boxToppings && (
                <ShowTop boxToppings={correctBoxToppings} />
              )}
            </div> */}
          <div>
            <p>Items: {this.props.box.length}</p>
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
      <div>
        <div className="to-checkout">
          <h2>Summary</h2>
          <div className="donut-box">
            <div className="yoDos">{boxer}</div>
            <p>Box Total: </p>
            {this.props.currentBox && boxTotal ? (
              <p>
                {(Number(boxTotal) + this.props.cost * Number(length)).toFixed(
                  2
                )}
              </p>
            ) : (
              <p>$0</p>
            )}
          </div>
        </div>
        {/* <Link to="/order/pay">
          <button className="now">Proceed to Checkout</button>
        </Link> */}
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
