import React, { Component } from "react";
import Checkout from "../../Checkout";
import { connect } from "react-redux";
import Form from "../Form/Form";
import "./Order.css";
import { getUser } from "../../ducks/userReducer";

class Order extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   name: "",
    //   address: "",
    //   city: "",
    //   st: "",
    //   zip: 0
    // };
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    let boxTotal = this.props.box.reduce((acc, sum, i) => {
      return acc + Number(this.props.box[i].sum);
    }, 0);
    return (
      <div className="order-page">
        <h4>We just need a little more info</h4>
        <p>Please enter your billing information</p>
        <Form />

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
    ...state.donutReducer,
    ...state.userReducer
  };
}
export default connect(mapStateToProps, { getUser })(Order);
