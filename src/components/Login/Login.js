import React, { Component } from "react";
import "./Login.css";
import Box from "../Box/Box";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      loggedIn: true
    };
  }
  render() {
    return (
      <div>
        {" "}
        {this.state.loggedIn ? (
          <Box />
        ) : (
          <h2>Login to view your previous orders</h2>
        )}
        <div className="login-page" />
      </div>
    );
  }
}
export default Login;
