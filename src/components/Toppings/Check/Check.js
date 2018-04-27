import React, { Component } from "react";
import { checkmark } from "../../images/checkmark.svg";
import "./Check.css";

class Check extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="checks">
        <img src={checkmark} />
      </div>
    );
  }
}
export default Check;
