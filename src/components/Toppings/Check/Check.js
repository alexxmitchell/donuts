import React from "react";
import checkmark from "../../images/checkmark.png";
import "./Check.css";

const Check = props => {
  return (
    <div>
      <img className="checks" src={checkmark} alt="selected topping" />
    </div>
  );
};
export default Check;
