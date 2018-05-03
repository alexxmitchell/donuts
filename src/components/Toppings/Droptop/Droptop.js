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
import cakebacon from "../../images/cakebacon.png";

class Droptop extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let image = "";
    let icing = "";

    if (this.props.currentDonut.kind === "Cake") {
      image = cake;
    } else if (this.props.currentDonut.kind === "Chocolate") {
      image = choc;
    }

    let displayToppings = this.props.currentDoTop.map((e, i) => {
      if (this.props.currentDonut && this.props.currentDonut.kind === "Cake") {
        switch (e) {
          case 1:
            return <img key={i} className="stacking size" src={choc} />;
            console.log("peanuts");
            break;
          case 2:
            return <img key={i} className="stacking size" src={choc} />;
            console.log("pecans");
            break;
          case 3:
            return <img key={i} className="stacking size" src={cakebacon} />;
            console.log("bacon");
            break;
          case 4:
            return <img key={i} className="stacking size" src={choc} />;
            console.log("gold");
            break;
          case 5:
            return <img key={i} className="stacking size" src={choc} />;
            console.log("strawberries");
            break;
          case 6:
            return <img key={i} className="stacking size" src={choc} />;
            console.log("bananas");
            break;
          case 7:
            return <img key={i} className="stacking size" src={choc} />;
            console.log("sprinkles");
            break;
          case 8:
            return <img key={i} className="stacking size" src={cakechoc} />;
            console.log("chocolate icing");
            break;
          case 9:
            return <img key={i} className="stacking size" src={cakecaramel} />;
            console.log("caramel icing");
            break;
          case 10:
            return <img key={i} className="stacking size" src={cakerasp} />;
            console.log("raspberry icing");
            break;
          case 11:
            return <img key={i} className="stacking size" src={cakechocdriz} />;
            console.log("chocolate drizzle");
            break;
          case 12:
            return <img key={i} className="stacking size" src={cakepbdriz} />;
            console.log("pb drizzle");
            break;
          default:
            console.log("default", this.props.atop);
        }
      } else if (
        this.props.currentDonut &&
        this.props.currentDonut.kind === "Chocolate"
      ) {
        switch (e) {
          case 1:
            return <img key={i} className="stacking size" src={cake} />;
            console.log("peanuts");
            break;
          case 2:
            return <img key={i} className="stacking size" src={cake} />;
            console.log("pecans");
            break;
          case 3:
            return <img key={i} className="stacking size" src={bacon} />;
            console.log("bacon");
            break;
          case 4:
            return <img key={i} className="stacking size" src={cake} />;
            console.log("gold");
            break;
          case 5:
            return <img key={i} className="stacking size" src={cake} />;
            console.log("strawberries");
            break;
          case 6:
            return <img key={i} className="stacking size" src={cake} />;
            console.log("bananas");
            break;
          case 7:
            return <img key={i} className="stacking size" src={cake} />;
            console.log("sprinkles");
            break;
          case 8:
            return <img key={i} className="stacking size" src={chocwchoc} />;

            console.log("chocolate icing");
            break;
          case 9:
            return <img key={i} className="stacking size" src={chocwcaramel} />;

            console.log("caramel icing");
            break;
          case 10:
            return <img key={i} className="stacking size" src={chocrasp} />;
            console.log("raspberry icing");
            break;
          case 11:
            return <img key={i} className="stacking size" src={choc} />;
            console.log("chocolate drizzle");
            break;
          case 12:
            return <img key={i} className="stacking size" src={choc} />;
            console.log("pb drizzle");
            break;
          default:
            console.log("default");
        }
      }
    });
    console.log(this.props);

    return (
      <div className="parent-droptop  hide">
        <div id="column">
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
