import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import Form from "../Form/Form";
import "./Profile.css";
import filled from "../images/filled-donut.png";
import { logout} from '../../ducks/userReducer';

const Profile = () => {
  return (
    <div className="profile-page">
      <div className="animation">
        <h2>Your profile</h2>
        <img src={filled} alt="donut animation " />
      </div>
      <Form />
      <button onClick={}>Logout</button>
    </div>
  );
};

function mapStateToProps(state){
  return {
    ...state.userReducer
  }
}
export default connect(mapStateToProps, {logout})(Profile);
