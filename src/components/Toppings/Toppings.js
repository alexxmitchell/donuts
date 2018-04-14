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
  }
  render() {
    if (isChecked) {
    }
    return (
      <div className="topping">
        <h2>Toppings</h2>
        <div className="topping-container">
          <button onClick={this.state.isChecked} value="peanuts" />
          <button value="strawberries" />
          <button value="gold" />
          <button value="sprinkles" />
          <button value="chocdrizzle" />
          <button value="glaze" />
          <button value="pbdrizzle" />
          <button value="vanilladrizzle" />
        </div>
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
