import React, { Component } from "react";
import { connect } from "react-redux";
import "../IndDon/IndDon.css";
import ShowTop from "../IndDon/IndTop/IndTop";
import { getBox, getToppings } from "../../../ducks/donutReducer";

import image from "../../../placeholder.png";
class ShowBox extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.getBox(this.props.currentBox[0].id);
    this.props.getToppings(this.props.do);
  }

  render() {
    console.log(this.props.box);
    console.log(this.props.currentBox);
    const boxToppings = this.props.currentToppings.filter(
      e => e.donut_id == this.props.do
    );
    const boxer = this.props.box.map((e, i) => {
      return (
        <div className="ind-donut" key={i}>
          <button onClick={this.removed}>
            <h2>Remove from box</h2>
          </button>
          <img src={image} alt="placeholder" />
          <div>
            <h2>{e.kind} donut</h2>

            <div>
              with
              {this.props.currentToppings && <ShowTop />}
            </div>
            {e.sum ? (
              <p>$ {(+e.sum + this.props.cost).toFixed(2)}</p>
            ) : (
              <p>$1</p>
            )}
          </div>
        </div>
      );
    });
    return (
      <div>
        <p>Show Box</p>
        <div className="yoDos">{boxer}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.donutReducer,
    ...state.userReducer
  };
}
export default connect(mapStateToProps, { getBox, getToppings })(ShowBox);
