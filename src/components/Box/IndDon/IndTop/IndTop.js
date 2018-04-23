import React, { Component } from "react";
import { connect } from "react-redux";

function IndTop(props) {
  let current = props.currentToppings.map((e, i) => {
    return (
      <div key={i} className="top-listings">
        <p>- {e.label}</p>
      </div>
    );
  });
  return <div>{current}</div>;
}

export default IndTop;
