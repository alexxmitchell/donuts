import React, { Component } from "react";
import { connect } from "react-redux";

function ShowTop(props) {
  let boxCurrent = props.currentToppings.map((e, i) => {
    return (
      <div key={i} className="top-listings">
        <p>- {e.label}</p>
      </div>
    );
  });
  return <div>{boxCurrent}</div>;
}

export default ShowTop;
