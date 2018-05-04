import React from "react";
import { Link } from "react-router-dom";
import Form from "../Form/Form";
import "./Profile.css";
import filled from "../images/filled-donut.png";

const Profile = () => {
  return (
    <div className="profile-page">
      <div className="animation">
        <h2>Your profile</h2>
        <img src={filled} alt="donut animation " />
      </div>
      <Form />
      <button>Logout</button>
    </div>
  );
};

export default Profile;
