import React, { Component } from "react";

class ShowBox extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getBox();
  }

  render() {
    return (
      <div>
        <p>Show Box</p>
      </div>
    );
  }
}

export default ShowBox;
