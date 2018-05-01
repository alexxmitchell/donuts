import React, { Component } from "react";
import "./Logout.css";
import Box from "../Box/Box";

class Logout extends Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false
    };
  }
  render() {
    return (
      <div>
        {/* <div> */}
        {/* <h2>It's sad to see you go</h2>
          <button
            onClick={() =>
              (window.location.href = "http://localhost:3001/login")
            }
          >
            Login
          </button>
        </div>
        )} */}
        {/* <div className="login-page" /> */}
      </div>
    );
  }
}
export default Logout;
