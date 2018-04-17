import React, { Component } from "react";
import { connect } from "react-redux";
import { getBox, getDonuts } from "../../ducks/donutReducer";

import image from "../../placeholder.png";
import "./Box.css";

class Box extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getDonuts();
    console.log(this.props.donuts);
  }
  render() {
    let dozen = <p>loading...</p>;
    const { donuts, isLoading } = this.props;
    if (donuts && donuts.length > 0 && !isLoading) {
      dozen = donuts.map((e, i) => {
        return (
          <div className="ind-donut">
            <input type="checkbox" />
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
        <button onClick="">
          <h2>Remove from box</h2>
        </button>
        <button>Login to view previous order</button>
        <div>{dozen}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, { getBox, getDonuts })(Box);
