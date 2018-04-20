import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  getBox,
  removeDonut,
  getDonuts,
  getToppings
} from "../../ducks/donutReducer";

import image from "../../placeholder.png";
import "./Box.css";

class Box extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getDonuts(this.props.userid);
  }

  render() {
    console.log(this.props.donuts);

    let dozen = (
      <div className="not-logged">
        <p>You have no donuts. Please login to view donuts</p>
        <button>Login now</button>
      </div>
    );
    const { donuts, isLoading } = this.props;
    if (donuts && donuts.length > 0) {
      dozen = donuts.map((e, i) => {
        console.log(e.id);
        return (
          <div key={i} id={e.id} className="ind-donut">
            <button
              onClick={() => {
                this.props.removeDonut(e.id);
              }}
            >
              <h2>Remove from box</h2>
            </button>

            <img src={image} alt="placeholder" />
            <div>
              <button
                onClick={() => {
                  this.props.getToppings(this.props.currentDonut.id);
                }}
              >
                <h2>{e.kind} donut</h2>
              </button>
              <p>
                with {e.label},{e.price}, {e.category}
              </p>
            </div>
          </div>
        );
      });
    }
    return (
      <div className="order">
        {/* <button
          onClick={() => (window.location.href = "http://localhost:3001/login")}
        >
          Login to view previous order
        </button> */}
        <div className="do-container">{dozen}</div>
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
export default connect(mapStateToProps, {
  getBox,
  removeDonut,
  getDonuts,
  getToppings
})(Box);
