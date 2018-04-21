import React, { Component } from "react";
import { connect } from "react-redux";
import { getToppings, addToBox } from "../../../ducks/donutReducer";
import image from "../../../placeholder.png";
import "./IndDon.css";
import IndTop from "./IndTop/IndTop";

class IndDon extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getToppings(this.props.id);
  }
  render() {
    console.log(this.props.id);
    console.log(this.props.box);
    const correctToppings = this.props.currentToppings.filter(
      e => e.donut_id == this.props.id
    );
    return (
      <div className="ind-donut">
        <button
          onClick={() => {
            this.props.removeDonut(this.props.userid, this.props.id);
          }}
        >
          <h2>Remove from box</h2>
        </button>

        <img src={image} alt="placeholder" />
        <div>
          <h2>{this.props.type} donut</h2>

          <div>
            with
            {this.props.currentToppings && (
              <IndTop currentToppings={correctToppings} />
            )}
          </div>
          <p>{this.props.price}</p>
        </div>
        <button
          onClick={() => {
            this.props.addToBox(this.props.box[0], this.props.id);
          }}
        >
          Add to Box
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentToppings: state.donutReducer.currentToppings,
    userid: state.userReducer.userid,
    box: state.donutReducer.box
  };
}

export default connect(mapStateToProps, { getToppings, addToBox })(IndDon);
