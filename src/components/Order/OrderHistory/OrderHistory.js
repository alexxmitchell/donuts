import React, { Component } from "react";
import { connect } from "react-redux";
import { previousOrders } from "../../../ducks/donutReducer";

class OrderHistory extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.previousOrders(this.props.user.id);
  }
  render() {
    let oldOrders = this.props.previous.map((e, i) => {
      return (
        <div className="old" key={i}>
          <h2>Old Box</h2>
          <h2>{e.sum}</h2>
        </div>
      );
    });
    return <div>OrderHistory</div>;
  }
}
function mapStateToProps(state) {
  const { previous } = state.donutReducer.previous;
  const { user } = state.userReducer.user;
  return {
    previous
  };
}
export default OrderHistory;
