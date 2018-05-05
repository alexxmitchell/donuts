import React, { Component } from "react";
import { connect } from "react-redux";
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
        <div className="ship-info">
          <p>{this.props.user.name}</p>
          <p>{this.props.user.email}</p>
          <p>{this.props.user.address}</p>
          <p>
            {this.props.user.city}, {this.props.user.st}
          </p>
          <p>{this.props.user.zip}</p>
        </div>
        <ShowBox />
        <Checkout
          name={"Donut payment"}
          description={"Buy your delectable donuts"}
          amount={boxTotal + this.props.cost * Number(this.props.box.length)}
        />
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
