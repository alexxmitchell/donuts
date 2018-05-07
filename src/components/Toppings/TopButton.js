import React, { Component } from "react";
import { connect } from "react-redux";
import Check from "./Check/Check";

import { addToppings } from "../../ducks/donutReducer";

import "./Toppings.css";

class TopButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false
    };
    this.selectedVal = this.selectedVal.bind(this);
  }

  selectedVal(id) {
    if (this.state.isChecked === false) {
      this.props.handleSelect(id);
      this.setState({
        isChecked: true
      });
    } else {
      this.props.removeTop(id);
      this.setState({ isChecked: false });
    }
  }

  render() {
    return (
      <div className="topping-container">
        <button
          onClick={() => this.selectedVal(this.props.id)}
          style={{
            backgroundImage: `url(${this.props.image})`,
            backgroundPosition: "center",
            opacity: 0.8
          }}
        >
          {this.state.isChecked && <Check />}

          <p className="label">{this.props.name}</p>

          <p className="price">$ {this.props.price}</p>
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    kind,
    currentDonut,
    currentToppings,
    currentBox,
    currDonutTop
  } = state.donutReducer;
  const { user } = state.userReducer;
  return {
    kind,
    currentDonut,
    currentToppings,
    currentBox,
    currDonutTop,
    user
  };
}
export default connect(mapStateToProps, {
  addToppings
})(TopButton);
