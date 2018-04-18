import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getBox, removeDonut } from "../../ducks/donutReducer";

import image from "../../placeholder.png";
import "./Box.css";

class Box extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getBox();
  }
  render() {
    let dozen = <p>loading...</p>;
    const { box, isLoading } = this.props;
    if (box && box.length > 0 && !isLoading) {
      dozen = box.map((e, i) => {
        return (
          <div key={i} className="ind-donut">
            <button
              onClick={() => {
                this.props.removeDonut(e.id);
              }}
            >
              <h2>Remove from box</h2>
            </button>

            <img src={image} alt="placeholder" />
            <div>
              <h2>{e.kind} donut</h2>
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
        <Link to="/">
          <button>Get more donuts</button>
        </Link>
        <button>Order Now!</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, { getBox, removeDonut })(Box);
