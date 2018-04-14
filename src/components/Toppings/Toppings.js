import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Toppings.css";

class Toppings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect() {
    this.setState({ isChecked: true });
  }

  render() {
    const { isChecked } = this.state;
    //click event for selecting toppings; want to have a checkmark display if the topping is selected
    if (isChecked) {
      <button>
        <img src="https://cdn1.iconfinder.com/data/icons/interface-elements/32/accept-circle-512.png" />
      </button>;
    }
    return (
      <div className="topping">
        <h2>Toppings</h2>
        <div className="topping-container">
          <button
            onClick={() => {
              this.handleSelect();
            }}
            value="peanuts"
          />
          <button value="strawberries" />
          <button value="gold" />
          <button value="sprinkles" />
          <button value="chocdrizzle" />
          <button value="glaze" />
          <button value="pbdrizzle" />
          <button value="vanilladrizzle" />
        </div>
        <Link to="/bag">></Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    peanuts,
    strawberries,
    gold,
    sprinkles,
    chocdrizzle,
    glaze,
    pbdrizzle,
    vanilladrizzle
  } = state;

  return {
    peanuts,
    strawberries,
    gold,
    sprinkles,
    chocdrizzle,
    glaze,
    pbdrizzle,
    vanilladrizzle
  };
}
export default Toppings;
