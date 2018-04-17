import React, { Component } from "react";
import { connect } from "react-redux";
import { getBox, getDonuts, removeDonut } from "../../ducks/donutReducer";

import image from "../../placeholder.png";
import "./Box.css";

class Box extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getDonuts();
  }
  render() {
    let dozen = <p>loading...</p>;
    const { donuts, isLoading } = this.props;
    if (donuts && donuts.length > 0 && !isLoading) {
      dozen = donuts.map((e, i) => {
        return (
          <div className="ind-donut">
            <button
              onClick={() => {
                this.props.removeDonut(e.id);
              }}
            >
              <h2>Remove from box</h2>
            </button>

            <img src={image} alt="placeholder" />
            <div>
              <h2 key={i}>{e.kind} donut</h2>
              <p>
                with {e.topping1}, {e.topping2}, {e.topping3}
              </p>
            </div>
          </div>
        );
      });
    }
    return (
      <div className="order">
        <button
          onClick={() => (window.location.href = "http://localhost:3001/login")}
        >
          Login to view previous order
        </button>
        <div>{dozen}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, { getBox, getDonuts, removeDonut })(
  Box
);
