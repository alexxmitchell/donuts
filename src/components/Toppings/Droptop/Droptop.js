import React, { Component } from "react";
import { connect } from "react-redux";
import "./Droptop.css";
import cake from "../../images/cake.png";
import choc from "../../images/chocolate.png";
import chocrasp from "../../images/chocwrasp.png";

class Droptop extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let image = "";
    // if (this.props.currentDonut.kind === "Cake") {
    //   image = cake;
    // } else {
    //   image = choc;
    // }
    console.log(this.props);
    return (
      <div className="parent-droptop  hide">
        <img className="droptop-icing size" src={chocrasp} />
        <img className="droptop-donut size" src={image} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { currentDonut } = state.donutReducer.currentDonut;
  return {
    currentDonut
  };
}

export default connect(mapStateToProps)(Droptop);
