import React from "react";
import "./IndTop.css";

function IndTop(props) {
  let current = props.currentToppings.map((e, i) => {
    return (
      <div key={i} className="top-listings">
        <p>{e.label}</p>
      </div>
    );
  });
  return <div>{current}</div>;
}

export default IndTop;
