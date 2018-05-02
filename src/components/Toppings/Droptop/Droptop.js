import React, { Component } from "react";
import { connect } from "react-redux";
import "./Droptop.css";
import cake from "../../images/cake.png";
import choc from "../../images/chocolate.png";
import chocrasp from "../../images/chocwrasp.png";
import chocwcaramel from "../../images/chocwcaramelicing.png";
import chocwchoc from "../../images/chocwchocicing.png";
import bacon from "../../images/bacon.png";
import cakechocdriz from "../../images/cakewchocdrizzle.png";
import cakepbdriz from "../../images/cakewpbdrizzle.png";
import cakecaramel from "../../images/cakewcaramelicing.png";
import cakerasp from "../../images/cakewraspicing.png";
import cakechoc from "../../images/cakewchocicing.png";

class Droptop extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let image = "";
    let icing = "";
    let toppings = [];
    let topping1 = "";
    let topping2 = "";
    let topping3 = "";
    let topping4 = "";
    let topping5 = "";
    let topping6 = "";
    let topping7 = "";
    let topping8 = "";
    let topping9 = "";
    let topping10 = "";
    let topping11 = "";
    let topping12 = "";

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
          toppings.push(cakechoc);
          console.log("chocolate icing");
          break;
        case 9:
          image = cake;
          toppings.push(cakecaramel);
          console.log("caramel icing");
          break;
        case 10:
          image = cake;
          toppings.push(cakerasp);
          console.log("raspberry icing");
          break;
        case 11:
          image = cake;
          toppings.push(cakechocdriz);
          console.log("chocolate drizzle");
          break;
        case 12:
          image = cake;
          toppings.push(cakepbdriz);
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
          topping1 = cake;
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
          toppings.push(chocwchoc);
          console.log("chocolate icing");
          break;
        case 9:
          image = choc;
          toppings.push(chocwcaramel);
          console.log("caramel icing");
          break;
        case 10:
          image = choc;
          toppings.push(chocrasp);
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

    let displayToppings = this.props.currentToppings.map(e => {
      return <img key={e} className="stacking size" src={e} />;
    });
    return (
      <div className="parent-droptop  hide">
        <div id="column">
          <img className="droptop-icing size" src={icing} alt="icing" />
          {/* <img className="droptop-icing size" src={topping2} alt="a topping" />
        <img className="droptop-icing size" src={topping3} alt="a topping" /> */}
          {image && image === choc ? (
            <div className="chocStack">
              <img
                className="droptop-chocdon size"
                src={image}
                alt="kind of donut"
              />
              {displayToppings}
            </div>
          ) : (
            <div className="cakeStack">
              <img
                className="droptop-cakedon size"
                src={image}
                alt="kind of donut"
              />
              {displayToppings}
            </div>
          )}
        </div>
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
