import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Category from "./Category/Category";
import Check from "./Check/Check";
import Droptop from "./Droptop/Droptop";

import {
  createBox,
  addDonut,
  addToBox,
  addToppings,
  getAllToppings,
  removeTopping
} from "../../ducks/donutReducer";

import "./Toppings.css";
import TopButton from "./TopButton";

class Toppings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currDonutTop: [],
      topping: 0,
      countTop: 0,
      category: ""
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.addTop = this.addTop.bind(this);
    this.setCategory = this.setCategory.bind(this);
    this.removeTop = this.removeTop.bind(this);
  }

  componentDidMount() {
    this.props.getAllToppings();
  }

  setCategory(val) {
    this.setState({ category: val });
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

  removeTop(id) {
    let removedTopping = this.state.currDonutTop.slice();
    removedTopping.splice(removedTopping.indexOf(id), 1);
    this.setState({ currDonutTop: removedTopping });
    this.props.removeTopping(this.props.currentDonut.id, id);
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
    console.log(this.props);
    let mappedToppings = this.props.toppings
      .filter(top => top.category.includes(this.state.category))
      .map((top, i) => {
        return (
          <TopButton
            key={top.id}
            id={top.id}
            price={top.price}
            name={top.label}
            category={top.category}
            handleSelect={this.handleSelect}
            removeTop={this.removeTop}
            selected={this.state.currDonutTop.includes(top.id)}
          />
        );
      });

    return (
      <div className="topping">
        <div className="topping-header">
          <h2>Step #2: Add Toppings</h2>
        </div>

        <h4>Max 4</h4>
        <p>
          Pick an icing<span>
            <i className="fas fa-long-arrow-alt-right" />
          </span>go sweet, savory or both!{" "}
          <span>
            <i className="fas fa-long-arrow-alt-right" />
          </span>finish with a drizzle
        </p>

        <div className="container-drop-topping">
          <div className="to-contain">{mappedToppings}</div>

          <Droptop
            currentDoTop={this.state.currDonutTop}
            atop={this.state.topping}
          />
        </div>
        <Link to="/box">
          {this.props.box && this.props.box.length > 0 ? (
            <button
              onClick={() => {
                this.props.addToBox(
                  this.props.currentBox.id,
                  this.props.currentDonut.id
                );
              }}
            >
              Add to Box
            </button>
          ) : (
            <button
              className="create-button"
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
    toppings,
    box
  } = state.donutReducer;
  const { user } = state.userReducer;
  return {
    kind,
    currentDonut,
    currentToppings,
    currentBox,
    user,
    toppings,
    box
  };
}
export default connect(mapStateToProps, {
  createBox,
  addDonut,
  addToBox,
  addToppings,
  getAllToppings,
  removeTopping
})(Toppings);
