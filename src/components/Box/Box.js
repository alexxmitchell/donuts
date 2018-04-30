import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import IndDon from "./IndDon/IndDon";
import ShowBox from "./ShowBox/ShowBox";
import {
  getBox,
  removeDonut,
  getDonuts,
  getToppings,
  changeTopping
} from "../../ducks/donutReducer";

import "./Box.css";

class Box extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toppings: []
    };
  }

  componentDidMount() {
    this.props.getDonuts(this.props.user.id);
  }

  render() {
    let dozen = (
      <div className="not-logged">
        <p>You have no donuts. Please login to view donuts</p>
        <button>Login now</button>
      </div>
    );
    const { donuts, isLoading, box } = this.props;
    if ((donuts && donuts.length > 0) || box.length > 0) {
      dozen = donuts.map((e, i) => {
        return (
          <IndDon
            key={e.id}
            do={e.id}
            type={e.kind}
            price={e.sum}
            removeDonut={this.props.removeDonut}
            getDonuts={this.props.getDonuts}
          />
        );
      });
    }

    let gotDonuts = <div className="hidden" />;
    if ((donuts && donuts.length > 0) || box.length > 0) {
      gotDonuts = (
        <div className="actual-box">
          <ShowBox />
          <Link to="/donut">
            <button>Get more donuts</button>
          </Link>
        </div>
      );
    }

    return (
      <div className="order">
        <div className="order-container">
          <div className="do-container">{dozen}</div>
          {gotDonuts}
        </div>
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
  removeDonut,
  getDonuts,
  getToppings,
  changeTopping
})(Box);
