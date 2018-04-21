import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import IndDon from "./IndDon/IndDon";
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
    this.props.getDonuts(this.props.userid);
  }

  render() {
    // let toppings = this.props.currentToppings.map((e, i) => {
    //   return (
    //     <div className="top-list" key={i}>
    //       <p>{e}</p>
    //     </div>
    //   );
    // });
    console.log(this.props.name);

    let dozen = (
      <div className="not-logged">
        <p>You have no donuts. Please login to view donuts</p>
        <button>Login now</button>
      </div>
    );
    const { donuts, isLoading } = this.props;
    if (donuts && donuts.length > 0) {
      dozen = donuts.map((e, i) => {
        console.log(e);
        return (
          <IndDon
            key={e.id}
            id={e.id}
            type={e.kind}
            price={e.sum}
            removeDonut={this.props.removeDonut}
          />
        );
      });
    }
    return (
      <div className="order">
        <div className="order-container">
          <div className="do-container">{dozen}</div>
          <div className="actual-box">{this.props.user.name} 's Add to Box</div>
        </div>
        <Link to="/">
          <button>Get more donuts</button>
        </Link>
        <button>Order Now!</button>
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
