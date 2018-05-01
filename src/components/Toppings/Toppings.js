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
      currDonutTop: [],
      topping: 0,
      countTop: 0
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.addTop = this.addTop.bind(this);
  }

  componentDidMount() {
    this.props.getAllToppings();
  }

  handleSelect(val) {
    this.setState(
      {
        topping: Number(val)
      },
      () => {
        this.addTop();
      }
    );
  }

  addTop() {
    console.log("length:", this.state.currDonutTop.length);
    if (this.state.currDonutTop.length <= 3) {
      let newArr = this.state.currDonutTop.slice();
      //push setstate
      newArr.push(this.state.topping);
      this.setState({ currDonutTop: newArr });
      this.props.addToppings(this.props.currentDonut.id, this.state.topping);
    } else {
      alert("You have selected 1 too many toppings");
    }
  }

  render() {
    //click event for selecting toppings; want to have a checkmark display if the topping is selected
    let mappedToppings = this.props.toppings.map((e, i) => {
      return (
        <TopButton
          key={e.id}
          id={e.id}
          price={e.price}
          name={e.label}
          category={e.category}
          handleSelect={this.handleSelect}
          selected={this.state.currDonutTop.includes(e.id)}
        />
      );
    });

    return (
      <div className="topping">
        <h2>Toppings</h2>
        <Category />
        <h4>Select toppings (max 4)</h4>
        <p>1. Start with a base</p>
        <p>
          2. Go <span className="sweet">sweet</span> or{" "}
          <span className="savory">savory</span> or both
        </p>
        <div className="container-drop-topping">
          <div className="to-contain">{mappedToppings}</div>

          <Droptop
            currentDoTop={this.state.currDonutTop}
            atop={this.state.topping}
          />
        </div>
        <Link to="/box">
          {this.props.currentBox.id ? (
            <button>Add to Box</button>
          ) : (
            <button
              onClick={() => {
                this.props
                  .createBox(this.props.user.id)
                  .then(res =>
                    this.props.addToBox(
                      res.value.data[0].id,
                      this.props.currentDonut.id
                    )
                  )
                  .catch(console.log);
              }}
            >
              Create Box
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
