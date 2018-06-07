import React from "react";
import { Link } from "react-router-dom";
import "./Success.css";

const Success = () => {
  return (
    <div className="success-page">
      <h2>Thank you for your order!</h2>
      <div className="success-container">
        <p>Your box will be available shortly.</p>
      </div>
      <Link to="/">
        <button>Go to Home</button>
      </Link>
    </div>
  );
};

export default Success;
