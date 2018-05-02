import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="profile-page">
        <form>
          <p>name</p>
          <input type="text" placeholder="name" />
          <p>email</p>
          <input type="text" placeholder="email" />
          <p>address line 1</p>
          <input type="text" placeholder="address line 1" />
          <p>address line 2</p>
          <input type="text" placeholder="address line 2" />
          <p>city</p>
          <input type="text" placeholder="city" />
          <p>state</p>
          <input type="text" placeholder="state" />
          <p>zipcode</p>
          <input type="text" placeholder="zipcode" />
          <input type="submit" value="Update Account" />
        </form>
      </div>
    );
  }
}

export default Profile;
