import React, { Component } from "react";
import { connect } from "react-redux";
import "../IndDon/IndDon.css";
import IndTop from "../IndDon/IndTop/IndTop";

import image from "../../../placeholder.png";
class ShowBox extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.getBox();
  }

  render() {
    const boxer = this.props.box.map((e, i) => {
      return (
        <div className="ind-donut">
          <button onClick={this.removed}>
            <h2>Remove from box</h2>
          </button>
          <img src={image} alt="placeholder" />
          <div>
            <h2>{e.type} donut</h2>

            <div>
              with
              {this.props.currentToppings && <IndTop />}
            </div>
            {e.price ? (
              <p>$ {(+e.price + this.props.cost).toFixed(2)}</p>
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
        {boxer}
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
export default connect(mapStateToProps)(ShowBox);
