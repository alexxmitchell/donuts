import React, { Component } from "react";
import { connect } from "react-redux";
import "./Droptop.css";

import cake from "../../images/cake.png";
import choc from "../../images/chocolate.png";
import chocrasp from "../../images/chocwrasp.png";
import chocwcaramel from "../../images/chocwcaramelicing.png";
import chocwchoc from "../../images/chocwchocicing.png";
import chocbacon from "../../images/chocbacon.png";
import chocstraw from "../../images/chocstraw.png";
import chocpecan from "../../images/chocpecan.png";
import chocpbdriz from "../../images/chocpbdrizzle.png";
import chocchocdriz from "../../images/chocchocdrizzle.png";
import cakechocdriz from "../../images/cakewchocdrizzle.png";
import cakepbdriz from "../../images/cakewpbdrizzle.png";
import cakecaramel from "../../images/cakewcaramelicing.png";
import cakerasp from "../../images/cakewraspicing.png";
import cakechoc from "../../images/cakewchocicing.png";
import cakebacon from "../../images/cakebacon.png";
import cakestraw from "../../images/cakestraw.png";

class Droptop extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let image = "";

    if (this.props.currentDonut.kind === "Cake") {
      image = cake;
    } else if (this.props.currentDonut.kind === "Chocolate") {
      image = choc;
    }

    let displayToppings = this.props.currentDoTop.map((e, i) => {
      if (this.props.currentDonut && this.props.currentDonut.kind === "Cake") {
        switch (e) {
          case 1:
            return (
              <img key={i} className="stacking size" alt="peanuts" src={choc} />
            );

          case 2:
            return (
              <img key={i} className="stacking size" src={choc} alt="pecans" />
            );

          case 3:
            return (
              <img
                key={i}
                className="stacking size"
                src={cakebacon}
                alt="bacon"
              />
            );

          case 4:
            return (
              <img
                key={i}
                className="stacking size"
                src={choc}
                alt="gold flakes"
              />
            );

          case 5:
            return (
              <img
                key={i}
                className="stacking size"
                src={cakestraw}
                alt="strawberries"
              />
            );

          case 6:
            return (
              <img key={i} className="stacking size" src={choc} alt="bananas" />
            );

          case 7:
            return (
              <img
                key={i}
                className="stacking size"
                src={choc}
                alt="sprinkles"
              />
            );

          case 8:
            return (
              <img
                key={i}
                className="stacking size"
                src={cakechoc}
                alt="chocolate icing"
              />
            );

          case 9:
            return (
              <img
                key={i}
                className="stacking size"
                src={cakecaramel}
                alt="caramel icing"
              />
            );

          case 10:
            return (
              <img
                key={i}
                className="stacking size"
                src={cakerasp}
                alt="raspberry icing"
              />
            );

          case 11:
            return (
              <img
                key={i}
                className="stacking size"
                src={cakechocdriz}
                alt="chocolate drizzle"
              />
            );

          case 12:
            return (
              <img
                key={i}
                className="stacking size"
                src={cakepbdriz}
                alt="peanut butter drizzle"
              />
            );

          default:
            console.log("default", this.props.atop);
        }
      } else if (
        this.props.currentDonut &&
        this.props.currentDonut.kind === "Chocolate"
      ) {
        switch (e) {
          case 1:
            return (
              <img key={i} className="stacking size" src={cake} alt="peanuts" />
            );

          case 2:
            return (
              <img
                key={i}
                className="stacking size"
                src={chocpecan}
                alt="pecans"
              />
            );

          case 3:
            return (
              <img
                key={i}
                className="stacking size"
                src={chocbacon}
                alt="bacon"
              />
            );

          case 4:
            return (
              <img
                key={i}
                className="stacking size"
                src={cake}
                alt="gold flakes"
              />
            );

          case 5:
            return (
              <img
                key={i}
                className="stacking size"
                src={chocstraw}
                alt="strawberries"
              />
            );

          case 6:
            return (
              <img key={i} className="stacking size" src={cake} alt="bananas" />
            );

          case 7:
            return (
              <img
                key={i}
                className="stacking size"
                src={cake}
                alt="sprinkles"
              />
            );

          case 8:
            return (
              <img
                key={i}
                className="stacking size"
                src={chocwchoc}
                alt="chocolate icing"
              />
            );

          case 9:
            return (
              <img
                key={i}
                className="stacking size"
                src={chocwcaramel}
                alt="caramel icing"
              />
            );

          case 10:
            return (
              <img
                key={i}
                className="stacking size"
                src={chocrasp}
                alt="raspberry icing"
              />
            );

          case 11:
            return (
              <img
                key={i}
                className="stacking size"
                src={chocchocdriz}
                alt="chocolate drizzle"
              />
            );

          case 12:
            return (
              <img
                key={i}
                className="stacking size"
                src={chocpbdriz}
                alt="peanut butter drizzle"
              />
            );

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
