import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../IndDon/IndDon.css";
import "./ShowBox.css";
import ShowTop from "../IndDon/IndTop/IndTop";

import cake from "../../images/cake.png";
import choc from "../../images/chocolate.png";
import {
  getBox,
  getToppings,
  getBoxtops,
  getTotal
} from "../../../ducks/donutReducer";

import image from "../../../placeholder.png";
class ShowBox extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   // this.props.getBox(this.props.currentBox[0].id);
  //   this.props.getBoxtops(this.props.do);
  // }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.total[0] &&
      this.props.total[0].sum !== nextProps.total[0].sum
    ) {
      this.props.getTotal(this.props.currentBox[0].id);
    }
  }

  render() {
    let length = this.props.box.length;
    console.log(this.props.total);
    const correctBoxToppings = this.props.boxToppings.filter(
      e => e.donut_id == this.props.do
    );
    const boxer = this.props.box.map((e, i) => {
      return (
        <div className="ind-donut" key={i}>
          {/* <button onClick={this.removed}>
            <h2>Remove from box</h2>
          </button> */}
          {e.kind === "Cake" ? (
            <img className="lildo" src={cake} alt="cake" />
          ) : (
            <img className="lildo" src={choc} alt="chocolate" />
          )}

          <div>
            <span>
              <h2>{e.kind} donut</h2>
            </span>

            {/* <div>
              with
              {this.props.boxToppings && (
                <ShowTop boxToppings={correctBoxToppings} />
              )}
            </div> */}
            <div className="hovering">
              {e.sum ? (
                <p>$ {(+e.sum + this.props.cost).toFixed(2)}</p>
              ) : (
                <p>$1</p>
              )}
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <p>Show Box</p>
        <div className="donut-box">
          <div className="yoDos">{boxer}</div>
        </div>
        <p>Box Total: </p>
        {this.props.currentBox && this.props.total[0] ? (
          <p>{(+this.props.total[0].sum + this.props.cost).toFixed(2)}</p>
        ) : (
          <p>$0</p>
        )}
        <Link to="/order">
          <button>Order Now!</button>
        </Link>
        <p />
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
export default connect(mapStateToProps, { getBox, getBoxtops, getTotal })(
  ShowBox
);
