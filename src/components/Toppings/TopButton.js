import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Check from "./Check/Check";
import Droptop from "./Droptop/Droptop";
import Category from "./Category/Category";

import { addToppings } from "../../ducks/donutReducer";

import "./Toppings.css";

class TopButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false
    };
    this.selectedVal = this.selectedVal.bind(this);
  }

  selectedVal(id) {
    this.props.handleSelect(id);
    this.setState({
      isChecked: true
    });
  }

  render() {
    const { isChecked } = this.state;
    console.log(isChecked);
    //click event for selecting toppings; want to have a checkmark display if the topping is selected
    // if (isChecked) {
    //   <button>
    //     <img src="https://cdn1.iconfinder.com/data/icons/interface-elements/32/accept-circle-512.png" />
    //   </button>;
    // }

    return (
      <div className="topping-container">
        <button onClick={() => this.selectedVal(this.props.id)}>
          {this.state.isChecked && <Check />}
          <p className="label">{this.props.name}</p>
          {/* <p className="category">{this.props.category}</p> */}
          <p className="price">$ {this.props.price}</p>
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    topping,
    kind,
    currentDonut,
    currentToppings,
    currentBox,
    currDonutTop
  } = state.donutReducer;
  const { user } = state.userReducer;
  return {
    kind,
    currentDonut,
    currentToppings,
    currentBox,
    currDonutTop,
    user
  };
}
export default connect(mapStateToProps, {
  addToppings
})(TopButton);
