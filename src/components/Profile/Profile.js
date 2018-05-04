import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateUser } from "../../ducks/userReducer";
import "./Profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      address: "",

      city: "",
      st: "",
      zip: ""
    };

    this.handleInput = this.handleInput.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitForm() {
    this.props.updateUser(
      this.props.user.id,
      this.state.name,
      this.state.email,
      this.state.address,
      this.state.city,
      this.state.st,
      this.state.zip
    );
  }

  render() {
    return (
      <div className="profile-page">
        <h2>Keep us up to date</h2>
        <form onSubmit={this.submitForm}>
          <div className="inputIcon">
            <p>name</p>
            <i
              className="fa fa-user"
              aria-hidden="true"
              value={this.props.user.name}
            />
            <input
              type="text"
              name="name"
              value={this.state.name}
              placeholder={this.props.user.name}
              onChange={this.handleInput}
            />
          </div>
          <div className="inputIcon">
            <p>email</p>
            <i class="fa fa-envelope" aria-hidden="true" />
            <input
              type="text"
              name="email"
              value={this.state.email}
              placeholder="email"
              onChange={this.handleInput}
            />
          </div>
          <div className="inputIcon">
            <p>address</p>
            <i class="fa fa-address-card" aria-hidden="true" />
            <input
              type="text"
              name="address1"
              value={this.state.address1}
              placeholder="address"
              onChange={this.handleInput}
            />
          </div>

          <div className="inputIcon">
            <p>city</p>
            <i class="fa fa-address-card" aria-hidden="true" />
            <input
              type="text"
              name="city"
              value={this.state.city}
              placeholder="city"
              onChange={this.handleInput}
            />
          </div>
          <div className="inputIcon">
            <p>state</p>
            <i class="fa fa-address-card" aria-hidden="true" />
            <input
              type="text"
              name="st"
              value={this.state.st}
              placeholder="state"
              onChange={this.handleInput}
            />
          </div>
          <div className="inputIcon">
            <p>zipcode</p>
            <i class="fa fa-address-card" aria-hidden="true" />
            <input
              type="text"
              name="zip"
              value={this.state.zip}
              placeholder="zipcode"
              onChange={this.handleInput}
            />
          </div>
          <input type="submit" value="Update Account" />
        </form>
        <Link to="/donut">
          <button>Get Some Donuts</button>
        </Link>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { ...state.userReducer };
}
export default connect(mapStateToProps, { updateUser })(Profile);
