import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Check from "./Check/Check";
import Droptop from "./Droptop/Droptop";
import Category from "./Category/Category";

import {
  createBox,
  addDonut,
  addToBox,
  addToppings
} from "../../ducks/donutReducer";

import "./Toppings.css";

class Toppings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false,
      topping: 0
      // topping1: 0,
      // topping2: 0,
      // topping3: 0,
      // numTopping: 1
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e) {
    this.setState(
      {
        isChecked: !this.state.isChecked,
        topping: Number(e.target.value)
      },
      () => {
        console.log(this.state.topping);
        this.props.addToppings(this.props.currentDonut.id, this.state.topping);
      }
    );
    //sets the value for each item when clicked
  }

  render() {
    const { isChecked } = this.state;
    console.log(this.props.currentBox);
    //click event for selecting toppings; want to have a checkmark display if the topping is selected
    if (isChecked) {
      <button>
        <img src="https://cdn1.iconfinder.com/data/icons/interface-elements/32/accept-circle-512.png" />
      </button>;
    }

    return (
      <div className="topping">
        <h2>Toppings</h2>
        <Category />
        <h4>Select your toppings</h4>

        <p>Max 4 toppings</p>
        <div className="container-drop-topping">
          <Droptop />
          <div className="topping-container">
            <button
              className="peanuts top"
              onClick={this.handleSelect}
              value={1}
              name="peanuts"
            >
              {/* <img
              src="http://www.jandgpecans.com/data/images/Codengine_1661_2e21b5f960905423db9f6b44244b10dc.png"
              alt="peanuts"
            /> */}
              <Check clicked={this.state.checked} />
              peanuts
            </button>
            <button
              className="pecans top"
              name="pecan"
              onClick={this.handleSelect}
              value={2}
            >
              <Check />
              pecans
            </button>
            <button
              className="bacon top"
              name="bacon"
              onClick={this.handleSelect}
              value={3}
            >
              <Check />
              bacon
            </button>
            <button
              className="gold top"
              name="gold flakes"
              onClick={this.handleSelect}
              value={4}
            >
              <Check />
              gold
            </button>
            <button
              className="strawberries top"
              //
              name="strawberries"
              onClick={this.handleSelect}
              value={5}
            >
              <Check />
              strawberries
            </button>

            <button
              className="bananas top"
              name="bananas"
              onClick={this.handleSelect}
              value={6}
            >
              <Check />
              bananas
            </button>
            <button
              className="sprinkles top"
              name="sprinkles"
              onClick={this.handleSelect}
              value={7}
            >
              <Check />
              sprinkles
            </button>
            <button
              className="hot-fudge top"
              name="hot-fudge"
              onClick={this.handleSelect}
              value={8}
            >
              <Check />
              chocolate icing
            </button>
            <button
              className="caramel top"
              name="caramel"
              onClick={this.handleSelect}
              value={9}
            >
              <Check />
              caramel icing
            </button>
            <button
              className="raspberry top"
              name="raspberry"
              onClick={this.handleSelect}
              value={10}
            >
              <Check />
              raspberry icing
            </button>
            <button
              className="chocdrizzle top"
              name="chocdrizzle"
              onClick={this.handleSelect}
              value={11}
            >
              <Check />
              chocolate drizzle
            </button>

            <button
              className="pbdrizzle top"
              name="pbdrizzle"
              onClick={this.handleSelect}
              value={12}
            >
              <Check />
              peanut butter drizzle
            </button>
          </div>
        </div>
        <Link to="/box">
          {!this.props.currentBox ? (
            <button>Add to Contenders</button>
          ) : (
            <button
              onClick={() => {
                this.props.createBox(this.props.user.id);
              }}
            >
              Add to Box
            </button>
          )}
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
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
  createBox,
  addDonut,
  addToBox,
  addToppings
})(Toppings);
