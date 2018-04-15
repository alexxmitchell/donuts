import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { addToppings } from "../../ducks/donutReducer";

import "./Toppings.css";

class Toppings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false,
      peanuts: 0,
      strawberries: 0,
      gold: 0,
      sprinkles: 0,
      chocdrizzle: 0,
      glaze: 0,
      pbdrizzle: 0
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e) {
    // [e.target.name]+= 1;
    this.setState({ isChecked: true, [e.target.name]: e.target.value });

    //sets the value for each item when clicked
  }
  //need a way to remove the value from the selected item
  render() {
    console.log(this.state);
    const {
      isChecked,
      peanuts,
      strawberries,
      gold,
      sprinkles,
      chocdrizzle,
      glaze,
      pbdrizzle
    } = this.state;
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
          <button
            value="strawberries"
            onClick={() => {
              this.handleSelect();
            }}
          />
          <button
            value="gold"
            onClick={() => {
              this.handleSelect();
            }}
          />
          <button
            value="sprinkles"
            onClick={() => {
              this.handleSelect();
            }}
          />
          <button
            value="chocdrizzle"
            onClick={() => {
              this.handleSelect();
            }}
          />
          <button
            value="glaze"
            onClick={() => {
              this.handleSelect();
            }}
          />
          <button
            value="pbdrizzle"
            onClick={() => {
              this.handleSelect();
            }}
          />
          <button
            value="vanilladrizzle"
            onClick={() => {
              this.handleSelect();
            }}
          />
        </div>
        <Link to="/bag">
          <button
            onClick={() => {
              this.props.addToppings(
                peanuts,
                strawberries,
                gold,
                sprinkles,
                chocdrizzle,
                glaze,
                pbdrizzle
              );
            }}
          >
            >
          </button>
        </Link>
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
    pbdrizzle
  } = state;

  return {
    peanuts,
    strawberries,
    gold,
    sprinkles,
    chocdrizzle,
    glaze,
    pbdrizzle
  };
}
export default connect(mapStateToProps, { addToppings })(Toppings);
