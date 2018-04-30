import React, { Component } from "react";
import Checkout from "../../Checkout";
import OrderHistory from "./OrderHistory/OrderHistory";

class Order extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        Order
        <Checkout
          name={"Donut payment"}
          description={"Buy your delectable donuts"}
          // amount={+this.props.total[0].sum + this.props.cost} // may need to send the total cost back to the back end
          amount={10}
        />
        <OrderHistory />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    ...state.donutReducer
  };
}
export default Order;
