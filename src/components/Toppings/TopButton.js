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
      isChecked: false,
      topping: 0
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(val) {
    console.log(val);
    this.setState(
      {
        topping: Number(val)
      },
      () => {
        console.log(this.state.topping);
        this.props.addToppings(this.props.currentDonut.id, this.state.topping);
      }
    );
  }

  render() {
    const { isChecked } = this.state;
    console.log(this.props.currentDonut.kind);
    //click event for selecting toppings; want to have a checkmark display if the topping is selected
    // if (isChecked) {
    //   <button>
    //     <img src="https://cdn1.iconfinder.com/data/icons/interface-elements/32/accept-circle-512.png" />
    //   </button>;
    // }

    return (
      <div className="topping-container">
        <button onClick={() => this.handleSelect(this.props.id)}>
          <Check checked={this.isChecked} />
          <p className="label">{this.props.label}</p>
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
    currentBox
  } = state.donutReducer;
  const { user } = state.userReducer;
  return {
    kind,
    currentDonut,
    currentToppings,
    currentBox,
    user
  };
}
export default connect(mapStateToProps, {
  addToppings
})(TopButton);
