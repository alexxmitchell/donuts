import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getBox } from "../../ducks/donutReducer";
import { getUser } from "../../ducks/userReducer";
import bag from "../images/lunchbox.png";
import profileimg from "../images/profile.png";
import "./Slide.css";

class Slide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "none"
    };

    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  componentDidMount() {}

  openMenu() {
    if (
      this.state.display === "none"
        ? this.setState({ display: "inline-block" })
        : this.setState({ display: "none" })
    );
  }
  closeMenu() {
    this.setState({ display: "none" });
  }

  render() {
    let donutCount = 0;
    {
      this.props.box && this.props.box.length > 0
        ? (donutCount = this.props.box.length)
        : (donutCount = 0);
    }

    let boxTotal = this.props.box.reduce((acc, sum, i) => {
      return acc + Number(this.props.box[i].sum);
    }, 0);
    let length = this.props.box.length;
    return (
      <div className="slide-menu">
        <button className="bag" onClick={() => this.openMenu()}>
          <img className="bag" src={bag} alt="bag" />
        </button>

        <div className="menu" style={{ display: `${this.state.display}` }}>
          <div>
            <button
              className="close-menu"
              onClick={() => {
                this.closeMenu();
              }}
            >
              <i className="fas fa-times fa-2x" />
            </button>
            <div className="slide-margin">
              {this.props.user.id ? (
                <div>
                  <h1>Welcome {this.props.user.name}</h1>
                  <Link to="/profile">
                    <button
                      className="slide-button"
                      onClick={() => this.closeMenu()}
                    >
                      <h1 className="slide-items">Your Account</h1>
                    </button>
                  </Link>
                </div>
              ) : (
                ""
              )}

              <Link to="/box">
                <button
                  className="slide-button"
                  onClick={() => this.closeMenu()}
                >
                  <h1 className="slide-items">View Box: {donutCount} donuts</h1>
                </button>
              </Link>
              {this.props.box && this.props.box.length > 0 ? (
                <Link to="/order">
                  <button
                    className="slide-button"
                    onClick={() => this.closeMenu()}
                  >
                    <h1 className="slide-items">Checkout</h1>
                  </button>
                </Link>
              ) : (
                ""
              )}
              {!this.props.user.id ? (
                <a href={process.env.REACT_APP_LOGIN}>
                  <button className="log-button">Login</button>
                </a>
              ) : (
                <a href={process.env.REACT_APP_LOGOUT}>
                  <button className="log-button">Logout</button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.donutReducer,
    ...state.userReducer
  };
}
export default connect(
  mapStateToProps,
  { getBox, getUser }
)(Slide);
