import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getToppings,
  addToBox,
  getBox,
  getTotal
} from "../../../ducks/donutReducer";
import cake from "../../images/cake.png";
import choc from "../../images/chocolate.png";
import "./IndDon.css";
import IndTop from "./IndTop/IndTop";

class IndDon extends Component {
  constructor(props) {
    super(props);

    this.removed = this.removed.bind(this);
  }
  componentDidMount() {
    this.props.getToppings(this.props.do);
  }
  removed() {
    this.props.removeDonut(this.props.user.id, this.props.do);
  }

  render() {
    const correctToppings = this.props.currentToppings.filter(
      e => e.donut_id == this.props.do
    );

    return (
      <div className="ind-donut">
        <div className="donut-grouped">
          {this.props.type === "Cake" ? (
            <img className="lildo" src={cake} alt="cake" />
          ) : (
            <img className="lildo" src={choc} alt="chocolate" />
          )}
          <div className="donut-description">
            <h2>{this.props.type} donut</h2>
            <p>toppings:</p>
            {this.props.currentToppings && (
              <IndTop currentToppings={correctToppings} />
            )}
          </div>
        </div>
        <div className="price">
          {this.props.price ? (
            <p>$ {(+this.props.price + this.props.cost).toFixed(2)}</p>
          ) : (
            <p>$1</p>
          )}
        </div>

        <button className="closed" onClick={this.removed}>
          <i className="fas fa-times fa-2x" />
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.userReducer,
    ...state.donutReducer
  };
}

export default connect(mapStateToProps, {
  getBox,
  getToppings,
  addToBox,
  getTotal
})(IndDon);
