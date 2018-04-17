import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { addDonut, addToBox } from "../../ducks/donutReducer";

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
      ["topping" + this.state.numTopping]: type,
      numTopping: this.state.numTopping + 1
      //numTopping should not exceed 3
    });

    //sets the value for each item when clicked
  }
  //need a way to remove the value from the selected item

  removeTopping() {}
  render() {
    console.log(this.state);
    const { isChecked, topping1, topping2, topping3 } = this.state;
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
            className="peanuts top"
            onClick={e => {
              this.handleSelect("peanuts");
            }}
            // value="peanuts"
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
            // value="bacon"
            name="bacon"
            onClick={e => {
              this.handleSelect("bacon");
            }}
          >
            bacon
          </button>
          <button
            className="strawberries top"
            // value="strawberries"
            name="strawberries"
            onClick={e => {
              this.handleSelect("strawberries");
            }}
          >
            strawberries
          </button>
          <button
            className="gold top"
            name="gold"
            // value="gold"
            onClick={e => {
              this.handleSelect("gold");
            }}
          >
            gold
          </button>
          <button
            className="sprinkles top"
            name="sprinkles"
            // value="sprinkles"
            onClick={e => {
              this.handleSelect("sprinkles");
            }}
          >
            sprinkles
          </button>
          <button
            className="chocdrizzle top"
            name="chocdrizzle"
            value="chocdrizzle"
            onClick={e => {
              this.handleSelect("chocolate drizzle");
            }}
          >
            chocolate drizzle
          </button>
          <button
            className="glaze top"
            name="glaze"
            value="glaze"
            onClick={e => {
              this.handleSelect("glaze");
            }}
          >
            glaze
          </button>
          <button
            className="pbdrizzle top"
            name="pbdrizzle"
            value="pbdrizzle"
            onClick={e => {
              this.handleSelect("peanut butter drizzle");
            }}
          >
            peanut butter drizzle
          </button>
        </div>

        {/* <Link to="/login"> */}
        <button
          onClick={() => {
            this.props.addDonut(
              this.props.kind,
              this.state.topping1,
              this.state.topping2,
              this.state.topping3,
              this.props.price
            );
          }}
        >
          >
        </button>
        <button
          onClick={() => {
            this.props.addToBox(this.props.userid);
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
  const { kind, topping1, topping2, topping3, price } = state;

  return {
    kind,
    topping1,
    topping2,
    topping3,
    price
  };
}
export default connect(mapStateToProps, { addDonut, addToBox })(Toppings);
