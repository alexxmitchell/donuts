import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { addKind } from "../../ducks/donutReducer";
import "./Donut.css";

class Donut extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="donut-container">
        <h2>Select a Donut</h2>
        <div className="do-container">
          <button value="Cake" className="do" onClick="">
            Cake
          </button>
          <button value="Old-Fashioned" className="do" onClick="">
            Old-Fashioned
          </button>
          <button value="Chocolate" className="do" onClick="">
            Chocolate
          </button>
          <button value="Eclair" className="do" onClick="">
            Eclair
          </button>
          <Link to="/donut/toppings">
            <a
              onClick={() => {
                this.props.addKind(this.props.kind);
              }}
              className="right-arrow"
            >
              >
            </a>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { kind } = state;
  return {
    kind
  };
}
export default connect(mapStateToProps, { addKind })(Donut);
