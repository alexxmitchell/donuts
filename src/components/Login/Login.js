import React, { Component } from "react";
import "./Login.css";
import Box from "../Box/Box";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false
    };
  }
  render() {
    return (
      <div>
        {/* {" "}
        {this.state.loggedIn || this.props.box ? (
          <Box />
        ) : (
          <div>
            <h2>Login to view your previous orders</h2>
            <button
              onClick={() =>
                (window.location.href = "http://localhost:3001/login")
              }
            >
              Login
            </button>
          </div>
        )} */}
        <div className="login-page" />
      </div>
    );
  }
}
export default Login;
