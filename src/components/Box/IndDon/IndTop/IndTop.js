import React from "react";
import { connect } from "react-redux";
import "./IndTop.css";

function IndTop(props) {
  let current = props.currentToppings.map((e, i) => {
    console.log("currentTops:", props.currentToppings);
    return (
      <div key={i} className="top-listings">
        <p>{e.label}</p>
      </div>
    );
  });
  return <div>{current}</div>;
}

export default IndTop;
