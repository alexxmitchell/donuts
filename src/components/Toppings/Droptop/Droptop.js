import React, { Component } from "react";
import { connect } from "react-redux";
import "./Droptop.css";
import cake from "../../images/cake.png";
import choc from "../../images/chocolate.png";

class Droptop extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let image = "";
    if (this.props.kind === "Cake") {
      image = cake;
    } else {
      image = choc;
    }
    return (
      <div>
        <img className="droptop-donut hide" src={image} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { kind } = state.donutReducer.kind;
  return {
    kind
  };
}

export default connect(mapStateToProps)(Droptop);
