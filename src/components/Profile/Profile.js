import React from "react";
import { connect } from "react-redux";
import Form from "../Form/Form";
import "./Profile.css";
import filled from "../images/filled-donut.png";

const Profile = props => {
  return (
    <div className="profile-page">
      <h2>Your account</h2>
      <div className="animation">
        <img src={filled} alt="profile-donut" />

        <Form />
        <a href={process.env.REACT_APP_LOGOUT}>
          <button className="submit">Logout</button>
        </a>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    ...state.userReducer
  };
}
export default connect(mapStateToProps)(Profile);
