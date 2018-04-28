import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../images/cropped-DonutIcon.png";
import bag from "../images/lunchbox.png";
import Dropdown from "./Dropdown";
const Header = () => {
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
        <a name="about">About</a>
        <a name="where">Where</a>
      </div>
      {/* <Dropdown /> */}
      <Link to="/box">
        <img className="bag" src={bag} alt="bag" />
        {/* <div>
              Dropdown for login
              </div> */}
      </Link>
    </div>
  );
};

export default Header;
