import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateUser } from "../../ducks/userReducer";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      address1: "",
      address2: "",
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
      this.state.address1,
      this.state.address2,
      this.state.city,
      this.state.st,
      this.state.zip
    );
  }

  render() {
    return (
      <div className="profile-page">
        <h4>Keep us up to date</h4>
        <form onSubmit={this.submitForm}>
          <p>name</p>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder={this.props.user.name}
            onChange={this.handleInput}
          />
          <p>email</p>
          <input
            type="text"
            name="email"
            value={this.state.email}
            placeholder="email"
            onChange={this.handleInput}
          />
          <p>address line 1</p>
          <input
            type="text"
            name="address1"
            value={this.state.address1}
            placeholder="address line 1"
            onChange={this.handleInput}
          />
          <p>address line 2</p>
          <input
            type="text"
            name="address2"
            value={this.state.address2}
            placeholder="address line 2"
            onChange={this.handleInput}
          />
          <p>city</p>
          <input
            type="text"
            name="city"
            value={this.state.city}
            placeholder="city"
            onChange={this.handleInput}
          />
          <p>state</p>
          <input
            type="text"
            name="st"
            value={this.state.st}
            placeholder="state"
            onChange={this.handleInput}
          />
          <p>zipcode</p>
          <input
            type="text"
            name="zip"
            value={this.state.zip}
            placeholder="zipcode"
            onChange={this.handleInput}
          />
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
