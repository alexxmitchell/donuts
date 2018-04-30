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
  addToppings,
  getAllToppings
} from "../../ducks/donutReducer";

import "./Toppings.css";
import TopButton from "./TopButton";

class Toppings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topping: 0
    };
  }

  componentDidMount() {
    this.props.getAllToppings();
  }

  render() {
    console.log(this.props.currentDonut.kind);
    console.log(this.props.toppings);
    //click event for selecting toppings; want to have a checkmark display if the topping is selected
    let mappedToppings = this.props.toppings.map((e, i) => {
      return (
        <TopButton
          key={e.id}
          id={e.id}
          price={e.price}
          name={e.label}
          category={e.category}
        />
      );
    });

    return (
      <div className="topping">
        <h2>Toppings</h2>
        <Category />
        <h4>Select your toppings (max 4)</h4>
        <p>Start with a base</p>
        <p>
          then go <span className="sweet">sweet</span> or{" "}
          <span className="savory">savory</span> or both
        </p>
        <div className="container-drop-topping">
          <div className="to-contain">{mappedToppings}</div>
          {/* <div className="topping-container">
            <button
              className="hot-fudge top"
              name="hot-fudge"
              onClick={() => this.handleSelect(8)}
            >
              <Check checked={this.isChecked} />
              chocolate icing
            </button>
            <button
              className="caramel top"
              name="caramel"
              onClick={() => this.handleSelect(9)}
            >
              <Check />
              caramel icing
            </button>
            <button
              className="raspberry top"
              name="raspberry"
              onClick={() => this.handleSelect(10)}
            >
              <Check />
              raspberry icing
            </button>
            <button
              className="peanuts top"
              onClick={() => this.handleSelect(1)}
              name="peanuts"
            >
              {/* <img
              src="http://www.jandgpecans.com/data/images/Codengine_1661_2e21b5f960905423db9f6b44244b10dc.png"
              alt="peanuts"
            /> */}
          {/* <Check clicked={this.state.checked} />
              peanuts
            </button>
            <button
              className="pecans top"
              name="pecan"
              onClick={() => this.handleSelect(2)}
            >
              <Check />
              pecans
            </button>
            <button
              className="bacon top"
              name="bacon"
              onClick={() => this.handleSelect(3)}
            >
              <Check />
              bacon
            </button>
            <button
              className="gold top"
              name="gold flakes"
              onClick={() => this.handleSelect(4)}
            >
              <Check />
              gold
            </button>
            <button
              className="strawberries top"
              //
              name="strawberries"
              onClick={() => this.handleSelect(5)}
            >
              <Check />
              strawberries
            </button>

            <button
              className="bananas top"
              name="bananas"
              onClick={() => this.handleSelect(6)}
            >
              <Check />
              bananas
            </button>
            <button
              className="sprinkles top"
              name="sprinkles"
              onClick={() => this.handleSelect(7)}
            >
              <Check />
              sprinkles
            </button>

            <button
              className="chocdrizzle top"
              name="chocdrizzle"
              onClick={() => this.handleSelect(11)}
            >
              <Check />
              chocolate drizzle
            </button>

            <button
              className="pbdrizzle top"
              name="pbdrizzle"
              onClick={() => this.handleSelect(12)}
            >
              <Check />
              peanut butter drizzle
            </button>
          </div> */}

          <Droptop atop={this.state.topping} />
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
    topping,
    kind,
    currentDonut,
    currentToppings,
    currentBox,
    toppings
  } = state.donutReducer;
  const { user } = state.userReducer;
  return {
    kind,
    currentDonut,
    currentToppings,
    currentBox,
    user,
    toppings
  };
}
export default connect(mapStateToProps, {
  createBox,
  addDonut,
  addToBox,
  addToppings,
  getAllToppings
})(Toppings);
