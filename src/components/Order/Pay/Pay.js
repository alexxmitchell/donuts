import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import "./Pay.css";
import ShowBox from "../../Box/ShowBox/ShowBox";

import { clearBox } from "../../../ducks/donutReducer";

class Pay extends Component {
  buyBox = token => {
    let boxTotal = this.props.box.reduce((acc, sum, i) => {
      return acc + Number(this.props.box[i].sum);
    }, 0);
    let amount = boxTotal + this.props.cost * Number(this.props.box.length);
    const boxNo = this.props.currentBox.id;
    let stripeToken = token;

    axios
      .post("/api/buydonuts", { boxNo, amount, stripeToken })
      .then(() => this.props.clearBox())
      .then(() => this.props.history.push("/order/pay/success"))
      .catch(console.log);
  };
  render() {
    let boxTotal = this.props.box.reduce((acc, sum, i) => {
      return acc + Number(this.props.box[i].sum);
    }, 0);
    return (
      <div className="pay-summary">
        <div className="ready">
          <h2>Final Review</h2>
          <div className="ship-info">
            <p>Name: {this.props.user.name}</p>
            <p>Address: {this.props.user.address}</p>
            <p>
              City, St: {this.props.user.city}, {this.props.user.st}
            </p>
            <p>Zipcode: {this.props.user.zip}</p>
            <p>Email: {this.props.user.email}</p>
          </div>
        </div>

        <div className="thebox">
          <ShowBox />
        </div>

        <div className="final-pay">
          <StripeCheckout
            token={this.buyBox}
            amount={
              (boxTotal + this.props.cost * Number(this.props.box.length)) * 100
            }
            stripeKey="pk_test_NM89KQCfF0UVkkDU278wn9rf"
          />
        </div>
        <Link to="/order">
          <button className="return">Return to Billing Info</button>
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

export default connect(
  mapStateToProps,
  { clearBox }
)(Pay);
