import React, { Component } from "react";
import { connect } from "react-redux";
import { getBox } from "../../ducks/donutReducer";

class Box extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getBox();
    console.log(this.props.box);
  }
  render() {
    return <div>Get Box</div>;
  }
}

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, { getBox })(Box);
