import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="outer-header">
      <div className="empty" />
      <div className="header-container">
        {/* <Link to="/"> */}
        <h2 className="title">Donut</h2>
        <img
          className="donut-logo"
          src="http://donut5k.com/wp-content/uploads/2017/04/cropped-DonutIcon.png"
          alt="donut"
        />
        <h2 className="small-name">DF</h2>
        <h2 className="title">Factory</h2>
        {/* </Link> */}
      </div>
      <Link to="/login">
        <img
          className="bag"
          src="https://www.shareicon.net/data/256x256/2016/06/22/784938_bag_512x512.png"
          alt="bag"
        />
      </Link>
    </div>
  );
};

export default Header;
