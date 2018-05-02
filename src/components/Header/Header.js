import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Header.css";
import logo from "../images/cropped-DonutIcon.png";
import bag from "../images/lunchbox.png";
import Dropdown from "./Dropdown";
import Profile from "../Profile/Profile";
import profileimg from "../images/profile.png";

const Header = props => {
  return (
    <div className="outer-header">
      <div className="empty" />
      <div className="header-container">
        <Link to="/">
          <h2 className="title">Good D</h2>
          <img className="donut-logo" src={logo} alt="donut" />
          <h2 className="small-name">GD</h2>
          <h2 className="title">nuts</h2>
        </Link>
        {/* <a name="about">About</a>
        <a name="where">Where</a> */}
      </div>
      {/* <Dropdown /> */}
      <div className="right-header">
        {props.user.id ? (
          <Link to="/profile">
            <img className="person" src={profileimg} alt="profile icon" />
          </Link>
        ) : (
          ""
        )}
        <Link to="/box">
          <img className="bag" src={bag} alt="bag" />
          {/* <div>
              Dropdown for login
              </div> */}
        </Link>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { ...state.userReducer };
}
export default connect(mapStateToProps)(Header);
