import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Form from "../Form/Form";
import ShowBox from "../Box/ShowBox/ShowBox";
import "./Order.css";
import { getUser } from "../../ducks/userReducer";

class Order extends Component {
  constructor(props) {
    super(props);
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
        <p className="order-p">Please enter your billing information</p>
        <div className="order-container">
          <Form />

          {this.props.user.id ? <ShowBox /> : ""}
        </div>
        <Link to="/box">
          <button>Go back</button>
        </Link>
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
