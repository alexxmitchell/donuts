import React, { Component } from "react";
import { connect } from "react-redux";
import "../IndDon/IndDon.css";
import ShowTop from "../IndDon/IndTop/IndTop";
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

  componentDidMount() {
    // this.props.getBox(this.props.currentBox[0].id);
    this.props.getBoxtops(this.props.do);
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.total[0] &&
      this.props.total[0].sum !== nextProps.total[0].sum
    ) {
      this.props.getTotal(this.props.currentBox[0].id);
    }
  }

  render() {
    // console.log(this.props.total[0].sum);

    const correctBoxToppings = this.props.boxToppings.filter(
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
              {/* {this.props.boxToppings && (
                <ShowTop boxToppings={correctBoxToppings} />
              )} */}
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
        <p>Box Total: </p>
        {this.props.currentBox && this.props.total[0] ? (
          <p>
            {Math.floor(
              this.props.total[0].sum + this.props.cost * this.props.box.length
            )}
          </p>
        ) : (
          <p>$0</p>
        )}
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
