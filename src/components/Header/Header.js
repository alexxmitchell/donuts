import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../images/cropped-DonutIcon.png";
import bag from "../images/boxes.png";
const Header = () => {
  return (
    <div className="outer-header">
      <div className="empty" />
      <div className="header-container">
        <Link to="/">
          <h2 className="title">Donut</h2>
          <img className="donut-logo" src={logo} alt="donut" />
          <h2 className="small-name">DF</h2>
          <h2 className="title">Factory</h2>
        </Link>
      </div>
      <Link to="/login">
        <img className="bag" src={bag} alt="bag" />
        {/* <div>
              Dropdown for login
              </div> */}
      </Link>
    </div>
  );
};

export default Header;
