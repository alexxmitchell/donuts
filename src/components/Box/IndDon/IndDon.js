import React, { Component } from "react";
import { connect } from "react-redux";
import { getToppings, addToBox, getDonuts } from "../../../ducks/donutReducer";
import image from "../../../placeholder.png";
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
    this.props.getDonuts(this.props.user.id);
  }
  render() {
    console.log("flag:", this.props.user.id);

    const correctToppings = this.props.currentToppings.filter(
      e => e.donut_id == this.props.do
    );

    console.log(correctToppings);
    return (
      <div className="ind-donut">
        <button onClick={this.removed}>
          <h2>Remove from box</h2>
        </button>

        <img src={image} alt="placeholder" />
        <div>
          <h2>{this.props.type} donut</h2>

          <div>
            with
            {this.props.currentToppings && (
              <IndTop currentToppings={correctToppings} />
            )}
          </div>
          {this.props.price ? (
            <p>$ {(+this.props.price + this.props.cost).toFixed(2)}</p>
          ) : (
            <p>$1</p>
          )}
        </div>
        <button
          onClick={() => {
            this.props.addToBox(this.props.currentBox[0].id, this.props.do);
          }}
        >
          Add to Box
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // currentToppings: state.donutReducer.currentToppings,
    // userid: state.userReducer.userid,
    // currentBox: state.donutReducer.currentBox,
    // cost: state.donutReducer.cost,
    // donuts: state.donutReducer.donuts,
    // box: state.donutReducer.donuts
    ...state.userReducer,
    ...state.donutReducer
  };
}

export default connect(mapStateToProps, { getToppings, addToBox, getDonuts })(
  IndDon
);
