import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { addToppings, addDonut } from "../../ducks/donutReducer";

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
    this.setState({ isChecked: true, [e.target.name]: 1 });

    //sets the value for each item when clicked
  }
  //need a way to remove the value from the selected item
  render() {
    console.log(this.props);
    const {
      isChecked,
      peanuts,
      bacon,
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
        <p>Select 3 toppings</p>

        <div className="topping-container">
          <button
            onClick={e => {
              this.handleSelect(e);
            }}
            value="peanuts"
            name="peanuts"
          />
          <button
            value="bacon"
            name="bacon"
            onClick={e => {
              this.handleSelect(e);
            }}
          />
          <button
            value="strawberries"
            name="strawberries"
            onClick={e => {
              this.handleSelect(e);
            }}
          />
          <button
            name="gold"
            value="gold"
            onClick={e => {
              this.handleSelect(e);
            }}
          />
          <button
            name="sprinkles"
            value="sprinkles"
            onClick={e => {
              this.handleSelect(e);
            }}
          />
          <button
            name="chocdrizzle"
            value="chocdrizzle"
            onClick={e => {
              this.handleSelect(e);
            }}
          />
          <button
            name="glaze"
            value="glaze"
            onClick={e => {
              this.handleSelect(e);
            }}
          />
          <button
            name="pbdrizzle"
            value="pbdrizzle"
            onClick={e => {
              this.handleSelect(e);
            }}
          />
        </div>

        {/* <Link to="/login"> */}
        <button
          onClick={() => {
            this.props.addToppings(
              peanuts,
              bacon,
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
        <button
          onClick={() => {
            this.props.addDonut(
              this.props.kind,
              peanuts,
              bacon,
              strawberries,
              gold,
              sprinkles,
              chocdrizzle,
              glaze,
              pbdrizzle
            );
          }}
        >
          Add to Box
        </button>
        {/* </Link> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    kind,
    peanuts,
    strawberries,
    gold,
    sprinkles,
    chocdrizzle,
    glaze,
    pbdrizzle
  } = state;

  return {
    kind,
    peanuts,
    strawberries,
    gold,
    sprinkles,
    chocdrizzle,
    glaze,
    pbdrizzle
  };
}
export default connect(mapStateToProps, { addToppings, addDonut })(Toppings);
