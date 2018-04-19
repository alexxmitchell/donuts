import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { addDonut, addToBox, addToppings } from "../../ducks/donutReducer";

import "./Toppings.css";

class Toppings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false,
      topping1: "",
      topping2: "",
      topping3: "",
      numTopping: 1
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(type) {
    this.setState({
      isChecked: !this.state.isChecked,
      //need a way to remove the value from the selected item
      ["topping" + this.state.numTopping]: type,
      numTopping: this.state.numTopping + 1
      //numTopping should not exceed 3
    });
    this.props.addToppings(this.props.currentDonut.id, this.state.topping1);
    //sets the value for each item when clicked
  }

  removeTopping() {}
  render() {
    console.log(this.props.currentDonut.id, this.state.topping1);
    const { isChecked, topping1, topping2, topping3 } = this.state;
    //click event for selecting toppings; want to have a checkmark display if the topping is selected
    if (isChecked) {
      <button>
        <img src="https://cdn1.iconfinder.com/data/icons/interface-elements/32/accept-circle-512.png" />
      </button>;
    }
    if (this.state.numTopping > 3) {
      alert("Only select 3 toppings please");
    }
    return (
      <div className="topping">
        <h2>Toppings</h2>
        <p>Max 4 toppings</p>

        <div className="topping-container">
          <button
            className="peanuts top"
            onClick={e => {
              this.handleSelect("1");
            }}
            name="peanuts"
          >
            {/* <img
              src="http://www.jandgpecans.com/data/images/Codengine_1661_2e21b5f960905423db9f6b44244b10dc.png"
              alt="peanuts"
            /> */}
            peanuts
          </button>
          <button
            className="bacon top"
            name="bacon"
            onClick={e => {
              this.handleSelect(4);
            }}
          >
            bacon
          </button>
          <button
            className="strawberries top"
            //
            name="strawberries"
            onClick={e => {
              this.handleSelect(6);
            }}
          >
            strawberries
          </button>
          <button
            className="gold top"
            name="gold"
            onClick={e => {
              this.handleSelect(5);
            }}
          >
            gold
          </button>
          <button
            className="walnuts top"
            name="walnuts"
            onClick={e => {
              this.handleSelect(2);
            }}
          >
            walnuts
          </button>
          <button
            className="pecans top"
            name="pecan"
            onClick={e => {
              this.handleSelect(3);
            }}
          >
            pecans
          </button>
          <button
            className="bananas top"
            name="bananas"
            onClick={e => {
              this.handleSelect(7);
            }}
          >
            bananas
          </button>
          <button
            className="sprinkles top"
            name="sprinkles"
            onClick={e => {
              this.handleSelect(8);
            }}
          >
            sprinkles
          </button>
          <button
            className="hot-fudge top"
            name="hot-fudge"
            onClick={e => {
              this.handleSelect(10);
            }}
          >
            sprinkles
          </button>
          <button
            className="chocdrizzle top"
            name="chocdrizzle"
            onClick={e => {
              this.handleSelect(11);
            }}
          >
            chocolate drizzle
          </button>
          <button
            className="glaze top"
            name="glaze"
            onClick={e => {
              this.handleSelect(9);
            }}
          >
            glaze
          </button>
          <button
            className="pbdrizzle top"
            name="pbdrizzle"
            onClick={e => {
              this.handleSelect(12);
            }}
          >
            peanut butter drizzle
          </button>
        </div>

        {/* <Link to="/login"> */}
        <button onClick={() => {}}>></button>
        <Link to="/box">
          <button
            onClick={() => {
              this.props.addToBox(this.props.userid);
            }}
          >
            Add to Box
          </button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { kind, currentDonut, topping1, topping2, topping3, price } = state;

  return {
    kind,
    currentDonut,
    topping1,
    topping2,
    topping3,
    price
  };
}
export default connect(mapStateToProps, { addDonut, addToBox, addToppings })(
  Toppings
);
