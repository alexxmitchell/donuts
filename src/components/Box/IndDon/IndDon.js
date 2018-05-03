import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getToppings,
  addToBox,
  getBox,
  getTotal
} from "../../../ducks/donutReducer";
import image from "../../../placeholder.png";
import cake from "../../images/cake.png";
import choc from "../../images/chocolate.png";
import "./IndDon.css";
import IndTop from "./IndTop/IndTop";

class IndDon extends Component {
  constructor(props) {
    super(props);

    this.removed = this.removed.bind(this);
    // this.added = this.added.bind(this);
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
        {this.props.type === "Cake" ? (
          <img className="lildo" src={cake} alt="cake" />
        ) : (
          <img className="lildo" src={choc} alt="chocolate" />
        )}
        <div>
          <h2>{this.props.type} donut</h2>
          with
          {this.props.currentToppings && (
            <IndTop currentToppings={correctToppings} />
          )}
          <div className="price">
            {this.props.price ? (
              <p>$ {(+this.props.price + this.props.cost).toFixed(2)}</p>
            ) : (
              <p>$1</p>
            )}
          </div>
        </div>
        <button onClick={this.removed}>
          <h2>Remove from List</h2>
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
