import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getBox } from "../../ducks/donutReducer";
import bag from "../images/lunchbox.png";
import "./Slide.css";
class Slide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // show: false
      display: "none"
    };
    // this.clicked = this.clicked.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  // showSide() {
  //   this.setState({ show: true });
  //   return (
  //     <div className="menu" style={{ width: 250 }}>
  //       <Link to="/profile">Your Account</Link>
  //       <h1>Current Box: donutCount </h1>
  //       <Link to="/box">View Box</Link>
  //     </div>
  //   );
  // }
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

  // componentDidMount() {
  //   this.props.getBox(id);
  // }
  // clicked(e) {
  //   this.setState({ show: !this.state.show }, () => {});
  // }

  render() {
    let donutCount = 0;
    {
      this.props.box && this.props.box.length > 0
        ? (donutCount = this.props.box.length)
        : (donutCount = 0);
    }

    // this.props.box.map((e, i) => {
    //   return <div key={i} id={e.id} />;
    // });
    return (
      <div className="slide-menu">
        <button onClick={() => this.openMenu()}>
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
              <i class="fas fa-times" />
            </button>

            {this.props.user.id ? (
              <div>
                <h1>Welcome {this.props.user.name}</h1>
                <Link to="/profile">
                  <button onClick={() => this.closeMenu()}>
                    <h1 className="slide-items">Your Account</h1>
                  </button>
                </Link>
              </div>
            ) : (
              ""
            )}

            <h1 className="slide-items">Current Box: {donutCount} </h1>
            <Link to="/box">
              <button onClick={() => this.closeMenu()}>
                <h1 className="slide-items">View Box</h1>
              </button>
            </Link>
            {!this.props.user.id ? (
              <button
                onClick={() =>
                  (window.location.href = "http://localhost:3001/login")
                }
              >
                Login
              </button>
            ) : (
              <button>Logout</button>
            )}
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
export default connect(mapStateToProps, { getBox })(Slide);
