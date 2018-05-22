import React from "react";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
import "./Header.css";
import logo from "../images/cropped-DonutIcon.png";
import Slide from "./Slide";

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
      </div>

      <div className="right-header">
        <Slide />
      </div>
    </div>
  );
};

export default Header;
