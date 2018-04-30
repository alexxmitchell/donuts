import React, { Component } from "react";
import { connect } from "react-redux";
import "./Droptop.css";
import cake from "../../images/cake.png";
import choc from "../../images/chocolate.png";
import chocrasp from "../../images/chocwrasp.png";

class Droptop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icing: 0,
      topping1: 0,
      topping2: 0,
      topping3: 0
    };
  }
  render() {
    let image = "";
    let topping1 = "";
    if (this.props.currentDonut && this.props.currentDonut.kind === "Cake") {
      switch (this.props.atop) {
        case 1:
          image = cake;
          console.log("peanuts");
          break;
        case 2:
          image = cake;
          console.log("pecans");
          break;
        case 3:
          image = cake;
          console.log("bacon");
          break;
        case 4:
          image = cake;
          console.log("gold");
          break;
        case 5:
          image = cake;
          console.log("strawberries");
          break;
        case 6:
          image = cake;
          console.log("bananas");
          break;
        case 7:
          image = cake;
          console.log("sprinkles");
          break;
        case 8:
          image = cake;
          console.log("chocolate icing");
          break;
        case 9:
          image = cake;
          console.log("caramel icing");
          break;
        case 10:
          image = cake;
          console.log("raspberry icing");
          break;
        case 11:
          image = cake;
          console.log("chocolate drizzle");
          break;
        case 12:
          image = cake;
          console.log("pb drizzle");
          break;
        default:
          image = cake;
          console.log("default", this.props.atop);
      }
    } else if (
      this.props.currentDonut &&
      this.props.currentDonut.kind === "Chocolate"
    ) {
      switch (this.props.atop) {
        case 1:
          image = choc;
          console.log("peanuts");
          break;
        case 2:
          image = choc;
          console.log("pecans");
          break;
        case 3:
          image = choc;
          console.log("bacon");
          break;
        case 4:
          image = choc;
          console.log("gold");
          break;
        case 5:
          image = choc;
          console.log("strawberries");
          break;
        case 6:
          image = choc;
          console.log("bananas");
          break;
        case 7:
          image = choc;
          console.log("sprinkles");
          break;
        case 8:
          image = choc;
          console.log("chocolate icing");
          break;
        case 9:
          image = choc;
          console.log("caramel icing");
          break;
        case 10:
          image = choc;
          topping1 = chocrasp;
          console.log("raspberry icing");
          break;
        case 11:
          image = choc;
          console.log("chocolate drizzle");
          break;
        case 12:
          image = choc;
          console.log("pb drizzle");
          break;
        default:
          image = choc;
          console.log("default");
      }
    }
    console.log(this.props);
    return (
      <div className="parent-droptop  hide">
        <img className="droptop-icing size" src={topping1} alt="icing" />
        {image && image === choc ? (
          <img
            className="droptop-chocdon size"
            src={image}
            alt="kind of donut"
          />
        ) : (
          <img
            className="droptop-cakedon size"
            src={image}
            alt="kind of donut"
          />
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    ...state.donutReducer
  };
}

export default connect(mapStateToProps)(Droptop);
