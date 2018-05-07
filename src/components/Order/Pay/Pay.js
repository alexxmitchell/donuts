import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Pay.css";
import ShowBox from "../../Box/ShowBox/ShowBox";
import Checkout from "../../../Checkout";

class Pay extends Component {
  constructor(props) {
    super(props);
  }
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
          <Checkout
            name={"Donut payment"}
            description={"Buy your delectable donuts"}
            amount={boxTotal + this.props.cost * Number(this.props.box.length)}
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

export default connect(mapStateToProps)(Pay);
