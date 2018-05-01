import React, { Component } from "react";
import { checkmark } from "../../images/checkmark.png";
import "./Check.css";

class Check extends Component {
  constructor(props) {
    super(props);
  }

  selected() {
    this.props.isChecked;
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
